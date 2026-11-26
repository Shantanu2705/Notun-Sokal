import type { Metadata } from "next";
import { communityProjects, initiativeCategories } from "@/config/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkDirectory } from "@/components/work/WorkDirectory";
import { DonationSection } from "@/components/sections/DonationSection";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Notun Sokal's community initiative categories across Community Development, Education Initiatives, Health Awareness, Social Welfare, and Environmental Responsibility.",
  alternates: {
    canonical: "/our-work",
  },
};

export default async function OurWorkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Community Initiatives"
        title="Our Work & Initiative Areas"
        description="A transparent space structured to share verified community activities, field photography, and initiative categories as Notun Sokal grows."
        breadcrumbs={[{ label: "Our Work" }]}
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkDirectory
            categories={initiativeCategories}
            projects={communityProjects}
            initialCategory={resolvedParams.category}
          />
        </div>
      </section>

      <DonationSection />
    </>
  );
}
