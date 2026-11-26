import { z } from "zod";

const CONTROL_CHARS_REGEX = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function sanitizePlainText(input: string): string {
  return input
    .replace(CONTROL_CHARS_REGEX, "")
    .replace(/[<>]/g, "")
    .trim();
}

export function sanitizeSingleLine(input: string): string {
  return sanitizePlainText(input)
    .replace(/[\r\n]+/g, " ")
    .replace(/\s{2,}/g, " ");
}

export const INQUIRY_TYPES = [
  "general",
  "volunteer",
  "collaboration",
  "donation-query",
  "institutional-partner",
  "skills",
] as const;

export const contactSubmissionSchema = z.object({
  fullName: z
    .string()
    .transform(sanitizeSingleLine)
    .pipe(
      z
        .string()
        .min(2, "Please enter your full name (at least 2 characters).")
        .max(100, "Full name must be 100 characters or fewer.")
    ),
  email: z
    .string()
    .transform((v) => sanitizeSingleLine(v).toLowerCase())
    .pipe(
      z
        .string()
        .email("Please enter a valid email address.")
        .max(160, "Email address must be 160 characters or fewer.")
    ),
  phone: z
    .string()
    .transform(sanitizeSingleLine)
    .pipe(
      z
        .string()
        .min(7, "Please enter a valid phone number.")
        .max(22, "Phone number must be 22 characters or fewer.")
        .regex(
          /^[+\d][\d\s()-]{6,21}$/,
          "Phone number may include digits, spaces, +, -, or parentheses."
        )
    ),
  subject: z
    .string()
    .transform(sanitizeSingleLine)
    .pipe(
      z
        .string()
        .min(3, "Please provide a short subject (at least 3 characters).")
        .max(140, "Subject must be 140 characters or fewer.")
    ),
  inquiryType: z.enum(INQUIRY_TYPES).optional().default("general"),
  message: z
    .string()
    .transform(sanitizePlainText)
    .pipe(
      z
        .string()
        .min(10, "Please share a message of at least 10 characters.")
        .max(2000, "Message must be 2,000 characters or fewer.")
    ),
  // Honeypot field: must remain blank for legitimate human submissions.
  website: z.string().max(0).optional().default(""),
});

export type ValidatedContactSubmission = z.infer<
  typeof contactSubmissionSchema
>;
