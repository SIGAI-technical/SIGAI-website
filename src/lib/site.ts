/**
 * Canonical origin for metadata, sitemap and Open Graph URLs.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this once the real domain is attached.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable production domain.
 *  3. VERCEL_URL — the per-deployment preview domain.
 *  4. localhost, for `next dev` / `next start`.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, '');

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production}`;

  const preview = process.env.VERCEL_URL?.trim();
  if (preview) return `https://${preview}`;

  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();

/** True only for the production deployment, so previews stay out of search. */
export const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';
