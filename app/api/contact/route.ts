import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Log the submission (wire up email service below)
    console.log('[Contact Form]', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // ── Email integration (uncomment and configure one) ───────────────────
    //
    // Option A: Resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@deenadayal.dev',
    //   to: 'dayalbk77@gmail.com',
    //   subject: `[Portfolio] ${subject}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });
    //
    // Option B: Nodemailer + SMTP
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransporter({ ... });
    // await transporter.sendMail({ from: email, to: 'dayalbk77@gmail.com', subject, text: message });
    //
    // ─────────────────────────────────────────────────────────────────────

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}
