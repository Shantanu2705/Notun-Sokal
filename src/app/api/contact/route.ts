import { NextRequest, NextResponse } from "next/server";
import {
  deliverContactSubmission,
  isContactDeliveryConfigured,
} from "@/lib/contact-delivery";
import { checkContactRateLimit } from "@/lib/rate-limit";
import { contactSubmissionSchema } from "@/lib/validation";

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = await checkContactRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many enquiries were sent from this connection. Please wait a few minutes or contact us directly by phone or email.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.max(1, Math.ceil((rateLimit.resetAtMs - Date.now()) / 1000))
          ),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid request payload.",
      },
      { status: 400 }
    );
  }

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;
    if (flattened.website && flattened.website.length > 0) {
      // Quietly reject automated honeypot bot submissions without revealing details.
      return NextResponse.json(
        {
          ok: false,
          message: "Unable to process submission.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Please review the highlighted fields.",
        errors: {
          fullName: flattened.fullName?.[0],
          email: flattened.email?.[0],
          phone: flattened.phone?.[0],
          subject: flattened.subject?.[0],
          message: flattened.message?.[0],
        },
      },
      { status: 400 }
    );
  }

  if (!isContactDeliveryConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message:
          "Automated form email delivery is not configured on this server. Please reach Notun Sokal directly at +91 80014 11222 or tenuramroy788@gmail.com.",
      },
      { status: 503 }
    );
  }

  const outcome = await deliverContactSubmission(parsed.data);
  if (!outcome.sent) {
    return NextResponse.json(
      {
        ok: false,
        configured: outcome.configured,
        message:
          outcome.errorMessage ||
          "We could not deliver your enquiry right now. Please contact us directly by phone or email.",
      },
      { status: outcome.configured ? 502 : 503 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      configured: true,
      message: "Your enquiry has been sent.",
    },
    { status: 200 }
  );
}
