import { siteConfig } from "@/config/site";
import type { ValidatedContactSubmission } from "@/lib/validation";

export function isContactDeliveryConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() ||
      process.env.CONTACT_WEBHOOK_URL?.trim()
  );
}

interface DeliveryOutcome {
  sent: boolean;
  configured: boolean;
  errorMessage?: string;
}

export async function deliverContactSubmission(
  payload: ValidatedContactSubmission
): Promise<DeliveryOutcome> {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();

  if (!resendKey && !webhookUrl) {
    return {
      sent: false,
      configured: false,
      errorMessage:
        "Automated email delivery is not configured on this deployment.",
    };
  }

  if (resendKey) {
    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL?.trim() || siteConfig.contact.email;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Notun Sokal Website <onboarding@resend.dev>";

    const textBody = [
      `New enquiry via Notun Sokal website`,
      `----------------------------------------`,
      `Name: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Enquiry Type: ${payload.inquiryType}`,
      `Subject: ${payload.subject}`,
      ``,
      `Message:`,
      payload.message,
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipient],
        reply_to: payload.email,
        subject: `[Notun Sokal Website] ${payload.subject}`,
        text: textBody,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        sent: false,
        configured: true,
        errorMessage: "Unable to deliver your enquiry at this moment.",
      };
    }

    return { sent: true, configured: true };
  }

  if (webhookUrl) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    const secret = process.env.CONTACT_WEBHOOK_SECRET?.trim();
    if (secret) {
      headers["X-Webhook-Secret"] = secret;
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        organisation: siteConfig.name,
        receivedAt: new Date().toISOString(),
        submission: {
          fullName: payload.fullName,
          email: payload.email,
          phone: payload.phone,
          inquiryType: payload.inquiryType,
          subject: payload.subject,
          message: payload.message,
        },
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        sent: false,
        configured: true,
        errorMessage: "Unable to deliver your enquiry at this moment.",
      };
    }

    return { sent: true, configured: true };
  }

  return {
    sent: false,
    configured: false,
    errorMessage: "Automated email delivery is not configured.",
  };
}
