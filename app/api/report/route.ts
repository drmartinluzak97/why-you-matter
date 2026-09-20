import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "hello@martinluzak.sk";
const SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL || "Why You Matter Sanctuary <hello@martinluzak.sk>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, country, reportType, message, honeypot } = body;

    // Anti-bot honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Report received." });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a description (at least 5 characters)." },
        { status: 400 }
      );
    }

    const typeLabels: Record<string, string> = {
      outdated_number: "🚨 Outdated / Broken Crisis Number",
      new_helpline: "➕ Propose New Crisis Line",
      bug: "🐛 Website Bug / Technical Issue",
      feedback: "💬 Feedback / Suggestion",
    };

    const category = typeLabels[reportType] || "📋 Issue Report";
    const senderName = name?.trim() || "Anonymous Contributor";
    const senderEmail = email?.trim() || "noreply@why-you-matter.org";
    const countryLabel = country?.trim() || "Unspecified Region";

    const subject = `[Why-You-Matter Report] ${category} (${countryLabel})`;

    // If Resend is not configured yet (local dev mode)
    if (!resend) {
      console.warn("⚠️ RESEND_API_KEY is not configured. Logging report to console.");
      console.log("Mock received report:", {
        senderName,
        senderEmail,
        country: countryLabel,
        reportType,
        message,
      });
      return NextResponse.json(
        {
          success: true,
          mock: true,
          message: "Thank you for helping keep the sanctuary accurate! (Running in development mode).",
        },
        { status: 200 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECEIVER_EMAIL],
      replyTo: senderEmail !== "noreply@why-you-matter.org" ? senderEmail : undefined,
      subject: subject,
      text: `Category: ${category}\nCountry / Region: ${countryLabel}\nFrom: ${senderName} (${senderEmail})\n\nDetails:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
          <div style="border-bottom: 1px solid #edf2f7; padding-bottom: 16px; margin-bottom: 20px;">
            <span style="display: inline-block; padding: 4px 10px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 6px; background-color: #fee2e2; color: #991b1b;">
              ${category}
            </span>
            <h2 style="margin: 12px 0 0 0; font-size: 20px; font-weight: 700; color: #0f172a;">
              New Report from why-you-matter.org
            </h2>
          </div>

          <div style="margin-bottom: 20px; padding: 14px; background-color: #f8fafc; border-radius: 8px;">
            <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Country / Region:</strong> ${countryLabel}</p>
            <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Sender:</strong> ${senderName}</p>
            <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> ${senderEmail}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Report Details:</p>
            <div style="padding: 16px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #334155;">
${message}
            </div>
          </div>

          <div style="border-top: 1px solid #edf2f7; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
            Destination: <a href="mailto:hello@martinluzak.sk" style="color: #2563eb;">hello@martinluzak.sk</a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Delivery service temporarily unavailable. Please email directly to hello@martinluzak.sk.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Thank you for your report! It helps ensure vital crisis hotlines stay accurate.",
    });
  } catch (err: unknown) {
    console.error("Report route exception:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. You can reach out directly to hello@martinluzak.sk.",
      },
      { status: 500 }
    );
  }
}
