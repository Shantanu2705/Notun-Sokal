import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy & Accessibility",
  description:
    "Read Notun Sokal's Privacy Policy and Accessibility Statement detailing how enquiries are handled and our commitment to inclusive access.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust & Transparency"
        title="Privacy Policy & Accessibility"
        description="How Notun Sokal handles visitor contact information and our commitment to making this website accessible to everyone."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <article className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-base leading-relaxed text-ink sm:px-6">
          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-muted">
              Notun Sokal collects only the personal information you voluntarily
              provide when contacting us by telephone, email, or through our
              enquiry form—specifically your name, email address, phone number,
              subject, and message content. We do not run invasive advertising
              trackers or sell visitor data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              2. How Your Information Is Used
            </h2>
            <p className="mt-3 text-muted">
              Information submitted to Notun Sokal is used solely to respond to
              your enquiry, coordinate volunteering or collaboration requests,
              or verify payment and community support queries. We retain
              correspondence only as long as reasonably required for those
              purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              3. Embedded Services &amp; Donations
            </h2>
            <p className="mt-3 text-muted">
              Our Contact page embeds Google Maps to help visitors locate{" "}
              {siteConfig.contact.fullAddress} Interacting with the embedded map
              is subject to Google&apos;s privacy practices. Donations made via
              third-party UPI applications occur directly inside your chosen
              payment application; this website does not process or store card,
              bank, or UPI credentials.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              4. Security Practices
            </h2>
            <p className="mt-3 text-muted">
              We apply strict server-side input validation, rate limiting on
              enquiry endpoints, HTTP security headers including Content
              Security Policy protections, and HTTPS transport security where
              hosted.
            </p>
          </section>

          <section
            id="accessibility"
            className="scroll-mt-24 border-t border-border-soft pt-10"
          >
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              5. Accessibility Statement
            </h2>
            <p className="mt-3 text-muted">
              Notun Sokal strives to ensure our website is accessible to people
              of all abilities, including keyboard-only and screen-reader users,
              through semantic HTML landmarks, clear colour contrast, alt text
              for imagery, and support for reduced-motion preferences.
            </p>
            <p className="mt-3 text-muted">
              If you experience any difficulty accessing content or require
              information in an alternative format, please contact us at{" "}
              <a
                href={siteConfig.contact.emailHref}
                className="font-semibold text-forest underline"
              >
                {siteConfig.contact.email}
              </a>{" "}
              or call{" "}
              <a
                href={siteConfig.contact.phoneHref}
                className="font-semibold text-forest underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
