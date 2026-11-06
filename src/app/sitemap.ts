import type { MetadataRoute } from "next";

import { mockTracks } from "@/data/mock/tracks";
import { mockResources } from "@/data/mock/resources";
import { languages } from "@/data/quizzes";
import { absoluteUrl } from "@/lib/site";

/**
 * Public routes that are safe to index. Auth-gated routes (/login, /signup,
 * /profile, /favorites, /auth/callback, password and email flows) are
 * intentionally excluded — see robots.ts.
 *
 * NOTE: dynamic entries are built from the mock data layer, matching portfolio
 * mode (see src/lib/api/*). When live API connectivity is restored, source
 * these from the API layer instead.
 */
const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/tracks", changeFrequency: "weekly", priority: 0.9 },
  { path: "/quizzes", changeFrequency: "weekly", priority: 0.9 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ai-tools", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency,
      priority,
    })),
    ...mockTracks.map((track) => ({
      url: absoluteUrl(`/tracks/${track.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...mockResources.map((resource) => ({
      url: absoluteUrl(`/resources/${resource.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...languages.map((language) => ({
      url: absoluteUrl(`/quizzes/${language.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
