import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { isContactDeliveryConfigured } from "@/lib/contact-delivery";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FocusIcon } from "@/components/ui/FocusIcon";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DonationSection } from "@/components/sections/DonationSection";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Discover how you can contribute to Notun Sokal—become a volunteer, donate responsibly, collaborate, share skills, or partner as an institution.",
  alternates: {
    canonical: "/get-involved",
  },
};

const pathways = [
  {
    id: "volunteer",
    title: "Become a Volunteer",
    description:
      "Volunteers are the heart of community-led change. Whether you can assist with neighbourhood outreach, help students with reading and homework, or support local awareness drives in Siliguri, your steady presence matters.",
    ctaLabel: "Express Volunteer Interest",
    ctaHref: "#enquire-now",
    iconName: "hand-helping" as const,
  },
  {
    id: "donate",
    title: "Donate to Support the Mission",
    description:
      "Financial contributions help sustain grassroots materials, learning supplies, and community support needs. Every contribution can be verified directly with Notun Sokal prior to payment.",
    ctaLabel: "Go to Donation Section",
    ctaHref: "#donate",
    iconName: "heart" as const,
  },
  {
    id: "collaborate",
    title: "Collaborate With Us",
    description:
      "Local civic groups, educators, doctors, youth collectives, and socially conscious individuals can co-host awareness sessions, workshops, or community assistance efforts alongside Notun Sokal.",
    ctaLabel: "Propose a Collaboration",
    ctaHref: "/contact?subject=Collaboration+Proposal",
    iconName: "handshake" as const,
  },
  {
    id: "community-initiatives",
    title: "Support Community Initiatives",
    description:
      "Contribute practical resources such as stationery, books, clean drinking water arrangements, or logistical support for neighbourhood gatherings and learning circles.",
    ctaLabel: "Offer Initiative Support",
    ctaHref: "/contact?subject=Supporting+Community+Initiatives",
    iconName: "users" as const,
  },
  {
    id: "institutional-partner",
    title: "Become an Institutional Partner",
    description:
      "Schools, colleges, healthcare practices, and community-minded businesses can collaborate with Notun Sokal through structured skill-sharing, student volunteering, or CSR-aligned local partnerships.",
    ctaLabel: "Discuss Institutional Partnership",
    ctaHref: "/contact?subject=Institutional+Partnership+Enquiry",
    iconName: "building" as const,
  },
  {
    id: "share-skills",
    title: "Share Your Skills",
    description:
      "If you bring experience in teaching, vocational training, community health education, administration, or communications, sharing a few hours of mentorship can uplift others.",
    ctaLabel: "Share Your Expertise",
    ctaHref: "#enquire-now",
    iconName: "lightbulb" as const,
  },
];

export default function GetInvolvedPage() {
  const deliveryConfigured = isContactDeliveryConfigured();

  return (
    <>
      <PageHeader
        eyebrow="Stand Together"
        title="Get Involved With Notun Sokal"
        description="Meaningful social welfare depends on people who show up with compassion, time, expertise, and shared responsibility. Explore the ways you can participate."
        breadcrumbs={[{ label: "Get Involved" }]}
        tone="cream"
      />

      {/* Participation Pathways */}
      <section className="border-b border-border-soft bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Participation Pathways"
            title="Ways to Contribute"
            description="Choose a path that matches your availability, strengths, or institutional capacity."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-28 flex flex-col justify-between rounded-lg border border-border-soft bg-ivory p-7"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-mint-bg text-forest">
                    <FocusIcon name={item.iconName} className="h-5 w-5" />
                  </span>
                  <h2 className="font-display mt-5 text-2xl font-semibold text-dark-green">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border-soft pt-5">
                  <ButtonLink href={item.ctaHref} variant="secondary">
                    <span>{item.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <DonationSection />

      {/* Involvement Enquiry Form */}
      <section
        id="enquire-now"
        className="scroll-mt-24 bg-ivory py-16 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Volunteer & Partner Enquiry"
            title="Tell Us How You Would Like to Participate"
            description="Share your area of interest—volunteering, mentoring, or institutional collaboration—and we will connect with you."
            align="center"
            className="mb-10"
          />

          <ContactForm
            isDeliveryConfigured={deliveryConfigured}
            defaultInquiryType="volunteer"
            defaultSubject="Volunteering & Participation Enquiry"
          />
        </div>
      </section>
    </>
  );
}
