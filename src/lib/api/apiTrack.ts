// lib/api/apiTrack.ts
//
// ── PORTFOLIO MODE ──────────────────────────────────────────────────────────────
// All live API calls have been replaced with mock data for the public portfolio
// version of DevAura. The original implementation is preserved below for
// reference. To restore live API connectivity, swap the imports back.
// ────────────────────────────────────────────────────────────────────────────────

import { Track, PaginatedTracks, TracksFilters } from "@/types/track";
import { getMockTracks, getMockTrackBySlug } from "@/data/mock/tracks";

// [DISABLED] const API_BASE_URL = "https://devapi.enjezly.com/api/website";

/** Returns paginated tracks from mock data (portfolio mode). */
export async function getTracks(
  filters: TracksFilters = {},
  page: number = 1,
): Promise<PaginatedTracks> {
  // Simulate a small network delay so loading states are visible in the UI.
  await new Promise((r) => setTimeout(r, 300));
  return getMockTracks(filters, page);
}

/** Returns a single track by slug from mock data (portfolio mode). */
export async function getTrackBySlug(slug: string): Promise<Track> {
  await new Promise((r) => setTimeout(r, 200));
  const track = getMockTrackBySlug(slug);
  if (!track) throw new Error("NOT_FOUND");
  return track;
}

/*
 * ── ORIGINAL LIVE API IMPLEMENTATION (DISABLED) ──────────────────────────────
 *
 * export async function getTracks(filters, page) {
 *   const params = new URLSearchParams();
 *   if (filters.name?.trim()) params.append('name', filters.name.trim());
 *   params.append('page', page.toString());
 *   const url = `${API_BASE_URL}/learning-tracks?${params}`;
 *   const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
 *   const res = await fetch(url, {
 *     headers: { "Accept": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
 *     cache: "no-store",
 *   });
 *   if (!res.ok) throw new Error("Failed to fetch tracks");
 *   return res.json();
 * }
 *
 * export async function getTrackBySlug(slug) {
 *   const res = await fetch(`${API_BASE_URL}/learning-tracks/${slug}`, { next: { revalidate: 21600 } });
 *   if (!res.ok) throw new Error(res.status === 404 ? "NOT_FOUND" : "Error fetching track");
 *   return res.json();
 * }
 * ─────────────────────────────────────────────────────────────────────────────
 */
