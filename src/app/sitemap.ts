import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { EDITORIALS } from '@/lib/content';

/** Home first, then each section route. */
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.9 },
  { path: '/events', priority: 0.8 },
  { path: '/team', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
  { path: '/editorial', priority: 0.8 },
  ...EDITORIALS.map((post) => ({ path: post.href, priority: 0.7 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
