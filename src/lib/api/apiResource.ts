// ── PORTFOLIO MODE ──────────────────────────────────────────────────────────────
// All live API calls have been replaced with mock data for the public portfolio
// version of DevAura. The original implementation is preserved below for
// reference. To restore live API connectivity, swap the imports back.
// ────────────────────────────────────────────────────────────────────────────────

import {
  PaginatedResources,
  Resource,
  ResourceCategory,
} from "@/types/resource";
import {
  getMockResources,
  getMockResourceCategories,
} from "@/data/mock/resources";

// [DISABLED] const API_BASE_URL = "https://devapi.enjezly.com/api/website";

/** Returns paginated resources from mock data (portfolio mode). */
export async function getResources(
  filters: { name?: string; category_id?: number } = {},
  page: number = 1,
): Promise<PaginatedResources> {
  await new Promise((r) => setTimeout(r, 300));
  return getMockResources(filters, page);
}

/** Returns all resource categories from mock data (portfolio mode). */
export async function getAllResourceCategories(): Promise<ResourceCategory[]> {
  await new Promise((r) => setTimeout(r, 150));
  return getMockResourceCategories();
}

/** Returns a single resource by slug from mock data (portfolio mode). */
export async function getResourceBySlug(slug: string): Promise<Resource> {
  await new Promise((r) => setTimeout(r, 200));
  const { mockResources } = await import("@/data/mock/resources");
  const resource = mockResources.find((r) => r.slug === slug);
  if (!resource) throw new Error("NOT_FOUND");
  return resource;
}

/*
 * ── ORIGINAL LIVE API IMPLEMENTATION (DISABLED) ──────────────────────────────
 *
 * export async function getResources(filters, page) { ... fetch(`${API_BASE_URL}/resources`) }
 * export async function getAllResourceCategories() { ... fetch(`${API_BASE_URL}/getAllResourceCategories`) }
 * export async function getResourceBySlug(slug) { ... fetch(`${API_BASE_URL}/resources/${slug}`) }
 * ─────────────────────────────────────────────────────────────────────────────
 */
