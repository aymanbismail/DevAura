/**
 * Single source of truth for the public site origin.
 *
 * Override per environment with NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview
 * deployment or http://localhost:3000). Falls back to the production domain so
 * absolute URLs stay correct even when the variable is not set.
 */

const FALLBACK_SITE_URL = "https://devaura.aymanismail.com";

/** The site origin, without a trailing slash. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL
).replace(/\/+$/, "");

/** Builds an absolute URL on the site origin from a root-relative path. */
export function absoluteUrl(path: string = "/"): string {
  return new URL(path, `${siteUrl}/`).toString();
}
