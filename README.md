# Notun Sokal — Official NGO Website

Production-ready Next.js (App Router, TypeScript, Tailwind CSS) website for **Notun Sokal**, a social welfare organisation based in Siliguri, India.

## Organisation Information

- **Name:** Notun Sokal
- **Address:** Bhaghajatin Colony, Ward No. 45/2, Pradhan Nagar, Siliguri, India, 734003.
- **Phone:** +91 80014 11222
- **Email:** tenuramroy788@gmail.com

## Architecture Overview

- `src/app/` — App Router pages (`/`, `/about`, `/focus-areas`, `/our-work`, `/get-involved`, `/contact`, `/privacy-policy`, `/terms-and-conditions`, `not-found.tsx`), `sitemap.ts`, `robots.ts`, and `api/contact/route.ts`.
- `src/config/site.ts` — Central configuration for official contact details, navigation links, logo asset, and donation QR metadata.
- `src/config/content.ts` — Editable organisation story, mission/vision statements, four focus areas, four-stage approach, initiative categories, and verified project records (`communityProjects`).
- `src/components/` — Reusable UI primitives, sticky responsive navigation, multi-column footer, donation QR panel, collaboration CTA, and validated contact form.
- `src/lib/` — Zod input validation and sanitization (`validation.ts`), sliding-window rate limiter (`rate-limit.ts`), and server-only email/webhook delivery (`contact-delivery.ts`).

## Donation QR Verification

The supplied UPI QR image (`public/images/donation-qr.jpg`) is rendered uncropped and unaltered with generous surrounding white space to preserve scannability. Because the supplied QR currently encodes payee name **Tenu Roy**, the interface displays an explicit verification notice advising contributors to confirm the payee name and contact Notun Sokal directly if verification is needed. To replace the QR asset once an institutional account QR is issued, update `public/images/donation-qr.jpg` and `siteConfig.assets.donationQr` in `src/config/site.ts`.

## Contact Form Configuration

Without mail credentials, `/api/contact` returns HTTP `503` with `configured: false`, and the Contact UI transparently guides visitors to click-to-call, click-to-email, or pre-filled email drafting without showing fake submission success messages.

To enable automated server delivery, copy `.env.example` to `.env.local` (or configure Vercel environment variables):

- `RESEND_API_KEY` — Resend API key for sending enquiries to `CONTACT_RECIPIENT_EMAIL` (defaults to `tenuramroy788@gmail.com`).
- `CONTACT_FROM_EMAIL` — Verified sender address in Resend.
- `CONTACT_WEBHOOK_URL` & `CONTACT_WEBHOOK_SECRET` — Optional alternative webhook endpoint if not using Resend.
- `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN` — Optional distributed Redis rate limiting across serverless instances (falls back to in-memory sliding-window limiting if omitted).

## Security Controls Implemented

- **Security Headers (`next.config.ts`):** `Content-Security-Policy` (restricting scripts, styles, images, frames to `self` and Google Maps embed on Contact), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and production `Strict-Transport-Security`.
- **Server-Side Validation (`src/lib/validation.ts`):** Strict Zod schema validation, control-character and angle-bracket sanitization, and an invisible honeypot field (`website`).
- **Rate Limiting (`src/lib/rate-limit.ts`):** 5 requests per 10-minute window per client IP on `POST /api/contact`.
- **No Secret Exposure:** All mail/webhook/Redis tokens are read exclusively inside server-side modules.

## Local Development & Verification

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run start
```
