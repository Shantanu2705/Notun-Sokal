"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  Phone,
  Send,
  Info,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { INQUIRY_TYPES } from "@/lib/validation";

interface ContactFormProps {
  isDeliveryConfigured: boolean;
  defaultSubject?: string;
  defaultInquiryType?: (typeof INQUIRY_TYPES)[number];
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const inquiryTypeLabels: Record<(typeof INQUIRY_TYPES)[number], string> = {
  general: "General Enquiry",
  volunteer: "Volunteering",
  collaboration: "Collaboration & Partnership",
  "donation-query": "Donation & Payment Verification",
  "institutional-partner": "Institutional Partnership",
  skills: "Sharing Skills & Expertise",
};

export function ContactForm({
  isDeliveryConfigured,
  defaultSubject = "",
  defaultInquiryType = "general",
}: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [inquiryType, setInquiryType] =
    useState<(typeof INQUIRY_TYPES)[number]>(defaultInquiryType);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "submitting" }
    | { type: "success"; text: string }
    | { type: "unconfigured"; text: string }
    | { type: "error"; text: string }
  >({ type: "idle" });

  function validateClient(): boolean {
    const errors: FieldErrors = {};
    if (fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!/^[+\d][\d\s()-]{6,21}$/.test(phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (subject.trim().length < 3) {
      errors.subject = "Please enter a brief subject (at least 3 characters).";
    }
    if (message.trim().length < 10) {
      errors.message = "Please enter a message of at least 10 characters.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateClient()) return;

    if (!isDeliveryConfigured) {
      setStatus({
        type: "unconfigured",
        text: "Online form delivery is not yet connected to a mail server. Please use the email draft button below, email us directly, or call us by phone.",
      });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          subject,
          inquiryType,
          message,
          website,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        configured?: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (response.status === 503 && data.configured === false) {
        setStatus({
          type: "unconfigured",
          text:
            data.message ||
            "Online form email delivery is not configured yet. Please reach us directly via phone or email.",
        });
        return;
      }

      if (!response.ok || !data.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setStatus({
          type: "error",
          text:
            data.message ||
            "We could not submit your enquiry right now. Please check your details or contact us directly by phone or email.",
        });
        return;
      }

      setStatus({
        type: "success",
        text: "Thank you. Your enquiry has been forwarded to Notun Sokal. We appreciate you reaching out.",
      });
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setFieldErrors({});
    } catch {
      setStatus({
        type: "error",
        text: "A network error prevented your submission. Please contact us directly at +91 80014 11222 or tenuramroy788@gmail.com.",
      });
    }
  }

  const mailtoSubject = encodeURIComponent(
    subject.trim() || `[${inquiryTypeLabels[inquiryType]}] Enquiry for Notun Sokal`
  );
  const mailtoBody = encodeURIComponent(
    [
      fullName.trim() ? `Name: ${fullName.trim()}` : "",
      phone.trim() ? `Phone: ${phone.trim()}` : "",
      `Topic: ${inquiryTypeLabels[inquiryType]}`,
      "",
      message.trim() || "Hello Notun Sokal team,",
    ]
      .filter((line, idx, arr) => line !== "" || (idx > 0 && arr[idx - 1] !== ""))
      .join("\n")
  );
  const mailtoDraftHref = `mailto:${siteConfig.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="rounded-lg border border-border-soft bg-white p-6 shadow-[0_6px_24px_rgba(6,75,42,0.05)] sm:p-8">
      <div className="border-b border-border-soft pb-5">
        <h2 className="font-display text-2xl font-semibold text-dark-green">
          Send an Enquiry
        </h2>
        <p className="mt-1.5 text-sm text-muted">
          We respond to community, volunteering, donation-verification, and
          collaboration messages as soon as our team reviews them.
        </p>
      </div>

      {!isDeliveryConfigured ? (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-md border border-saffron/60 bg-cream p-4 text-sm leading-relaxed text-ink"
        >
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-orange"
            aria-hidden="true"
          />
          <div>
            <p className="font-semibold text-dark-green">
              Direct Email &amp; Phone Contact Active
            </p>
            <p className="mt-1 text-muted">
              Automated server mail delivery is not configured in this
              environment (requires{" "}
              <code className="rounded bg-white px-1.5 py-0.5 text-xs text-dark-green">
                RESEND_API_KEY
              </code>{" "}
              or{" "}
              <code className="rounded bg-white px-1.5 py-0.5 text-xs text-dark-green">
                CONTACT_WEBHOOK_URL
              </code>
              ). You can still validate your details below and open a ready-to-send
              message in your email app, or call{" "}
              <a
                href={siteConfig.contact.phoneHref}
                className="font-semibold text-forest underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        {/* Honeypot anti-spam field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-fullName"
              className="block text-sm font-semibold text-dark-green"
            >
              Full Name <span className="text-orange">*</span>
            </label>
            <input
              id="contact-fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              maxLength={100}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={
                fieldErrors.fullName ? "error-fullName" : undefined
              }
              className="mt-1.5 block min-h-[44px] w-full rounded-md border border-border-soft bg-ivory/40 px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-forest focus:bg-white focus:outline-none sm:text-sm"
              placeholder="Your full name"
            />
            {fieldErrors.fullName ? (
              <p id="error-fullName" className="mt-1.5 text-xs text-red-700">
                {fieldErrors.fullName}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-semibold text-dark-green"
            >
              Email Address <span className="text-orange">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={160}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "error-email" : undefined}
              className="mt-1.5 block min-h-[44px] w-full rounded-md border border-border-soft bg-ivory/40 px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-forest focus:bg-white focus:outline-none sm:text-sm"
              placeholder="you@example.com"
            />
            {fieldErrors.email ? (
              <p id="error-email" className="mt-1.5 text-xs text-red-700">
                {fieldErrors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-semibold text-dark-green"
            >
              Phone Number <span className="text-orange">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              maxLength={22}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? "error-phone" : undefined}
              className="mt-1.5 block min-h-[44px] w-full rounded-md border border-border-soft bg-ivory/40 px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-forest focus:bg-white focus:outline-none sm:text-sm"
              placeholder="+91 98XXX XXXXX"
            />
            {fieldErrors.phone ? (
              <p id="error-phone" className="mt-1.5 text-xs text-red-700">
                {fieldErrors.phone}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-inquiryType"
              className="block text-sm font-semibold text-dark-green"
            >
              Topic
            </label>
            <select
              id="contact-inquiryType"
              name="inquiryType"
              value={inquiryType}
              onChange={(e) =>
                setInquiryType(e.target.value as (typeof INQUIRY_TYPES)[number])
              }
              className="mt-1.5 block min-h-[44px] w-full rounded-md border border-border-soft bg-ivory/40 px-3.5 py-2.5 text-base text-ink focus:border-forest focus:bg-white focus:outline-none sm:text-sm"
            >
              {INQUIRY_TYPES.map((typeKey) => (
                <option key={typeKey} value={typeKey}>
                  {inquiryTypeLabels[typeKey]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-semibold text-dark-green"
          >
            Subject <span className="text-orange">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            maxLength={140}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={fieldErrors.subject ? "error-subject" : undefined}
            className="mt-1.5 block min-h-[44px] w-full rounded-md border border-border-soft bg-ivory/40 px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-forest focus:bg-white focus:outline-none sm:text-sm"
            placeholder="How would you like to connect?"
          />
          {fieldErrors.subject ? (
            <p id="error-subject" className="mt-1.5 text-xs text-red-700">
              {fieldErrors.subject}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-dark-green"
          >
            Message <span className="text-orange">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "error-message" : undefined}
            className="mt-1.5 block w-full rounded-md border border-border-soft bg-ivory/40 px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-forest focus:bg-white focus:outline-none sm:text-sm"
            placeholder="Share your message, volunteering interest, or partnership idea..."
          />
          {fieldErrors.message ? (
            <p id="error-message" className="mt-1.5 text-xs text-red-700">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>

        {status.type === "success" ? (
          <div
            role="status"
            className="flex items-start gap-3 rounded-md border border-natural/40 bg-mint-bg p-4 text-sm text-dark-green"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-forest"
              aria-hidden="true"
            />
            <p>{status.text}</p>
          </div>
        ) : null}

        {status.type === "error" || status.type === "unconfigured" ? (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-md border border-orange/50 bg-cream p-4 text-sm text-ink"
          >
            <AlertCircle
              className="mt-0.5 h-5 w-5 shrink-0 text-orange"
              aria-hidden="true"
            />
            <div className="space-y-2">
              <p>{status.text}</p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs font-semibold">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-1.5 text-forest hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  Call {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={mailtoDraftHref}
                  className="inline-flex items-center gap-1.5 text-forest hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  Open in Email App
                </a>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          {isDeliveryConfigured ? (
            <button
              type="submit"
              disabled={status.type === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-dark-green disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>
                {status.type === "submitting" ? "Sending..." : "Send Enquiry"}
              </span>
            </button>
          ) : (
            <a
              href={mailtoDraftHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-dark-green"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Compose Enquiry via Email</span>
            </a>
          )}

          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border-soft bg-ivory px-4 py-3 text-sm font-semibold text-dark-green transition-colors hover:border-forest hover:bg-mint-bg"
          >
            <Phone className="h-4 w-4 text-forest" aria-hidden="true" />
            <span>Call {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </form>
    </div>
  );
}
