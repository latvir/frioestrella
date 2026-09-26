import { NextResponse } from "next/server";
import {
  buildSystemPrompt,
  SUPPORTED_LANGS,
  type ChatLang,
} from "@/lib/ai-config";
import {
  isEmailJsConfigured,
  sendEmailJsEmail,
} from "@/lib/emailjs";

type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequest = {
  messages?: ChatTurn[];
  lang?: string;
  leadCaptured?: boolean;
};

type DetectedContact = {
  phone?: string;
  email?: string;
};

const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
const PHONE_RE = /(?:\+?\d[\d\s().-]{6,}\d)/g;

const LANGUAGE_LABELS: Record<ChatLang, string> = {
  lv: "Latviešu",
  es: "Español",
  ru: "Русский",
  en: "English",
  de: "Deutsch",
};

function normalizeLang(value?: string): ChatLang {
  return SUPPORTED_LANGS.includes(value as ChatLang)
    ? (value as ChatLang)
    : "lv";
}

function detectContactInLastUserMessage(
  messages: ChatTurn[]
): DetectedContact | null {
  const lastUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === "user");

  if (!lastUserMessage) {
    return null;
  }

  const text = lastUserMessage.content;

  const email = text.match(EMAIL_RE)?.[0];

  const phones = text.match(PHONE_RE) || [];
  const phone = phones.find(
    (candidate) => candidate.replace(/\D/g, "").length >= 7
  );

  if (!phone && !email) {
    return null;
  }

  return {
    phone: phone?.trim(),
    email: email?.trim(),
  };
}

function formatConversation(messages: ChatTurn[]) {
  return messages
    .map((message) => {
      const speaker =
        message.role === "user" ? "Klients" : "Estrella";

      return `${speaker}:\n${message.content}`;
    })
    .join("\n\n");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequest;

    const lang = normalizeLang(body.lang);
    const leadAlreadyCaptured = Boolean(body.leadCaptured);

    const messages = (body.messages || [])
      .filter(
        (message): message is ChatTurn =>
          (message?.role === "user" ||
            message?.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0
      )
      .slice(-20)
      .map((message) => ({
        role: message.role,
        content: message.content.trim().slice(0, 4000),
      }));

    if (!messages.length) {
      return NextResponse.json(
        { error: "Empty conversation." },
        { status: 400 }
      );
    }

    const apiKey =
      process.env.OPENAI_API_KEY ||
      process.env.AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "AI is not configured yet. Add OPENAI_API_KEY to the environment.",
        },
        { status: 503 }
      );
    }

    const baseUrl = (
      process.env.AI_BASE_URL ||
      "https://api.openai.com/v1"
    ).replace(/\/$/, "");

    const model =
      process.env.AI_MODEL || "gpt-5.6-luna";

    const leadCaptureEnabled = isEmailJsConfigured();

    const aiResponse = await fetch(
      `${baseUrl}/chat/completions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: "system",
              content: buildSystemPrompt(
                lang,
                leadCaptureEnabled
              ),
            },
            ...messages,
          ],
          max_completion_tokens: 350,
        }),
        cache: "no-store",
      }
    );

    if (!aiResponse.ok) {
      const details = await aiResponse.text();

      console.error(
        "AI API error:",
        aiResponse.status,
        details.slice(0, 1000)
      );

      return NextResponse.json(
        {
          error:
            "AI service returned an error. Check the API key, credits and model.",
        },
        { status: 502 }
      );
    }

    const aiData = await aiResponse.json();

    const reply =
      aiData?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "AI returned an empty response." },
        { status: 502 }
      );
    }

    const fullHistory: ChatTurn[] = [
      ...messages,
      {
        role: "assistant",
        content: reply,
      },
    ];

    let leadSaved = false;

    /*
     * We only look for contact details in the visitor's
     * latest message.
     *
     * This prevents an old phone/email from triggering
     * an email after every subsequent chat message.
     *
     * leadAlreadyCaptured additionally prevents duplicates
     * during the current browser conversation.
     */
    if (
      leadCaptureEnabled &&
      !leadAlreadyCaptured
    ) {
      const contact =
        detectContactInLastUserMessage(messages);

      if (contact) {
        const contactInfo = [
          contact.phone
            ? `Telefons: ${contact.phone}`
            : null,
          contact.email
            ? `E-pasts: ${contact.email}`
            : null,
          `Valoda: ${LANGUAGE_LABELS[lang]}`,
        ]
          .filter(Boolean)
          .join("\n");

        try {
          await sendEmailJsEmail({
            source: "AI čats",
            contact_info: contactInfo,
            content_title:
              "Saruna ar AI asistentu",
            content:
              formatConversation(fullHistory),
          });

          leadSaved = true;
        } catch (error) {
          /*
           * Do not break the chatbot just because
           * the lead email could not be delivered.
           */
          console.error(
            "AI lead email error:",
            error
          );
        }
      }
    }

    return NextResponse.json({
      reply,
      lead_saved: leadSaved,
    });
  } catch (error) {
    console.error("Chat route error:", error);

    return NextResponse.json(
      {
        error:
          "Could not prepare a response. Please try again.",
      },
      { status: 500 }
    );
  }
}