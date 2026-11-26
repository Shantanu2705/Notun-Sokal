import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileClock } from "lucide-react";
import {
  aboutStoryContent,
  approachStages,
  coreValues,
  missionVisionContent,
} from "@/config/content";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Notun Sokal, a social welfare organisation in Siliguri, India dedicated to community support, education, health awareness, and sustainable growth.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Notun Sokal"
        title="Rooted in Compassion. Guided by Community Dignity."
        description="Notun Sokal is a social welfare organisation based in Siliguri, India, committed to strengthening community bonds, supporting education and wellbeing, and nurturing sustainable local progress."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Introduction & Editable Our Story Section */}
      <section className="border-b border-border-soft bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Identity"
                title={aboutStoryContent.heading}
              />

              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink sm:text-lg">
                {aboutStoryContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {!aboutStoryContent.hasVerifiedHistory ? (
                <div
                  role="note"
                  className="mt-8 flex items-start gap-3 rounded-md border border-border-soft bg-ivory p-4 text-sm leading-relaxed text-muted"
                >
                  <FileClock
                    className="mt-0.5 h-5 w-5 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-dark-green">
                      Organisational Records Note
                    </p>
                    <p className="mt-1">
                      {aboutStoryContent.placeholderNotice} We publish only
                      verified institutional facts and refrain from presenting
                      unconfirmed dates, biographies, or credentials.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-border-soft bg-cream">
                <Image
                  src="/images/hero-community.jpg"
                  alt="Illustrative photograph depicting neighbours and volunteers engaged in community conversation"
                  width={960}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="border-t border-border-soft p-6">
                  <p className="text-xs font-semibold tracking-wider text-forest uppercase">
                    Organisation Details
                  </p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-dark-green">Name</dt>
                      <dd className="text-muted">{siteConfig.name}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-dark-green">
                        Location
                      </dt>
                      <dd className="text-muted">
                        {siteConfig.contact.fullAddress}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-dark-green">Contact</dt>
                      <dd className="text-muted">
                        <a
                          href={siteConfig.contact.phoneHref}
                          className="text-forest hover:underline"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </a>{" "}
                        •{" "}
                        <a
                          href={siteConfig.contact.emailHref}
                          className="text-forest hover:underline"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="border-b border-border-soft bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Purpose & Direction"
            title="Our Mission and Vision"
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-forest bg-white p-8 shadow-sm sm:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                {missionVisionContent.mission.label}
              </p>
              <p className="font-display mt-4 text-2xl leading-snug font-semibold text-dark-green">
                {missionVisionContent.mission.statement}
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-orange bg-cream p-8 shadow-sm sm:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">
                {missionVisionContent.vision.label}
              </p>
              <p className="font-display mt-4 text-2xl leading-snug font-semibold text-dark-green">
                {missionVisionContent.vision.statement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-b border-border-soft bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Our Values"
            description="Every conversation, community gathering, and partnership is shaped by four core commitments."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border-soft bg-ivory p-6"
              >
                <CheckCircle2
                  className="h-5 w-5 text-forest"
                  aria-hidden="true"
                />
                <h3 className="font-display mt-4 text-xl font-semibold text-dark-green">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Community Development & Our Approach */}
      <section className="bg-mint-bg py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Stewardship"
                title="Our Commitment to Community Development"
              />
              <p className="mt-5 text-base leading-relaxed text-ink">
                We believe sustainable welfare grows out of patience and
                partnership—working closely with households, young learners,
                elders, and local supporters in Siliguri rather than imposing
                one-size-fits-all ideas.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/focus-areas" variant="primary">
                  <span>Explore Focus Areas</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/get-involved" variant="secondary">
                  <span>Get Involved</span>
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl font-semibold text-dark-green">
                Our Four-Stage Approach
              </h3>
              <ol className="mt-6 space-y-5">
                {approachStages.map((stage) => (
                  <li
                    key={stage.step}
                    className="flex gap-4 rounded-lg border border-border-soft bg-white p-5 sm:p-6"
                  >
                    <span className="font-display text-2xl font-semibold text-forest">
                      {stage.step}
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-dark-green">
                        {stage.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                        {stage.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
