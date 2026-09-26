import { NextResponse } from "next/server";
import {
  isEmailJsConfigured,
  sendEmailJsEmail,
} from "@/lib/emailjs";

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
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isEmailJsConfigured()) {
      return NextResponse.json(
        { error: "Contact form is not configured yet." },
        { status: 503 }
      );
    }

    const contactInfo = [
      `Vārds: ${name}`,
      `Telefons: ${phone}`,
      `E-pasts: ${email || "Nav norādīts"}`,
    ].join("\n");

    await sendEmailJsEmail({
      source: "Kontaktforma",
      contact_info: contactInfo,
      content_title: "Ziņojums",
      content: message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Could not send message." },
      { status: 500 }
    );
  }
}