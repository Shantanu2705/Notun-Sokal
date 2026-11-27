import type { Metadata } from "next";
import {
  communityProjects,
  initiativeCategories,
  outreachPhotos,
  outreachVideos,
} from "@/config/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkDirectory } from "@/components/work/WorkDirectory";
import { DonationSection } from "@/components/sections/DonationSection";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Notun Sokal's documented community initiatives, outreach photographs, field videos, and thematic initiative categories.",
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
        title="Our Work & Field Outreach"
        description="Explore Notun Sokal's community initiatives, genuine field photography, and conversations with families and volunteers across our outreach drives."
        breadcrumbs={[{ label: "Our Work" }]}
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkDirectory
            categories={initiativeCategories}
            projects={communityProjects}
            photos={outreachPhotos}
            videos={outreachVideos}
            initialCategory={resolvedParams.category}
          />
        </div>
      </section>

      <DonationSection />
    </>
  );
}
