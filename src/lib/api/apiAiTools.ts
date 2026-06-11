// ── PORTFOLIO MODE ──────────────────────────────────────────────────────────────
// All live API calls have been replaced with mock data for the public portfolio
// version of DevAura. The original implementation is preserved below for
// reference. To restore live API connectivity, swap the imports back.
// ────────────────────────────────────────────────────────────────────────────────

import { AiToolsCategory, PaginatedAiTools } from "@/types/ai-tools";
import { getMockAiTools, getMockAiToolCategories } from "@/data/mock/aiTools";

// [DISABLED] const API_BASE_URL = "https://devapi.enjezly.com/api/website";

/** Returns paginated AI tools from mock data (portfolio mode). */
export async function getAiTools(
  filters: { name?: string; category_id?: number } = {},
  page: number = 1,
): Promise<PaginatedAiTools> {
  await new Promise((r) => setTimeout(r, 300));
  return getMockAiTools(filters, page);
}

/** Returns all AI tool categories from mock data (portfolio mode). */
export async function getAllAiCategories(): Promise<AiToolsCategory[]> {
  await new Promise((r) => setTimeout(r, 150));
  return getMockAiToolCategories();
}

/*
 * ── ORIGINAL LIVE API IMPLEMENTATION (DISABLED) ──────────────────────────────
 *
 * export async function getAiTools(filters, page) { ... fetch(`${API_BASE_URL}/ai-tools`) }
 * export async function getAllAiCategories() { ... fetch(`${API_BASE_URL}/getAllAiCategories`) }
 * ─────────────────────────────────────────────────────────────────────────────
 */
