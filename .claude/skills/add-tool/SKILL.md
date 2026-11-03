---
name: add-tool
description: Add a new in-browser tool to FileOmniTool (registry entry in 6 languages, component, wiring, related links). Use when the user asks for a new tool/strumento, or to convert/compress/edit a new file type.
---

# Add a tool to FileOmniTool

Locate code with `graphify query`/`explain` first. Never read `tools-registry*.ts` whole: grep an existing tool's id and read only its entry as a template.

1. **Check it is new.** `grep -rn 'id: "<new-id>"' web/src/lib/tools-registry*.ts`. Search the registry for a near-duplicate too; extending an existing tool beats adding a thin copy.
2. **Registry entry.** Append to `WAVE4_TOOLS` in `web/src/lib/tools-registry-wave4.ts`, copying the shape of the closest existing entry: `id`, `category` (`pdf | image | audio | archive | text`), `iconName` (lucide), `acceptedMime`, and `title`, `description`, `seoKeyword`, `metaTitle`, `metaDescription`, `instructions` and `faq` in **all 6 locales** (it, en, es, fr, de, pt). Write the copy for real people searching in each country. No invented stats or ratings.
3. **Engine.** Put heavy logic in `web/src/lib/client-engines/<name>-engine.ts`. Load any big library with dynamic `import()` so it ships only on that page. Use no network calls with file data and no CDN-loaded WASM; bundle it.
4. **Component.** Create `web/src/components/tools/<Name>Tool.tsx`, modelled on `PdfCompressTool.tsx`:
   - use the shared `Dropzone`;
   - show the before and after result;
   - put `data-action="download"` on the download button (it triggers the support modal);
   - put `<AdBanner slot="action-card" />` near the result.
   Every string needs 6 languages.
5. **Wire it.** Import the component and add a `case "<id>":` in the `switch` of `web/src/components/tools/ToolPageClient.tsx`.
6. **Link it.** Add the id to `relatedToolIds` of matching articles or guides, and remove ids there that don't exist. Sitemap, OG image, llms.txt, header counts and search update automatically from the registry.
7. **Test with a real file.** Use the built-in browser with `preview_start` `web-prod` after `npm run build`. Check that the output file is valid and that `performance.getEntriesByType("resource")` shows no request carrying file data.
8. Ship with the `/ship` skill if the user wants it online.
