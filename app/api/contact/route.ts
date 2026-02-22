import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  clinic: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const requiredFields: Array<keyof ContactPayload> = [
      "name",
      "email",
      "phone",
      "clinic",
      "message",
    ];
    const missing = requiredFields.filter((key) => !body[key]);

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toAddress = process.env.CONTACT_TO || smtpUser;

    const missingEnv = [
      !smtpHost ? "SMTP_HOST" : null,
      !smtpUser ? "SMTP_USER" : null,
      !smtpPass ? "SMTP_PASS" : null,
      !toAddress ? "CONTACT_TO" : null,
    ].filter(Boolean);

    if (missingEnv.length > 0) {
      return NextResponse.json(
        { error: `Missing env: ${missingEnv.join(", ")}` },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.verify();

    const { name, email, phone, clinic, message } = body as ContactPayload;

    await transporter.sendMail({
      from: `Magency Contact <${smtpUser}>`,
      to: toAddress,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Clinic: ${clinic}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message.";
    const responseMessage =
      process.env.NODE_ENV === "production"
        ? "Failed to send message."
        : errorMessage;

    console.error("Contact form email error:", errorMessage);
    return NextResponse.json({ error: responseMessage }, { status: 500 });
  }
}
