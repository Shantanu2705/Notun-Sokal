import type { MetadataRoute } from "next";
import { communityProjects } from "@/config/content";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/focus-areas",
    "/our-work",
    "/get-involved",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const now = new Date();

  const baseEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/contact" || route === "/get-involved" ? 0.9 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = communityProjects.map(
    (project) => ({
      url: `${SITE_URL}/our-work/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...baseEntries, ...projectEntries];
}
