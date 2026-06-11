// ── PORTFOLIO MODE ──────────────────────────────────────────────────────────────
// All live API calls have been replaced with mock data for the public portfolio
// version of DevAura. The original implementation is preserved below for
// reference. To restore live API connectivity, swap the imports back.
// ────────────────────────────────────────────────────────────────────────────────

import { Team } from "@/types/team";
import { mockTeam } from "@/data/mock/team";

// [DISABLED] const API_BASE_URL = "https://devapi.enjezly.com/api/website";

/** Returns team members from mock data (portfolio mode). */
export async function getAllTeam(): Promise<Team[]> {
  await new Promise((r) => setTimeout(r, 250));
  return mockTeam;
}

/*
 * ── ORIGINAL LIVE API IMPLEMENTATION (DISABLED) ──────────────────────────────
 *
 * export async function getAllTeam() { ... fetch(`${API_BASE_URL}/team`) }
 * ─────────────────────────────────────────────────────────────────────────────
 */
