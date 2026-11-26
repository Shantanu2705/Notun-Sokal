import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { communityProjects } from "@/config/content";
import { ButtonLink } from "@/components/ui/ButtonLink";

export async function generateStaticParams() {
  return communityProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = communityProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Initiative Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/our-work/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = communityProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-ivory py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ButtonLink href="/our-work" variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to Our Work</span>
        </ButtonLink>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wider uppercase">
          <span className="rounded bg-mint-bg px-3 py-1 text-forest">
            {project.status}
          </span>
          <span className="inline-flex items-center gap-1 text-muted">
            <MapPin className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
            {project.location}
          </span>
        </div>

        <h1 className="font-display mt-4 text-3xl font-semibold text-dark-green sm:text-5xl">
          {project.title}
        </h1>

        <div className="mt-8 overflow-hidden rounded-lg border border-border-soft bg-white">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1200}
            height={750}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <p className="mt-8 text-lg leading-relaxed text-ink">
          {project.summary}
        </p>
      </div>
    </article>
  );
}
