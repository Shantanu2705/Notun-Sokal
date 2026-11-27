import { NextRequest, NextResponse } from "next/server";
import {
  deliverContactSubmission,
  isContactDeliveryConfigured,
} from "@/lib/contact-delivery";
import { checkContactRateLimit } from "@/lib/rate-limit";
import { contactSubmissionSchema } from "@/lib/validation";

const MAX_BODY_BYTES = 16 * 1024; // 16 KB max payload
const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || "unknown";
}

function isSameOriginRequest(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true; // Non-browser/server-to-server clients without Origin header

  const host = request.headers.get("host");
  if (!host) return false;

  try {
    const originUrl = new URL(origin);
    return originUrl.host === host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json(
      { ok: false, message: "Cross-origin requests are not permitted." },
      { status: 403, headers: NO_STORE_HEADERS }
    );
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { ok: false, message: "Unsupported content type." },
      { status: 415, headers: NO_STORE_HEADERS }
    );
  }

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const contentLength = Number(contentLengthHeader);
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, message: "Request payload is too large." },
        { status: 413, headers: NO_STORE_HEADERS }
      );
    }
  }

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
          ...NO_STORE_HEADERS,
          "Retry-After": String(
            Math.max(1, Math.ceil((rateLimit.resetAtMs - Date.now()) / 1000))
          ),
        },
      }
    );
  }

  let body: unknown;
  try {
    const rawText = await request.text();
    if (Buffer.byteLength(rawText, "utf8") > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, message: "Request payload is too large." },
        { status: 413, headers: NO_STORE_HEADERS }
      );
    }
    body = JSON.parse(rawText);
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid request payload.",
      },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;
    if (flattened.website && flattened.website.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "Unable to process submission.",
        },
        { status: 400, headers: NO_STORE_HEADERS }
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
      { status: 400, headers: NO_STORE_HEADERS }
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
      { status: 503, headers: NO_STORE_HEADERS }
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
      { status: outcome.configured ? 502 : 503, headers: NO_STORE_HEADERS }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      configured: true,
      message: "Your enquiry has been sent.",
    },
    { status: 200, headers: NO_STORE_HEADERS }
  );
}
