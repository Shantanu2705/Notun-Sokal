import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import {
  communityProjects,
  outreachPhotos,
  outreachVideos,
} from "@/config/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DonationSection } from "@/components/sections/DonationSection";

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

  const galleryPhotos = outreachPhotos.filter((photo) =>
    project.galleryPhotoIds.includes(photo.id)
  );
  const projectVideos = outreachVideos.filter((video) =>
    project.videoIds?.includes(video.id)
  );

  return (
    <>
      <article className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-border-soft bg-white shadow-sm">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={960}
              priority
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="mt-10 space-y-4 text-base leading-relaxed text-ink sm:text-lg">
            {project.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {projectVideos.length > 0 ? (
            <section className="mt-14 border-t border-border-soft pt-12">
              <h2 className="font-display text-2xl font-semibold text-dark-green">
                Field Video
              </h2>
              <div className="mt-6 space-y-6">
                {projectVideos.map((video) => (
                  <div
                    key={video.id}
                    className="overflow-hidden rounded-lg border border-border-soft bg-white"
                  >
                    <div className="flex justify-center bg-black">
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        poster={video.poster}
                        aria-label={video.title}
                        className={`w-full object-contain ${
                          video.orientation === "portrait"
                            ? "max-h-[500px]"
                            : "aspect-video"
                        }`}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support embedded video playback.
                      </video>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-semibold text-dark-green">
                        {video.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        {video.summaryNote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {galleryPhotos.length > 0 ? (
            <section className="mt-14 border-t border-border-soft pt-12">
              <h2 className="font-display text-2xl font-semibold text-dark-green">
                Field Photographs ({galleryPhotos.length})
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {galleryPhotos.map((photo) => (
                  <figure
                    key={photo.id}
                    className="overflow-hidden rounded-lg border border-border-soft bg-white"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`aspect-[4/3] w-full object-cover ${
                        photo.orientation === "portrait"
                          ? "object-top"
                          : "object-center"
                      }`}
                    />
                    <figcaption className="p-3.5 text-xs leading-relaxed text-muted">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>

      <DonationSection />
    </>
  );
}
