import type { NextConfig } from 'next';

/**
 * Baseline security headers. No CSP here on purpose: Next injects inline
 * bootstrap scripts, so a strict policy needs nonce plumbing, and a broken CSP
 * is worse than none. Add one deliberately if the site ever takes user input.
 */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const articlePaths = [
  '/editorial/the-trust-gap',
  '/editorial/ais-physics-problem',
  '/editorial/the-map-in-the-machine',
  '/editorial/ais-energy-ledger',
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.104', 'localhost:3000'],
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      ...articlePaths.map((source) => ({
        source,
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' }],
      })),
    ];
  },
  async redirects() {
    return [
      {
        source: '/domains',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
