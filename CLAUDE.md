# FileOmniTool

Privacy-first file tools that run 100% in the browser (https://www.fileomnitool.com), monetized with ads. Owner: Riccardo (writes in Italian; answer in Italian).

## Deploy & verify
- Every push to `main` deploys to production on Vercel in about 2 minutes. There is no Vercel CLI access: verify live with `curl` (look for a string that only exists in the new build).
- Before pushing: `npx tsc --noEmit -p .` and `npm run build`, both from `web/`. The build prerenders about 2100 pages in roughly a minute.
- After a push that touches `web/src/lib/articles-*.ts`, the GitHub workflow may push a bot commit (`chore(seo): update dateModified…`). Run `git fetch` and check `git log main..origin/main` before the next push.
- Use the `/ship` skill for this whole sequence.

## Map (web/, Next.js 16 App Router; read node_modules/next/dist/docs before using Next APIs)
- Tools: `src/lib/tools-registry*.ts` (huge, never read whole; grep the tool id). New tools go in `tools-registry-wave4.ts` with all 6 locales. The component lives in `src/components/tools/`, and the `switch` in `ToolPageClient.tsx` picks it. Use the `/add-tool` skill.
- Articles: `src/lib/articles-registry.ts` and `articles-wave2/3.ts`. Guides: `src/lib/guides-*.ts`.
- i18n: `src/lib/i18n/context.tsx` holds the DICTIONARY. Italian is the root locale (`/`); `/en /es /fr /de /pt` live under `[locale]`. Every user-facing string needs all 6 languages.
- SEO: `src/lib/seo-helpers.ts`, `src/app/sitemap.ts`, the `opengraph-image.tsx` files (shared renderer in `src/lib/og-image.tsx`), and `src/app/llms.txt/route.ts`, which is generated from the registries.
- Ads: `src/components/ads/AdBanner.tsx`. PWA: `public/sw.js`, `src/app/manifest.ts`, `src/app/open`, `src/lib/pwa/`.

## Rules learned the hard way
- Never fake freshness or reputation. `dateModified` is set automatically by `web/scripts/weekly-freshness.mjs` from content hashes, so never edit it by hand. No invented ratings or reviews in JSON-LD.
- Counts of tools and articles always come from the registries (`TOOLS_REGISTRY.length`), never as literals. In prose, write "80+".
- Ads: load only after marketing consent. The Adsterra iframes need `allow-same-origin`, because they stop serving without it. Never add the popunder/social bar (`bauval.org/14/…`). Claude's built-in browser receives no Adsterra fill, so only the owner (or Claude in Chrome) can confirm that ads render.
- Zero upload: tool code must never send file data over the network. Lazy-load heavy libs with `import()` on the tool page only.
- Windows checkout uses CRLF. Any script that hashes or parses files must strip `\r` first.

## Working economically
- Find code with `graphify query` first (see below), then `grep -n` plus a ranged Read. Don't read registries or dictionaries whole.
- Run the build once per batch of changes, not after every edit.
- Routine edits work well on Sonnet; keep Opus for audits, refactors and debugging.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.
