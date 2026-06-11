// src/lib/api/apiSuggestion.ts
//
// ── PORTFOLIO MODE ──────────────────────────────────────────────────────────────
// The live suggestion submission endpoint has been disabled for the public
// portfolio version. The form performs client-side validation and simulates
// a successful submission without sending data to any server.
// ────────────────────────────────────────────────────────────────────────────────

import { SuggestionFormData, SuggestionResponse } from "@/types/suggestion";

// [DISABLED] const API_BASE_URL = "https://devapi.enjezly.com/api/website";

/** Simulates suggestion submission (portfolio mode — no network request). */
export async function submitSuggestion(
  data: SuggestionFormData,
): Promise<SuggestionResponse> {
  // Validate that all required fields are present (mirrors server-side rules).
  if (
    !data.name?.trim() ||
    !data.email?.trim() ||
    !data.subject?.trim() ||
    !data.suggestion?.trim()
  ) {
    throw {
      status: 422,
      message: "Please fill in all required fields.",
      errors: {},
    };
  }

  // Simulate a short network round-trip.
  await new Promise((r) => setTimeout(r, 800));

  return {
    message:
      "Thank you for your suggestion! (Demo mode — no data was sent to a server.)",
  };
}

/*
 * ── ORIGINAL LIVE API IMPLEMENTATION (DISABLED) ──────────────────────────────
 *
 * export async function submitSuggestion(data) {
 *   const res = await fetch(`${API_BASE_URL}/suggestions`, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
 *     body: JSON.stringify(data),
 *   });
 *   if (!res.ok) throw await res.json();
 *   return res.json();
 * }
 * ─────────────────────────────────────────────────────────────────────────────
 */
