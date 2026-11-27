"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, FolderOpen, MapPin } from "lucide-react";
import type {
  CommunityProject,
  InitiativeCategory,
  OutreachPhoto,
  OutreachVideo,
} from "@/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaGallerySection } from "@/components/work/MediaGallerySection";

interface WorkDirectoryProps {
  categories: InitiativeCategory[];
  projects: CommunityProject[];
  photos: OutreachPhoto[];
  videos: OutreachVideo[];
  initialCategory?: string;
}

export function WorkDirectory({
  categories,
  projects,
  photos,
  videos,
  initialCategory = "all",
}: WorkDirectoryProps) {
  const validInitial = categories.some((c) => c.id === initialCategory)
    ? initialCategory
    : "all";
  const [selectedCategory, setSelectedCategory] =
    useState<string>(validInitial);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="space-y-16">
      <div>
        {/* Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter initiatives by category"
          className="flex flex-wrap gap-2.5"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              selectedCategory === "all"
                ? "bg-forest text-white"
                : "border border-border-soft bg-white text-ink hover:border-forest hover:text-forest"
            }`}
          >
            All Categories
          </button>

          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                  isSelected
                    ? "bg-forest text-white"
                    : "border border-border-soft bg-white text-ink hover:border-forest hover:text-forest"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {activeCategoryObj ? (
          <div className="mt-6 rounded-md border border-border-soft bg-mint-bg/70 p-4 text-sm text-ink">
            <strong className="text-dark-green">{activeCategoryObj.label}:</strong>{" "}
            {activeCategoryObj.description}
          </div>
        ) : null}

        {/* Project Cards or Category Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-border-soft bg-white transition-colors hover:border-forest/40"
              >
                <div className="overflow-hidden bg-mint-bg">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={960}
                    height={720}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="rounded bg-mint-bg px-2.5 py-1 font-semibold text-forest">
                        {project.status}
                      </span>
                      <span className="inline-flex items-center gap-1 text-muted">
                        <MapPin
                          className="h-3.5 w-3.5 text-orange"
                          aria-hidden="true"
                        />
                        {project.location}
                      </span>
                    </div>
                    <h2 className="font-display mt-3 text-2xl font-semibold text-dark-green">
                      {project.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border-soft pt-4">
                    <Link
                      href={`/our-work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-orange"
                    >
                      <span>View Initiative Photos &amp; Details</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-border-soft bg-white p-8 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-mint-bg text-forest">
                  <FolderOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="font-display mt-4 text-2xl font-semibold text-dark-green">
                  Additional Field Records Pending in This Category
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                  Documented records for{" "}
                  <strong>{activeCategoryObj?.label ?? "this category"}</strong>{" "}
                  will be published here once field activities and photographs
                  are formally archived. You can explore our documented outreach
                  drives below or connect to collaborate in this focus area.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("all")}
                    className="inline-flex items-center gap-2 rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dark-green"
                  >
                    View Documented Outreach
                  </button>
                  <ButtonLink
                    href="/contact?subject=Community+Initiative+Participation"
                    variant="secondary"
                  >
                    <span>Propose or Join an Initiative</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-lg border border-border-soft bg-ivory p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-forest uppercase">
                    <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
                    <span>Documentation Standard</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Notun Sokal publishes only verified field photography,
                    videos, and factual descriptions—without fabricated metrics
                    or unverified project claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Complete Field Videos & Photo Gallery */}
      <MediaGallerySection photos={photos} videos={videos} showVideos />
    </div>
  );
}
