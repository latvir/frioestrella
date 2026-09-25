import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;
    const name = data.name?.trim();
    const phone = data.phone?.trim();
    const email = data.email?.trim() || "";
    const message = data.message?.trim();

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json(
        { error: "Contact form is not configured yet." },
        { status: 503 }
      );
    }

    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        source: "frioestrella-contact-form",
        name,
        phone,
        email,
        message,
        createdAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Message delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error", error);
    return NextResponse.json({ error: "Could not send message." }, { status: 500 });
  }
}
