import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Notun Sokal's website, informational accuracy, and voluntary contributions.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Website Governance"
        title="Terms & Conditions"
        description="Guidelines for using the Notun Sokal website and verifying official communications."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <article className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-base leading-relaxed text-ink sm:px-6">
          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-muted">
              By accessing and browsing this website, you agree to use it
              lawfully and respectfully in accordance with these Terms &amp;
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              2. Informational Content &amp; Illustrative Imagery
            </h2>
            <p className="mt-3 text-muted">
              Written materials on this site describe Notun Sokal&apos;s values,
              mission, vision, and thematic focus areas. Where documentary
              photographs from specific field events are not yet published,
              illustrative imagery is displayed for thematic context only and is
              never represented as a specific documented Notun Sokal project or
              beneficiary record.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              3. Voluntary Contributions &amp; Verification
            </h2>
            <p className="mt-3 text-muted">
              Any financial contribution made through the displayed UPI QR code
              is entirely voluntary. Supporters are encouraged to verify the
              recipient name displayed in their UPI payment application (
              {siteConfig.assets.donationQr.listedPayeeName}) and contact
              Notun Sokal directly at {siteConfig.contact.phoneDisplay} or{" "}
              {siteConfig.contact.email} if clarification is needed before
              transferring funds.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              4. Intellectual Property
            </h2>
            <p className="mt-3 text-muted">
              The official Notun Sokal logo and organisation name belong to
              Notun Sokal and may not be altered, distorted, or used for
              misleading representations without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-dark-green">
              5. Contact Regarding These Terms
            </h2>
            <p className="mt-3 text-muted">
              Questions regarding these terms may be addressed to{" "}
              {siteConfig.name}, {siteConfig.contact.fullAddress} Email:{" "}
              <a
                href={siteConfig.contact.emailHref}
                className="font-semibold text-forest underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
