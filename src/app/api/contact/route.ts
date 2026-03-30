import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic XSS prevention for the HTML email)
    const sanitize = (str: string) =>
      str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await resend.emails.send({
      from: `Contact Form <noreply@${process.env.EMAIL_DOMAIN || "yourdomain.com"}>`,
      to: process.env.CONTACT_EMAIL || "alex@yourdomain.com",
      replyTo: email,
      subject: `New Contact: ${sanitize(name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #5dcaa5; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-weight: 500;">${sanitize(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${sanitize(email)}" style="color: #378add;">${sanitize(email)}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="margin: 0 0 4px; color: #666; font-size: 12px;">Message</p>
            <p style="margin: 0; color: #1a1a1a; line-height: 1.6; white-space: pre-wrap;">${sanitize(message)}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
