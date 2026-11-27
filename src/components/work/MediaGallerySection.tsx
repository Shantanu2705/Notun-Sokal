"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Film,
  Images,
  X,
} from "lucide-react";
import type { OutreachPhoto, OutreachVideo } from "@/types";

interface MediaGallerySectionProps {
  photos: OutreachPhoto[];
  videos: OutreachVideo[];
  showVideos?: boolean;
}

export function MediaGallerySection({
  photos,
  videos,
  showVideos = true,
}: MediaGallerySectionProps) {
  const [photoFilter, setPhotoFilter] = useState<
    "all" | "education-initiatives" | "community-development"
  >("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos =
    photoFilter === "all"
      ? photos
      : photos.filter((photo) => photo.category === photoFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      } else if (event.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, visiblePhotos.length]);

  const activePhoto =
    lightboxIndex !== null ? visiblePhotos[lightboxIndex] ?? null : null;

  return (
    <div className="space-y-20">
      {/* Community Video Stories */}
      {showVideos && videos.length > 0 ? (
        <section aria-labelledby="field-videos-heading">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border-soft pb-5">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-forest uppercase">
                <Film className="h-4 w-4 text-orange" aria-hidden="true" />
                <span>Field Videos</span>
              </p>
              <h2
                id="field-videos-heading"
                className="font-display mt-2 text-2xl font-semibold text-dark-green sm:text-3xl"
              >
                Community Voices &amp; Outreach Moments
              </h2>
            </div>
            <p className="text-xs text-muted">
              Click play on any video to watch directly with audio.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {videos.map((video) => (
              <article
                key={video.id}
                className="flex flex-col overflow-hidden rounded-lg border border-border-soft bg-white shadow-sm"
              >
                <div className="flex items-center justify-center bg-deep-pine">
                  <video
                    controls
                    preload="none"
                    playsInline
                    poster={video.poster}
                    aria-label={video.title}
                    className={`w-full bg-black object-contain ${
                      video.orientation === "portrait"
                        ? "max-h-[420px] sm:max-h-[460px]"
                        : "aspect-video"
                    }`}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support embedded HTML5 video playback.
                  </video>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-dark-green">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink">
                      {video.description}
                    </p>
                    <p className="mt-3 rounded-md bg-ivory p-3.5 text-xs leading-relaxed text-muted">
                      <strong className="text-dark-green">
                        Conversation Summary:
                      </strong>{" "}
                      {video.summaryNote}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* Complete Field Photo Gallery */}
      {photos.length > 0 ? (
        <section aria-labelledby="field-gallery-heading">
          <div className="flex flex-col justify-between gap-4 border-b border-border-soft pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-forest uppercase">
                <Images className="h-4 w-4 text-orange" aria-hidden="true" />
                <span>Photo Archive</span>
              </p>
              <h2
                id="field-gallery-heading"
                className="font-display mt-2 text-2xl font-semibold text-dark-green sm:text-3xl"
              >
                Field Outreach Gallery ({visiblePhotos.length} Photos)
              </h2>
            </div>

            <div
              role="group"
              aria-label="Filter field photos"
              className="flex flex-wrap gap-2"
            >
              {[
                { key: "all", label: "All Photos" },
                {
                  key: "education-initiatives",
                  label: "Education Drives",
                },
                {
                  key: "community-development",
                  label: "Community Gatherings",
                },
              ].map((filterItem) => (
                <button
                  key={filterItem.key}
                  type="button"
                  onClick={() => {
                    setPhotoFilter(
                      filterItem.key as
                        | "all"
                        | "education-initiatives"
                        | "community-development"
                    );
                    setLightboxIndex(null);
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                    photoFilter === filterItem.key
                      ? "bg-forest text-white"
                      : "border border-border-soft bg-white text-ink hover:border-forest hover:text-forest"
                  }`}
                >
                  {filterItem.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visiblePhotos.map((photo, idx) => (
              <figure
                key={photo.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-border-soft bg-white transition-colors hover:border-forest/40"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open full view: ${photo.caption}`}
                  className="relative block overflow-hidden bg-mint-bg text-left focus-visible:outline-2 focus-visible:outline-orange"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                      photo.orientation === "portrait"
                        ? "object-top"
                        : "object-center"
                    }`}
                  />
                  <span className="absolute right-2.5 bottom-2.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-dark-green opacity-90 shadow-sm transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="flex-1 p-3.5 text-xs leading-relaxed text-muted">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Accessible Photo Lightbox */}
      {activePhoto && lightboxIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged field photograph"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border-soft px-4 py-3">
              <p className="text-xs font-semibold text-muted">
                Photo {lightboxIndex + 1} of {visiblePhotos.length}
              </p>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photograph viewer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-dark-green hover:bg-mint-bg"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center bg-neutral-950 p-2 sm:p-4">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={activePhoto.width}
                height={activePhoto.height}
                className="max-h-[70vh] w-auto object-contain"
              />

              {visiblePhotos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + visiblePhotos.length) %
                          visiblePhotos.length
                      )
                    }
                    aria-label="Previous photograph"
                    className="absolute left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark-green shadow-md transition-colors hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % visiblePhotos.length
                      )
                    }
                    aria-label="Next photograph"
                    className="absolute right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark-green shadow-md transition-colors hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="border-t border-border-soft bg-ivory px-5 py-3.5 text-sm text-ink">
              {activePhoto.caption}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
