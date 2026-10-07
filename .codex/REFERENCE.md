# SIGAI website reference

This file is a working map of the existing site for the next design/build task. It describes the checked-out source; update it when that source changes.

## Project shape

- Next.js 16 App Router, React 19, TypeScript. `src/app/layout.tsx` is the shared shell; `src/app/page.tsx` composes the homepage.
- Shared copy, routes, events, people, areas and contact details live in `src/lib/content.ts`. Site metadata and deployment URL resolution live in `src/lib/site.ts`.
- Styling is centralized in the large `src/app/globals.css` file. Components are mostly hand-authored JSX and CSS, with Next Image for local photography and a CSS 3D cube. `motion`/`motion-react` are dependencies, but the visible motion described below is primarily CSS and custom browser APIs.
- The project is in the nested `SIGAI-website` directory (this directory is the Git root); the parent workspace directory is not a Git repository.
- Read `AGENTS.md` before editing. It warns that this Next version has breaking changes and directs authors to the guides shipped in `node_modules/next/dist/docs/`.

## Routes and composition

| Route | Source | Main content |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Hero, three-row index, four-slide chapter story |
| `/about` | `src/app/about/page.tsx` | About narrative, chapter facts, vision pillars, focus domains |
| `/events` | `src/app/events/page.tsx` | Events grouped by academic year |
| `/events/[id]` | `src/app/events/[id]/page.tsx` | Cinematic event hero, description, interactive image gallery |
| `/editorial` | `src/app/editorial/page.tsx` | Editorial archive with category/author filters and search |
| `/team` | `src/app/team/page.tsx` | Faculty and committee for selected academic year |
| `/contact` | `src/app/contact/page.tsx` | Contact links, socials and embedded campus map |
| unknown | `src/app/not-found.tsx` | Shared not-found experience |

The root layout mounts the Intro, Backdrop, MotionEffects, skip link, SiteNav, route content and Footer. The backdrop has CSS aurora, mesh and eight CSS-built isometric cubes. Metadata, robots and sitemap are also handled under `src/app`.

## Visual system

- Overall treatment: editorial / technical chapter identity. Warm near-white paper in the default CSS theme, deep navy text, blue and amber chapter accents, teal as a third accent. Fine grid and hairline rules add structure; small 3px control edges and largely shadowless surfaces keep things crisp. Event detail deliberately switches to a black cinematic treatment.
- Main tokens are in `src/app/globals.css`: `--h-bg`, `--h-ink`, `--h-muted`, `--h-line`, `--h-blue`, `--h-amber`, `--h-teal`, spacing shell `--shell`, and easing `--ease-out-expo` / `--ease-spring`. Display font is Space Grotesk; Outfit and Inter are also registered with `next/font/google`, plus Press Start 2P. Font loading therefore needs a build/runtime capable of resolving those font assets.
- Layout is responsive, using fluid `clamp()` typography/spacing and CSS breakpoints around 900px and 760px. Desktop nav collapses to a full-screen mobile sheet. The story layout changes from a single column to a two-column text/image composition at 900px.
- Images are local under `public/`: event archives and galleries, team photos by academic year, logos and icons. Several legacy/duplicate images exist. `Images/` also contains source copies, but app URLs use `public/` paths.

## Interaction and motion map

### Shared shell

- `SiteNav.tsx`: active route state; desktop indicator slides under the selected link via measured link bounds and CSS transform/width; scroll listener updates a thin page-progress bar and switches the header appearance after a hysteresis threshold. Mobile burger morphs into an X; sheet links stagger in, body scrolling is locked while open, Escape closes, and widening to desktop closes it. On mount it unconditionally sets `data-theme="dark"` on `<html>`; this currently overrides the light default/system theme intent in the token CSS. The event-detail route separately records/restores the prior theme.
- `Intro.tsx` + `layout.tsx`: inline bootstrap stamps `data-intro=1` unless reduced motion is requested. On first mount, a 3×3 logo mark is assembled from staggered flip-in tiles; wordmark/rule fade and draw in, progress meter fills, then curtain exits upward/fades. Scroll is locked for the ~2.25 s hold plus ~0.78 s exit. CSS `.intro` is normally hidden unless the root data attribute exists.
- `Backdrop.tsx` / `FloatingShapes.tsx`: fixed visual layer with four drifting aurora blobs, fine grid, eight slowly rotating 3D cubes. CSS animation should honor reduced-motion rules.
- `MotionEffects.tsx`: applies `.is-open` to `.popup` elements immediately (so the entrance popup treatment is bypassed in normal execution), count-up on `[data-count]` when seen (1.1 s cubic ease-out), and desktop pointer tilt/spotlight plus magnetic button movement. Tilt/magnet are disabled for touch and reduced-motion users. Note the implementation attaches DOM listeners but does not remove them on unmount; current usage is global/largely static.
- `Reveal.tsx`: IntersectionObserver shows content once it crosses the viewport threshold with optional stagger delay. It falls back to showing content when the API is unavailable.

### Homepage

