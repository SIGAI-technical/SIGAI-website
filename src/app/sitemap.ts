import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/** Home first, then each section route. */
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.9 },
  { path: '/domains', priority: 0.7 },
  { path: '/events', priority: 0.8 },
  { path: '/team', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
