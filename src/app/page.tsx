import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, FileText, MapPin } from "lucide-react";
import {
  approachStages,
  communityProjects,
  focusAreas,
  homeInvolvementOptions,
  initiativeCategories,
  missionVisionContent,
} from "@/config/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FocusIcon } from "@/components/ui/FocusIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DonationSection } from "@/components/sections/DonationSection";
import { CollaborationBanner } from "@/components/sections/CollaborationBanner";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* Section 2: Hero Section */}
      <section className="relative border-b border-border-soft bg-ivory pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-forest/20 bg-mint-bg px-3.5 py-1.5 text-xs font-semibold tracking-wider text-forest uppercase">
                <MapPin className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                <span>Siliguri, India • Social Welfare Organisation</span>
              </p>

              <h1 className="font-display text-4xl leading-[1.1] font-semibold tracking-tight text-dark-green sm:text-5xl lg:text-[3.45rem]">
                Together, We Can Create a Brighter Tomorrow.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/90 sm:text-lg">
                Every individual deserves the opportunity to learn, grow, and
                live with dignity. Notun Sokal is committed to nurturing hope,
                empowering communities, and building a future where meaningful
                change begins with collective action.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <ButtonLink href="/get-involved" variant="primary" size="lg">
                  <span>Be a Part of the Change</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/about" variant="secondary" size="lg">
                  <span>Discover Our Mission</span>
                </ButtonLink>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border-soft pt-7 sm:max-w-lg">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-forest uppercase">
                    Grounded in Siliguri
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Ward No. 45/2, Pradhan Nagar, serving with compassion and
                    accountability.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-orange uppercase">
                    Four Core Pillars
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Community Support, Education, Health Awareness &amp;
                    Sustainable Growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="relative">
                <div className="overflow-hidden rounded-lg border border-border-soft bg-mint-bg shadow-[0_18px_45px_rgba(6,75,42,0.1)]">
                  <Image
                    src="/images/hero-community.jpg"
                    alt="Illustrative community photograph depicting volunteers and local neighbours conversing warmly in morning sunlight"
                    width={1280}
                    height={720}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between text-xs text-muted">
                  <span>
                    Illustrative photography reflecting community dialogue and
                    shared purpose.
                  </span>
                  <span className="hidden font-semibold text-forest sm:inline">
                    Notun Sokal
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Introduction to Notun Sokal */}
      <section className="border-b border-border-soft bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <figure>
                <div className="overflow-hidden rounded-lg border border-border-soft bg-cream">
                  <Image
                    src="/images/intro-hope.jpg"
                    alt="Illustrative photograph of an educator helping children learn with open notebooks on a shaded veranda"
                    width={900}
                    height={1200}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-muted">
                  Illustrative scene representing grassroots education and
                  care.
                </figcaption>
              </figure>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <SectionHeading
                eyebrow="Introducing Notun Sokal"
                title="Every New Beginning Starts With Hope."
              />

              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink sm:text-lg">
                <p>
                  Notun Sokal believes that a better society begins when people
                  come together to support one another. Through a commitment to
                  community wellbeing, education, empowerment, and sustainable
                  development, we aspire to create opportunities that help
                  individuals and communities move towards a brighter future.
                </p>
                <p className="text-muted">
                  Guided by patience, transparency, and respect for local
                  dignity, we are building a welcoming platform where volunteers,
                  neighbours, and supporters can contribute meaningfully to
                  shared progress in Siliguri and beyond.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href="/about" variant="primary">
                  <span>Know More About Us</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/our-work" variant="ghost">
                  <span>Explore Community Initiatives</span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Mission and Vision (Two Visually Distinct Panels) */}
      <section
        aria-label="Mission and Vision"
        className="border-b border-border-soft bg-ivory py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Mission Statement Panel - Deep Forest Green */}
            <article className="flex flex-col justify-between rounded-lg bg-forest p-8 text-white shadow-sm sm:p-11 lg:col-span-7">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-saffron uppercase">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-5 rounded-full bg-saffron"
                  />
                  {missionVisionContent.mission.label}
                </p>
                <h2 className="font-display mt-5 text-2xl leading-[1.3] font-semibold text-white sm:text-3xl">
                  &ldquo;{missionVisionContent.mission.statement}&rdquo;
                </h2>
              </div>
              <div className="mt-8 border-t border-white/20 pt-5 text-sm text-white/85">
                Rooted in everyday compassion, mutual care, and steady local
                action.
              </div>
            </article>

            {/* Vision Statement Panel - Warm Cream Editorial Card */}
            <article className="flex flex-col justify-between rounded-lg border-2 border-forest/20 bg-cream p-8 sm:p-11 lg:col-span-5">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange uppercase">
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  {missionVisionContent.vision.label}
                </p>
                <h2 className="font-display mt-5 text-2xl leading-[1.35] font-semibold text-dark-green sm:text-[1.7rem]">
                  {missionVisionContent.vision.statement}
                </h2>
              </div>
              <div className="mt-8 border-t border-border-soft pt-5">
                <Link
                  href="/focus-areas"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-dark-green"
                >
                  <span>See how our focus areas align with this vision</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 5: Our Focus Areas */}
      <section className="border-b border-border-soft bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Thematic Pillars"
              title="Our Focus Areas"
              description="Four interconnected areas that guide how Notun Sokal nurtures resilient neighbourhoods, lifelong learning, wellbeing, and environmental responsibility."
            />
            <ButtonLink href="/focus-areas" variant="secondary">
              <span>Explore All Focus Areas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <article
                key={area.id}
                className="group overflow-hidden rounded-lg border border-border-soft bg-ivory transition-colors duration-200 hover:border-forest/40"
              >
                <div className="relative overflow-hidden bg-mint-bg">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    width={960}
                    height={720}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-dark-green shadow-sm">
                    <FocusIcon
                      name={area.iconName}
                      className="h-4 w-4 text-forest"
                    />
                    <span>0{index + 1}</span>
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-semibold text-dark-green">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {area.summary}
                  </p>
                  <div className="mt-5">
                    <Link
                      href={`/focus-areas#${area.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-orange"
                    >
                      <span>Read more about {area.shortTitle}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Our Approach */}
      <section className="border-b border-border-soft bg-mint-bg py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Small Steps. Meaningful Change."
            description="Meaningful social progress relies on listening first, uniting people and resources thoughtfully, and staying committed over time."
          />

          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {approachStages.map((stage, idx) => (
              <li
                key={stage.step}
                className="relative flex flex-col border-t-2 border-forest/30 pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-semibold text-forest">
                    {stage.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full ${
                      idx % 2 === 0 ? "bg-forest" : "bg-orange"
                    }`}
                  />
                </div>
                <h3 className="font-display mt-4 text-xl font-semibold text-dark-green">
                  {stage.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 7: Our Work / Community Initiatives */}
      <section className="border-b border-border-soft bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our Work"
                title="Community Initiatives Built on Transparency."
                description="We publish verified project records only when genuine field details and documentation are ready—never fabricated figures or unverified claims."
              />

              <div className="mt-8 rounded-lg border border-border-soft bg-ivory p-6">
                <div className="flex items-start gap-3">
                  <FileText
                    className="mt-0.5 h-5 w-5 shrink-0 text-forest"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-dark-green">
                      {communityProjects.length === 0
                        ? "Field Records & Updates Coming Soon"
                        : "Documented Field Initiatives"}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      As Notun Sokal documents community initiatives, events,
                      and photographs, each verified activity will be archived in
                      our project directory across these five categories.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <ButtonLink href="/our-work" variant="primary">
                        <span>Visit Our Work Page</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </ButtonLink>
                      <ButtonLink
                        href="/contact?subject=Community+Initiative+Enquiry"
                        variant="secondary"
                      >
                        <span>Share or Participate</span>
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-border-soft rounded-lg border border-border-soft bg-ivory">
                {initiativeCategories.map((category, idx) => (
                  <div
                    key={category.id}
                    className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-wider text-orange">
                          0{idx + 1}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-dark-green">
                          {category.label}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {category.description}
                      </p>
                    </div>
                    <Link
                      href={`/our-work?category=${category.id}`}
                      className="shrink-0 text-xs font-semibold tracking-wide text-forest uppercase hover:underline"
                    >
                      View Category &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Get Involved */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Get Involved"
              title="Change Begins When We Stand Together."
              description="Supporting a stronger community goes far beyond financial gifts. Choose the way of contributing that fits your time, skills, and heart."
            />
            <ButtonLink href="/get-involved" variant="secondary">
              <span>All Ways to Participate</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeInvolvementOptions.map((option, idx) => (
              <article
                key={option.id}
                className={`flex flex-col justify-between rounded-lg border border-border-soft bg-white p-7 transition-colors duration-200 hover:border-forest/40 ${
                  idx === 0 ? "lg:col-span-2 lg:bg-mint-bg/60" : ""
                }`}
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-mint-bg text-forest">
                    <FocusIcon name={option.iconName} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold text-dark-green">
                    {option.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
                    {option.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border-soft pt-4">
                  <Link
                    href={option.ctaHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-orange"
                  >
                    <span>{option.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Donation Section */}
      <DonationSection />

      {/* Section 10: Collaboration Invitation */}
      <CollaborationBanner />

      {/* Section 11: Final Call to Action */}
      <FinalCtaSection />
    </>
  );
}
