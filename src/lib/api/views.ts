// lib/api/views.ts
//
// Fire-and-forget view tracking for track and resource cards.
//
// The base URL comes from NEXT_PUBLIC_API_URL, like the rest of the API layer
// (see src/lib/api/client.ts). When the variable is unset the app is running in
// portfolio mode with no backend, so the request is skipped entirely rather
// than fired at a host that will not answer.
//
// This never throws and never logs: view counting is a non-essential side
// effect, so a missing or unreachable backend must leave the UI untouched.

import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/** Milliseconds before an unanswered view-tracking request is abandoned. */
const VIEW_REQUEST_TIMEOUT_MS = 5000;

interface ViewResponse {
  recorded?: boolean;
  views_count?: number;
}

/**
 * Records a view for the given website endpoint path.
 *
 * @param endpoint Path under `/website`, e.g. `learning-tracks/my-slug/view`.
 * @param sessionId Per-session identifier used for de-duplication.
 * @returns The updated view count, or `null` when nothing was recorded.
 */
export async function recordView(
  endpoint: string,
  sessionId: string,
): Promise<number | null> {
  if (!API_BASE_URL || !sessionId) return null;

  try {
    const response = await axios.post<ViewResponse>(
      `${API_BASE_URL}/website/${endpoint}`,
      { session_id: sessionId },
      { timeout: VIEW_REQUEST_TIMEOUT_MS },
    );

    if (response.data?.recorded && typeof response.data.views_count === "number") {
      return response.data.views_count;
    }
  } catch {
    // Intentionally silent — see the note at the top of this file.
  }

  return null;
}
