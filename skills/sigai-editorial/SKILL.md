---
name: sigai-editorial
description: Research, write, edit, and publish articles in the SIGAI website editorial using its established content model, citation standards, and black reading-page design. Use for work under /editorial, not general site copy.
---

# SIGAI editorial

Use this skill for every new or revised editorial article. Read the current article model and rendered page before changing either. The canonical paths are `src/lib/editorial-features.tsx`, `src/lib/editorial-*.tsx`, `src/lib/content.ts`, `src/components/EditorialArticle.tsx`, `src/components/EditorialArchive.tsx`, `src/components/RelatedEditorials.tsx`, and `src/app/editorial/[slug]/page.tsx`. The first trust article has its own route at `src/app/editorial/the-trust-gap/page.tsx`.

## Research and accountability

- Start with the supplied draft, claims, and intended publication date. Research each consequential claim in original papers, official datasets, company disclosures, standards, or primary reporting. Prefer the most current source **available by that article's publication date**. Do not use later evidence in a backdated article.
- Check every number against the source's denominator, time period, geography, population, and method. Distinguish observed measurements, survey responses, estimates, projections, modelled counterfactuals, and illustrative calculations in the prose. Do not convert a benchmark result into a deployment guarantee, a data-centre total into an AI-only total, or a company-wide total into a single-product figure.
- Build a real argument from the evidence. Open with a concrete situation and the central question; explain the mechanism, then examine measured evidence, limitations, practical consequences, and a defensible conclusion. For technical subjects, define terms so a newcomer can follow while preserving the detail an informed reader expects. Add a specific company, system, dataset, or decision case when it genuinely clarifies the topic.
- Never invent interviews, experiments, measurements, quotes, financial results, affiliations, or acknowledgements. If a calculation is illustrative, state assumptions and show what it excludes. If a useful figure cannot be verified, omit it or state the uncertainty.
- Use natural attribution in the body where it helps a claim (“The IEA estimated…”). Put complete, descriptive, clickable **References** at the end. Add a truthful **Acknowledgements** section that identifies research inputs or contributors and says whether independent testing was done. Do not insert “Source:” badges, raw URLs, reference cards, or citation clutter between paragraphs.

## Editorial voice and structure

- Write a short, specific headline, a concise deck, and a short TL;DR. Then write an actual opening before the first section. Use clear, distinct section headings that move the argument forward, paragraphs with one main idea, and a conclusion that answers the opening question.
- Use professional, direct language. No em dashes, filler, hype, unsupported certainty, generic AI slogans, or repeated point-making. Keep bylines as **individual author names**, bold in the page UI; never combine several people into a fake author. Respect the exact names and date the user provides.
- For the current research series, keep the article prose in a neutral engineering-student voice: avoid first-person narration and the pronouns “I”, “he”, “she”, and “who”, and do not name individual people in the prose. Author names belong in the byline. A later explicit user instruction can change this convention.
- Rewrite rough supplied text into an original, coherent article. Do not paste large passages from sources. Make the factual scope and uncertainty visible in the wording itself.

## Images, figures, and page design

- Use the approved article cover for the archive card, immediately after the article title, in the share preview, and in Open Graph/Twitter metadata. Preserve supplied artwork; ask for or create a new asset only when the task calls for one. Provide accurate alt text. Do not leave a placeholder or use unrelated stock art.
- Keep the reading page genuinely black (`#000`), one calm text column, consistent body and heading sizes, generous spacing, and a legible line length. Navigation is plain text at the top; TL;DR, contents, body, acknowledgements, and references follow. Avoid coloured panels, boxed prose, oversized buttons, decorative rules, and competing type scales.
- Add a chart or diagram only if it communicates verified data or a necessary mechanism better than prose. Label axes, units, dates, populations, and estimates; explain it **below** the figure and identify its data source in the References. Never use decorative or invented numbers, overflowing labels, unreadable generated text, or a conceptual straight line presented as evidence. Inspect the rendered figure at desktop and mobile sizes.
- Keep the bottom **Related topics** links tied to real article topics and the two rotating, image-led **Related articles** cards. Preserve previous/next links. A topic must open a matching filtered archive result, not a dead label. Keep article cards and filters usable with keyboard, touch, and hover.

## Add an article in this repo

1. Add a `FeatureArticle` in `src/lib/editorial-<slug>.tsx` with a unique slug, individual authors, date and ISO date, title, deck, summary, excerpt, category, searchable terms, real topics, cover and alt text, opening, sections, acknowledgement, and source links. Register it in `FEATURE_ARTICLES`. Keep `EDITORIALS` as the ordered archive and ensure any category or author filter remains accurate.
2. Use the shared `EditorialArticle` page through the dynamic route. Check canonical, publication time, Open Graph/Twitter image, Article JSON-LD, sitemap, byline, archive search/filter, share preview, topic links, and related/adjacent navigation. Social-platform unfurls can be verified only after a public deployment.
3. Run typecheck, lint, and the production build. Review the complete article and archive at desktop and mobile sizes, including the top, body, figures, and bottom. Do browser review at the end when the user has requested that sequence. Fix truncation, overflow, bad image crops, and interaction failures before calling the article finished.
