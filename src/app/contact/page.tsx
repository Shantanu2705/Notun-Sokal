import type { Metadata } from "next";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { isContactDeliveryConfigured } from "@/lib/contact-delivery";
import { INQUIRY_TYPES } from "@/lib/validation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Notun Sokal in Pradhan Nagar, Siliguri, India (+91 80014 11222 | tenuramroy788@gmail.com) for volunteering, collaborations, or donation verification.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; type?: string }>;
}) {
  const resolved = await searchParams;
  const deliveryConfigured = isContactDeliveryConfigured();

  const defaultSubject =
    typeof resolved.subject === "string"
      ? resolved.subject.slice(0, 120)
      : "";

  const defaultInquiryType = INQUIRY_TYPES.includes(
    resolved.type as (typeof INQUIRY_TYPES)[number]
  )
    ? (resolved.type as (typeof INQUIRY_TYPES)[number])
    : "general";

  return (
    <>
      <PageHeader
        eyebrow="Reach Out"
        title="Contact Notun Sokal"
        description="Whether you wish to volunteer, collaborate, ask a question about community initiatives, or verify donation details, we welcome your message."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Direct Contact Details & Expectations */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-lg border border-border-soft bg-white p-7">
                <h2 className="font-display text-2xl font-semibold text-dark-green">
                  Official Contact Details
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Organisation: <strong className="text-ink">{siteConfig.name}</strong>
                </p>

                <dl className="mt-6 space-y-5 text-sm sm:text-base">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mint-bg text-forest">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold tracking-wider text-muted uppercase">
                        Telephone
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={siteConfig.contact.phoneHref}
                          className="font-semibold text-dark-green hover:text-forest hover:underline"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mint-bg text-forest">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold tracking-wider text-muted uppercase">
                        Email Address
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={siteConfig.contact.emailHref}
                          className="font-semibold break-all text-dark-green hover:text-forest hover:underline"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mint-bg text-forest">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold tracking-wider text-muted uppercase">
                        Address
                      </dt>
                      <dd className="mt-0.5 leading-relaxed text-ink">
                        <address className="not-italic">
                          {siteConfig.contact.fullAddress}
                        </address>
                      </dd>
                      <a
                        href={siteConfig.contact.mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:underline"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="rounded-lg border border-border-soft bg-mint-bg p-6">
                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-dark-green">
                      Response Expectations
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">
                      Enquiries are reviewed by our team as capacity allows. For
                      time-sensitive coordination or payment verification
                      questions, calling directly on{" "}
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="font-semibold text-forest underline"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>{" "}
                      is recommended.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                isDeliveryConfigured={deliveryConfigured}
                defaultSubject={defaultSubject}
                defaultInquiryType={defaultInquiryType}
              />
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-14 overflow-hidden rounded-lg border border-border-soft bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-2 border-b border-border-soft px-6 py-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-lg font-semibold text-dark-green">
                  Location Map — Pradhan Nagar, Siliguri
                </h2>
                <p className="text-xs text-muted">
                  {siteConfig.contact.fullAddress}
                </p>
              </div>
              <a
                href={siteConfig.contact.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:underline"
              >
                <span>Get Directions</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
            <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
              <iframe
                title="Map showing Notun Sokal location at Bhaghajatin Colony, Pradhan Nagar, Siliguri, India"
                src={siteConfig.contact.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
