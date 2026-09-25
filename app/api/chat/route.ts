import { NextResponse } from "next/server";
import {
  buildSystemPrompt,
  SUPPORTED_LANGS,
  type ChatLang,
} from "@/lib/ai-config";

type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequest = {
  messages?: ChatTurn[];
  lang?: string;
};

const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
const PHONE_RE = /(?:\+?\d[\d\s().-]{6,}\d)/g;

function normalizeLang(value?: string): ChatLang {
  return SUPPORTED_LANGS.includes(value as ChatLang) ? (value as ChatLang) : "lv";
}

function findContactInLastUserMessage(messages: ChatTurn[]) {
  const lastUserMessage = [...messages].reverse().find((message) => message.role === "user");
  const userText = lastUserMessage?.content || "";

  const email = userText.match(EMAIL_RE)?.[0];
  if (email) return email;

  const phones = userText.match(PHONE_RE) || [];
  return phones.find((phone) => phone.replace(/\D/g, "").length >= 7) || null;
}

async function saveLead(payload: unknown) {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) return false;

  const response = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.LEAD_WEBHOOK_SECRET
        ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_SECRET}` }
        : {}),
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  return response.ok;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequest;
    const lang = normalizeLang(body.lang);
    const messages = (body.messages || [])
      .filter(
        (message): message is ChatTurn =>
          (message?.role === "user" || message?.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0
      )
      .slice(-20)
      .map((message) => ({
        role: message.role,
        content: message.content.trim().slice(0, 4000),
      }));

    if (!messages.length) {
      return NextResponse.json({ error: "Empty conversation." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI is not configured yet. Add OPENAI_API_KEY to .env.local." },
        { status: 503 }
      );
    }

    const baseUrl = (process.env.AI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
    const model = process.env.AI_MODEL || "gpt-5.6-luna";
    const leadCaptureEnabled = Boolean(process.env.LEAD_WEBHOOK_URL);

    const aiResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: buildSystemPrompt(lang, leadCaptureEnabled) },
          ...messages,
        ],
        max_completion_tokens: 350,
      }),
      cache: "no-store",
    });

    if (!aiResponse.ok) {
      const details = await aiResponse.text();
      console.error("AI API error", aiResponse.status, details.slice(0, 1000));
      return NextResponse.json(
        { error: "AI service returned an error. Check the API key, credits and model." },
        { status: 502 }
      );
    }

    const aiData = await aiResponse.json();
    const reply = aiData?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({ error: "AI returned an empty response." }, { status: 502 });
    }

    const fullHistory: ChatTurn[] = [...messages, { role: "assistant", content: reply }];
    const contact = findContactInLastUserMessage(messages);
    let leadSaved = false;

    if (contact && leadCaptureEnabled) {
      try {
        leadSaved = await saveLead({
          source: "frioestrella-ai-chat",
          contact,
          lang,
          conversation: fullHistory,
          createdAt: new Date().toISOString(),
        });
      } catch (error) {
        console.error("Lead webhook error", error);
      }
    }

    return NextResponse.json({ reply, lead_saved: leadSaved });
  } catch (error) {
    console.error("Chat route error", error);
    return NextResponse.json(
      { error: "Could not prepare a response. Please try again." },
      { status: 500 }
    );
  }
}