- `Hero.tsx`: left editorial welcome/title/copy/rule and two CTAs; right 660px 3D CSS cube scaled to fit its measured container by `CubeStage.tsx`.
- `GlitchCube.tsx` + `src/lib/cube.ts`: 26 visible cubies, six faces each, deterministic seeded sticker artwork rendered as SVG data URIs. A scripted sequence turns selected cube layers in 90° increments (620ms cubic-in-out per move, with initial and mid-sequence holds); it pauses when out of view or tab hidden and skips layer motion under reduced motion. Independently, the cube slowly oscillates around X/Y/Z. Pointer drag adjusts rotation with inertia and blends back into the idle drift. Cubie edge 136px, spacing 142px, scene stage 660px. It is CSS 3D/DOM, not a WebGL Three/Fiber scene despite those packages being installed.
- `QuickNav.tsx`: three numbered rows link to events/team/about. Event count and year counters are attached to selected figures and animate when they enter view.
- `StoryScroller.tsx`: four story slides pair title/copy, badge and local photo. It autoadvances every 4 seconds, with four selectable dots and previous/next controls. Text fades/slides; image layers crossfade and scale subtly. It does not pause autoplay on hover or keyboard focus; manual selection does not reset or pause the interval.

### Secondary routes

- About: static copy and photo card, four credential tiles, four staggered vision cards, six focus-domain cards. `AreasShowcase.tsx` contains a separate accessible click-to-flip card implementation, but the current About page renders static `.domain-card` items instead.
- Events: `EVENTS` is grouped by `EVENT_YEARS`, each archive card links to `/events/{id}`. Event details force dark theme while mounted; image list deduplicates hero and gallery paths. Thumbnail selection and previous/next buttons wrap around; no keyboard arrow handling is added.
- Editorial: `EditorialArchive.tsx` filters `EDITORIALS` by search text and multi-selected category/author chips. The mode selector switches between Categories and Authors; the first `All` chip is active when no specific value is selected. Search expands from a right-aligned icon on desktop and collapses on outside pointer-down. Category/author chips scroll horizontally, fade at both clipped edges, and selected chips use beige fill, black text and an animated multicolour border. The currently seeded options are `Kavya`, `Atharva Deo`, `umm1`, `dumm2`, `dummy3`, `dummy4`, and `dummy5`; there are no article records yet. Add posts to `EDITORIALS` in `src/lib/content.ts`; their authors/categories are merged into the existing options.
- Team: tabs select one of four academic years. Each year renders faculty and committee member cards with local portrait or initials fallback and optional LinkedIn/Instagram links. Current source data includes 2026–27 through 2023–24.
- Contact: email, Instagram, LinkedIn, Maps link, embedded Google Maps iframe. Footer repeats route links, email and socials.

## Content and assets

- `src/lib/content.ts` is the content authority per README. It currently has 11 event records across 2026–27 (3), 2025–26 (2), 2024–25 (3), and 2023–24 (3). Some event descriptions are sparse/general; Prompt to Prototype has no cover image/gallery. Keep missing details visibly missing rather than inventing specifics.
- Home story uses `/events/seminar.png`, `/images/ipd-seminar.jpeg`, `/events/ipd-seminar/IMG_1442.jpg`, `/events/Clockout3.0/clockout3_cover.jpg`.
- Cube logo uses `/logo-mark-navy.png`; nav has light/dark marks. Event and team assets live under matching `public/events/` and `public/team/{year}/` paths.
- README says all facts are sourced from the existing SIGAI site and warns that event dates/member links are absent when unavailable. Treat that as the content policy for future work.

## Local run and inspection status (2026-10-07)

- Installed the lockfile dependencies with `npm ci` (459 packages added). npm reported 9 audit findings (8 high, 1 critical); no audit remediation was performed.
- Started `npm run dev`; Next.js 16.3.4 reported ready at `http://localhost:3000`. A second instance was also started at `http://127.0.0.1:3100` while checking reachability. `lsof` showed a listener on TCP 3000, but `curl` from a separate shell could not connect to either loopback address. Computer-use inventory returned no browser surfaces and failed native-app discovery, so I could not inspect a rendered screenshot or interact with the UI. Treat the source-based interaction map above as verified from code; live visual behavior remains unverified.
- To run locally from `SIGAI-website`: `npm run dev` (default port 3000). Stop with Ctrl-C in the terminal session that owns the server.

## Practical risks for a follow-on redesign

1. Theme behavior is inconsistent: layout supports theme tokens and event pages restore state, but `SiteNav` forces dark globally. Verify intended theme before relying on CSS defaults.
2. Intro adds nearly three seconds before the main site is usable on fresh visits. Decide whether the new experience should preserve this; reduced-motion users skip it.
3. Homepage carousel runs continuously and has no pause-on-focus/hover. Respect reduced motion and user interaction if reusing it.
4. MotionEffects opens all `.popup` elements immediately, while `Reveal` independently performs viewport-based reveals. Check which reveal primitive actually controls each element before changing animation timing.
5. Team tabs use `role=tablist`/`role=tab`, but the component lacks arrow-key tab navigation and explicit `aria-controls` relationships.
6. Local fonts are fetched by `next/font/google` at build; offline builds may need cached font data or a deliberate local-font strategy.
7. The codebase has a very large accumulated CSS file with repeated/overridden rules. Find the last effective declaration and responsive override before changing a selector.

## Useful reading order

1. `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
2. `src/components/Hero.tsx`, `CubeStage.tsx`, `GlitchCube.tsx`, `src/lib/cube.ts`
3. `src/components/SiteNav.tsx`, `Intro.tsx`, `MotionEffects.tsx`, `Reveal.tsx`
4. `QuickNav.tsx`, `StoryScroller.tsx`
5. `src/lib/content.ts`, route pages and `Events.tsx` / `Team.tsx` / `AboutSection.tsx` / `ContactStrip.tsx`
