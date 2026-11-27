import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { focusAreas } from "@/config/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FocusIcon } from "@/components/ui/FocusIcon";
import { PageHeader } from "@/components/ui/PageHeader";
import { CollaborationBanner } from "@/components/sections/CollaborationBanner";

export const metadata: Metadata = {
  title: "Our Focus Areas",
  description:
    "Explore Notun Sokal's four thematic focus areas: Community Support, Education & Skill Development, Health & Wellbeing, and Sustainable Growth.",
  alternates: {
    canonical: "/focus-areas",
  },
};

export default function FocusAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Thematic Pillars"
        title="Our Focus Areas"
        description="Notun Sokal organises its social welfare vision around four interconnected pillars that support human dignity, knowledge, health, and environmental stewardship."
        breadcrumbs={[{ label: "Our Focus Areas" }]}
      />

      <section className="border-b border-border-soft bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:space-y-28 lg:px-8">
          {focusAreas.map((area, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={area.id}
                id={area.slug}
                className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <figure>
                    <div className="overflow-hidden rounded-lg border border-border-soft bg-mint-bg shadow-sm">
                      <Image
                        src={area.image}
                        alt={area.imageAlt}
                        width={960}
                        height={720}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-2.5 text-xs text-muted">
                      {area.isRealOutreachImage
                        ? `Notun Sokal field outreach photograph — ${area.title}.`
                        : `Illustrative photograph representing ${area.title}.`}
                    </figcaption>
                  </figure>
                </div>

                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-border-soft bg-ivory px-3.5 py-1.5 text-xs font-semibold tracking-wider text-forest uppercase">
                    <FocusIcon name={area.iconName} className="h-4 w-4" />
                    <span>Focus Area 0{index + 1}</span>
                  </div>

                  <h2 className="font-display mt-4 text-3xl font-semibold text-dark-green sm:text-4xl">
                    {area.title}
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
                    {area.detailedDescription}
                  </p>

                  <div className="mt-6 rounded-lg border border-border-soft bg-ivory p-5">
                    <h3 className="font-sans text-xs font-semibold tracking-[0.16em] text-forest uppercase">
                      Core Priorities in This Area
                    </h3>
                    <ul className="mt-3.5 space-y-2.5 text-sm text-ink sm:text-base">
                      {area.aspirationalGoals.map((goal) => (
                        <li key={goal} className="flex items-start gap-2.5">
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-forest"
                            aria-hidden="true"
                          />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink
                      href={`/contact?subject=${encodeURIComponent(
                        `Supporting ${area.title}`
                      )}`}
                      variant="primary"
                    >
                      <span>Participate in {area.shortTitle}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                    <ButtonLink href="/get-involved" variant="secondary">
                      <span>Ways to Get Involved</span>
                    </ButtonLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CollaborationBanner />
    </>
  );
}
