# DJS ACM SIGAI

Single-page site for **DJS ACM SIGAI** — the Special Interest Group on Artificial
Intelligence at Dwarkadas J. Sanghvi College of Engineering, affiliated with the
Association for Computing Machinery (ACM).

Built with Next.js 16 (App Router), React 19 and TypeScript.

## Content policy

Every fact on the site is taken from <https://www.djscesigai.tech/> and lives in
[`src/lib/content.ts`](src/lib/content.ts). Nothing is invented. Where the source
has no data — event dates, some member links, upcoming events — the field is
absent and the UI renders an explicit empty state rather than filler.

Edit that one file to update copy, events, team rosters or contact details.

## Imagery

All photography is still placeholder. Slots are marked with a dashed
`Placeholder` component so an empty slot never reads as finished design:
About visual, event images, team portraits, and the DJSCE/ACM logos.

## Local development

```bash
npm install
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Deploying to Vercel

Import the repository — the defaults are correct (Framework: Next.js,
Build: `next build`, Output: `.next`).

### Environment variables

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin, e.g. `https://djscesigai.tech`. Used for canonical URLs, Open Graph and `sitemap.xml`. Falls back to Vercel's deployment URL when unset. |

`robots.txt` allows indexing only when `VERCEL_ENV=production`, so preview
deployments stay out of search results automatically.
