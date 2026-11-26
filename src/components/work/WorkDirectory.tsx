"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, FolderOpen } from "lucide-react";
import type { CommunityProject, InitiativeCategory } from "@/types";
import { ButtonLink } from "@/components/ui/ButtonLink";

interface WorkDirectoryProps {
  categories: InitiativeCategory[];
  projects: CommunityProject[];
  initialCategory?: string;
}

export function WorkDirectory({
  categories,
  projects,
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

      {/* Project Grid or Graceful Verified Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-lg border border-border-soft bg-white transition-colors hover:border-forest/40"
            >
              <div className="overflow-hidden bg-mint-bg">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={560}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded bg-mint-bg px-2.5 py-1 text-xs font-semibold text-forest">
                  {project.status}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold text-dark-green">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/our-work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-orange"
                  >
                    <span>View Initiative Details</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-border-soft bg-white p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-mint-bg text-forest">
                <FolderOpen className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-5 text-2xl font-semibold text-dark-green sm:text-3xl">
                Verified Project Documentation Coming Soon
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink">
                Notun Sokal publishes community initiatives only with verified
                activity details, dates, and authentic field photography. Rather
                than displaying placeholder numbers or fictional case studies,
                this directory stays open for genuine field records as they are
                verified and archived.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Would you like to collaborate on an upcoming community
                initiative in Siliguri or request updates on current activities?
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink
                  href="/contact?subject=Community+Initiative+Participation"
                  variant="primary"
                >
                  <span>Propose or Join an Initiative</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/get-involved" variant="secondary">
                  <span>Ways to Contribute</span>
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg border border-border-soft bg-ivory p-6">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-forest uppercase">
                  <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
                  <span>Planned Documentation Structure</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="border-b border-border-soft pb-2.5">
                    <strong className="text-dark-green">
                      Verified Location &amp; Date:
                    </strong>{" "}
                    Ward, neighbourhood, and activity timeline
                  </li>
                  <li className="border-b border-border-soft pb-2.5">
                    <strong className="text-dark-green">
                      Authentic Field Imagery:
                    </strong>{" "}
                    Respectful, consented community photographs with accessible
                    descriptions
                  </li>
                  <li>
                    <strong className="text-dark-green">
                      Community Takeaways:
                    </strong>{" "}
                    Factual summaries of participation and ongoing needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
