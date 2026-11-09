# Graph Report - nostalgic-meninsky-d602fc  (2026-11-09)

## Corpus Check
- 250 files · ~357,269 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 4, .xml 1, .ico 1)

## Summary
- 1153 nodes · 3317 edges · 69 communities (59 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f05b2609`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- AgentResult
- ToolPageClient.tsx
- OpenWithClient.tsx
- Dropzone
- renderOgImage
- articles-registry.ts
- AdBanner
- seo-helpers.ts
- steps
- Footer
- [locale]/guides/[slug]/page.tsx
- weekly-freshness.mjs
- guides-registry.ts
- pdf-engine.ts
- HeicToJpgTool.tsx
- useLanguage
- sanitizeFileName
- package.json
- dependencies
- compilerOptions
- pdf-compress-engine.ts
- tools-registry.ts
- 🚀 FileOmniTool - Domain Authority (DA / DR) Growth Playbook
- sw.js
- calculateMd5
- getHreflangAlternates
- [locale]/tools/[slug]/page.tsx
- 1. Mappatura & Architettura dei Tool Client-Side (100% Legali & Browser-Based)
- scripts
- tools-translations.ts
- GrowthAgent - Report Ufficiale
- FileOmniTool
- ImageCompressKbTool.tsx
- SecurityAuditorAgent - Report Ufficiale
- SeoAgent - Report Ufficiale
- QrGeneratorTool.tsx
- ExcelConvertTool.tsx
- MonetizationAgent - Report Ufficiale
- 1. Audit di Integrità Frontend & Responsività Cross-Device
- eslint
- TextDiffTool.tsx
- word-engine.ts
- FileChecksumTool.tsx
- KeywordDensityTool.tsx
- RegexTesterTool.tsx
- image-engine.ts
- next.config.ts
- bg-remove-engine.ts
- push-indexnow.mjs
- FileOmniTool
- app/layout.tsx
- AGENTS.md
- postcss.config.mjs
- next
- [locale]/about/page.tsx
- guides-body-translations.ts
- pdf-lib
- guides-translations.ts
- copy-vendor.mjs
- ArticleMarkdown.tsx
- PdfWatermarkTool.tsx
- SvgToPngTool.tsx
- Add a tool to FileOmniTool
- ship/SKILL.md

## God Nodes (most connected - your core abstractions)
1. `react` - 137 edges
2. `Dropzone()` - 114 edges
3. `lucide-react` - 113 edges
4. `formatBytes()` - 105 edges
5. `AdBanner()` - 104 edges
6. `ToolPageClient()` - 100 edges
7. `useLanguage()` - 91 edges
8. `sanitizeFileName()` - 82 edges
9. `next` - 49 edges
10. `Language` - 34 edges

## Surprising Connections (you probably didn't know these)
- `Add a tool to FileOmniTool` --references--> `Dropzone()`  [INFERRED]
  .claude/skills/add-tool/SKILL.md → web/src/components/tools/Dropzone.tsx
- `5. Embeddable Widget Backlink Strategy` --references--> `EmbedWidgetModal()`  [INFERRED]
  docs/DOMAIN_AUTHORITY_PLAYBOOK.md → web/src/components/tools/EmbedWidgetModal.tsx
- `2. Punti di Forza Strategici` --references--> `GrowthAgent`  [INFERRED]
  agents/reports/MASTER_DASHBOARD.md → agents/specialized/growth_agent.py
- `2. Punti di Forza Strategici` --references--> `MonetizationAgent`  [INFERRED]
  agents/reports/MASTER_DASHBOARD.md → agents/specialized/monetization_agent.py
- `2. Punti di Forza Strategici` --references--> `SecurityAuditorAgent`  [INFERRED]
  agents/reports/MASTER_DASHBOARD.md → agents/specialized/security_agent.py

## Import Cycles
- None detected.

## Communities (69 total, 10 thin omitted)

### Community 0 - "AgentResult"
Cohesion: 0.06
Nodes (19): cmd_dashboard(), cmd_list(), cmd_run_all(), cmd_run_one(), main(), print_banner(), AgentResult, BaseAgent (+11 more)

### Community 1 - "ToolPageClient.tsx"
Cohesion: 0.08
Nodes (38): lucide-react, react, BarcodeGeneratorTool(), CaseConverterTool(), ColorConverterTool(), ComparisonItem, ComparisonTable(), CsvToMarkdownTool() (+30 more)

### Community 2 - "OpenWithClient.tsx"
Cohesion: 0.09
Nodes (39): FILE_INPUT_TOOL_IDS, metadata, OpenPage(), ServiceWorkerRegister(), Eligibility, InstallAppPrompt(), OfflineState, readEligibility() (+31 more)

### Community 3 - "Dropzone"
Cohesion: 0.10
Nodes (23): Base64ToImageTool(), CssMinifierTool(), DropzoneProps, FileMagicDetectorTool(), MagicSignature, SIGNATURES, FileToBase64Tool(), HexViewerTool() (+15 more)

### Community 4 - "renderOgImage"
Cohesion: 0.06
Nodes (33): alt, contentType, Image(), size, alt, contentType, Image(), size (+25 more)

### Community 5 - "articles-registry.ts"
Cohesion: 0.10
Nodes (21): escapeXml(), GET(), CATEGORIES, dynamic, ArticlePageClientProps, ArticlesIndexClientProps, AUTHOR_ROLE, ArticleItem (+13 more)

### Community 6 - "AdBanner"
Cohesion: 0.09
Nodes (37): jszip, AdBanner(), AdBannerProps, AdSlotType, readMarketingConsent(), SandboxedAdSlot(), SandboxedNativeSlot(), subscribeToConsent() (+29 more)

### Community 7 - "seo-helpers.ts"
Cohesion: 0.08
Nodes (28): generateMetadata(), LocalizedHomePage(), LocalizedHomePageProps, LocalizedToolPage(), sitemap(), SocialLinksProps, getGuideLocales(), ABOUT_DESCRIPTIONS (+20 more)

### Community 8 - "steps"
Cohesion: 0.06
Nodes (30): concurrency, cancel-in-progress, group, GH_TOKEN, STALE_MD, runs-on, steps, jobs (+22 more)

### Community 9 - "Footer"
Cohesion: 0.11
Nodes (27): GuidesPage(), metadata, generateMetadata(), LocalizedGuidesPage(), LocalizedGuidesPageProps, generateMetadata(), LocalizedPrivacyPage(), LocalizedPrivacyPageProps (+19 more)

### Community 10 - "[locale]/guides/[slug]/page.tsx"
Cohesion: 0.24
Nodes (12): generateMetadata(), GuidePageProps, SingleGuidePage(), generateMetadata(), LocalizedGuidePage(), LocalizedGuidePageProps, ShareButtons(), ShareButtonsProps (+4 more)

### Community 11 - "weekly-freshness.mjs"
Cohesion: 0.09
Nodes (16): __dirname, envPath, fetchStats(), headers, sinceDate, untilDate, __dirname, __dirname (+8 more)

### Community 12 - "guides-registry.ts"
Cohesion: 0.16
Nodes (12): GuidePageClientProps, GuidesIndexClientProps, AUDIO_GUIDES, DEV_INTEGRITY_GUIDES, IMAGE_GUIDES, OFFICE_TEXT_GUIDES, PDF_GUIDES, GUIDE_LOCALES (+4 more)

### Community 13 - "pdf-engine.ts"
Cohesion: 0.11
Nodes (22): ImageToPdfTool(), PdfFlattenTool(), PdfMetadataTool(), PageItem, PdfOrganizeTool(), PdfPageNumberTool(), PdfSplitTool(), PdfToTextTool() (+14 more)

### Community 14 - "HeicToJpgTool.tsx"
Cohesion: 0.14
Nodes (21): heic-to, heic-to@^1.6.7, Converted, HeicToJpgTool(), STRINGS, triggerDownload(), Box, convertHeicFile() (+13 more)

### Community 15 - "useLanguage"
Cohesion: 0.13
Nodes (22): metadata, RootHomePage(), CONTACT_EMAIL, Copy, HEADER_I18N, PrivacyBadge(), QuickSearchModal(), QuickSearchModalProps (+14 more)

### Community 16 - "sanitizeFileName"
Cohesion: 0.27
Nodes (16): AudioBoosterTool(), AudioConvertTool(), AudioReverseTool(), AudioSpeedTool(), AudioStereoToMonoTool(), AudioToneTool(), AudioTrimTool(), Dropzone() (+8 more)

### Community 17 - "package.json"
Cohesion: 0.13
Nodes (21): tailwindcss, @tailwindcss/postcss, @types/jsbarcode, @types/node, @types/qrcode, @types/react, @types/react-dom, typescript (+13 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (20): @breezystack/lamejs, jsbarcode, jsqr, react-dom, @vercel/analytics, @vercel/speed-insights, xlsx, dependencies (+12 more)

### Community 19 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "pdf-compress-engine.ts"
Cohesion: 0.21
Nodes (17): canvasToJpeg(), collectMaskRefs(), colorComponents(), COMPRESS_LEVELS, CompressLevel, compressOnce(), compressPdf(), compressPdfToTarget() (+9 more)

### Community 21 - "tools-registry.ts"
Cohesion: 0.19
Nodes (10): ToolCardProps, ToolPageClientProps, BASE_TOOLS, EXPANDED_TOOLS, LocalizedContent, NEW_VIRAL_TOOLS, ToolDefinition, ToolFaq (+2 more)

### Community 22 - "🚀 FileOmniTool - Domain Authority (DA / DR) Growth Playbook"
Cohesion: 0.11
Nodes (16): 1. High-Authority Directory Submissions (DA 70 – 96), 2. GitHub Awesome Lists Link Building (DA 96+ Dofollow), 3. Launch Posts & Community Outreach, 4. Digital PR Pitch Templates for Tech Journalists, 5. Embeddable Widget Backlink Strategy, 6. IndexNow & Instant Crawling Protocol, 🚀 FileOmniTool - Domain Authority (DA / DR) Growth Playbook, Hacker News ("Show HN") (+8 more)

### Community 23 - "sw.js"
Cohesion: 0.24
Nodes (13): handleNavigation(), handleRuntime(), handleShareTarget(), handleStatic(), isCacheable(), KNOWN_CACHES, openDb(), pageKey() (+5 more)

### Community 24 - "calculateMd5"
Cohesion: 0.25
Nodes (11): JsonCsvTool(), calculateMd5(), bitRol(), md5cmn(), md5ff(), md5gg(), md5hh(), md5ii() (+3 more)

### Community 25 - "getHreflangAlternates"
Cohesion: 0.20
Nodes (15): ArticlePageProps, generateMetadata(), SingleArticlePage(), generateMetadata(), LocalizedArticlePage(), LocalizedArticlePageProps, ArticlePageClient(), AUTHOR_BIO (+7 more)

### Community 26 - "[locale]/tools/[slug]/page.tsx"
Cohesion: 0.24
Nodes (6): generateMetadata(), LocalizedToolPageProps, generateMetadata(), PageProps, ToolPage(), getToolMetadata()

### Community 27 - "1. Mappatura & Architettura dei Tool Client-Side (100% Legali & Browser-Based)"
Cohesion: 0.22
Nodes (8): 1. Mappatura & Architettura dei Tool Client-Side (100% Legali & Browser-Based), 2. Specifiche Tecniche per lo Sviluppo di Nuovi Tool, A. Categoria Documenti & PDF (Libreria Core: `pdf-lib` + `pdfjs-dist`), B. Categoria Immagini (Tecnologia Core: HTML5 Canvas + Web Codecs), C. Categoria Archivi (Libreria Core: `jszip`), D. Categoria Dati, Codici & Testo, E. Roadmap Prossima release (WASM Avanzato), ToolArchitectAgent - Report Ufficiale

### Community 28 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, dev, freshness, indexnow, lint, ping, prebuild (+3 more)

### Community 29 - "tools-translations.ts"
Cohesion: 0.44
Nodes (5): TOOLS_TRANSLATIONS_BASE, ToolTranslationEntry, TOOLS_TRANSLATIONS_EXPANDED, TOOLS_TRANSLATIONS, TOOLS_TRANSLATIONS_WAVE3

### Community 30 - "GrowthAgent - Report Ufficiale"
Cohesion: 0.25
Nodes (7): 1. Analisi Competitor & Angolo Differenziante, 2. Playbook di Traffico Organico: Strategie a Costo Zero, 3. Strategia di Viralià e Social Sharing, 4. Roadmap di Acquisizione Utenti (Fasi di Crescita), A. Community Hijacking (Reddit & Forum Tecnici), B. Posizionamento Programmatico su Quora & StackOverflow, GrowthAgent - Report Ufficiale

### Community 31 - "FileOmniTool"
Cohesion: 0.14
Nodes (12): Contributing, FileOmniTool, 🇮🇹 In italiano, License, Privacy by design, Project layout, Run it locally, Support the project (+4 more)

### Community 32 - "ImageCompressKbTool.tsx"
Cohesion: 0.10
Nodes (24): pdfjs-dist, ImageCompressKbTool(), kbLabel(), PRESETS_KB, Result, STRINGS, triggerDownload(), DPI_OPTIONS (+16 more)

### Community 33 - "SecurityAuditorAgent - Report Ufficiale"
Cohesion: 0.29
Nodes (6): 1. Audit di Sicurezza del Codice & Prevenzione Vulnerabilità, 2. Policy di Sanificazione Input & File (Security Guardrails), 3. Content Security Policy (CSP) Consigliata per Next.js, 4. Riepilogo Livello di Rischio: BASSO / PROTETTO, A. Valutazione Rischio DOM-Based XSS, SecurityAuditorAgent - Report Ufficiale

### Community 34 - "SeoAgent - Report Ufficiale"
Cohesion: 0.29
Nodes (6): 1. Mappa Strategica Programmatic SEO & Keyword Target, 2. Architettura Programmatic Landing Pages (Long-Tail), 3. Schema JSON-LD Raccomandato per Ogni Tool, 4. Checklist On-Page SEO per la Build, Matrice di Ottimizzazione per Tool Attivi, SeoAgent - Report Ufficiale

### Community 35 - "QrGeneratorTool.tsx"
Cohesion: 0.38
Nodes (5): qrcode, qrcode@^1.5.4, QrGeneratorTool(), generateQrDataUrl(), QrOptions

### Community 36 - "ExcelConvertTool.tsx"
Cohesion: 0.52
Nodes (4): ExcelConvertTool(), createExcelFromCsv(), ParsedSpreadsheet, parseSpreadsheet()

### Community 37 - "MonetizationAgent - Report Ufficiale"
Cohesion: 0.33
Nodes (5): 1. Proiezioni di Entrate Pubblicitarie (Stima RPM $3.50 - $6.20), 2. Architettura Posizionamento Annunci (High Viewability & Zero CLS), 3. Checklist Approvazione Google AdSense al Primo Invio, I 3 Slot Pubblicitari Strategici, MonetizationAgent - Report Ufficiale

### Community 38 - "1. Audit di Integrità Frontend & Responsività Cross-Device"
Cohesion: 0.33
Nodes (5): 1. Audit di Integrità Frontend & Responsività Cross-Device, 2. Best Practice di Prestazione Frontend (Core Web Vitals), A. Certificazione "Zero-Server Upload" (Privacy Assoluta), B. Responsività & Mobile First, WebEngineerAgent - Report Ufficiale

### Community 39 - "eslint"
Cohesion: 0.33
Nodes (5): eslint, eslint-config-next, eslintConfig, eslint@^9, eslint-config-next@16.3.8

### Community 40 - "TextDiffTool.tsx"
Cohesion: 0.53
Nodes (4): TextDiffTool(), computeLineDiff(), DiffLine, DiffResult

### Community 41 - "word-engine.ts"
Cohesion: 0.40
Nodes (4): mammoth, mammoth@^1.13.0, convertDocx(), DocxConversionResult

### Community 42 - "FileChecksumTool.tsx"
Cohesion: 0.60
Nodes (3): FileChecksumTool(), HashGeneratorTool(), calculateHash()

### Community 43 - "KeywordDensityTool.tsx"
Cohesion: 0.40
Nodes (4): ENGLISH_STOPWORDS, ITALIAN_STOPWORDS, KeywordDensityTool(), KeywordItem

### Community 44 - "RegexTesterTool.tsx"
Cohesion: 0.40
Nodes (3): PRESETS, RegexPreset, RegexTesterTool()

### Community 45 - "image-engine.ts"
Cohesion: 0.60
Nodes (4): compressImage(), CompressionResult, convertImageFormat(), loadImage()

### Community 46 - "next.config.ts"
Cohesion: 0.50
Nodes (3): LOCALE_LANG, nextConfig, securityHeaders

### Community 47 - "bg-remove-engine.ts"
Cohesion: 0.11
Nodes (25): onnxruntime-web, onnxruntime-web@^1.31.1, OutFormat, STRINGS, triggerDownload(), BgBackend, BgMode, BgProgress (+17 more)

### Community 48 - "push-indexnow.mjs"
Cohesion: 0.83
Nodes (3): fetchUrlsFromSitemap(), main(), submitIndexNow()

### Community 49 - "FileOmniTool"
Cohesion: 0.29
Nodes (6): Deploy & verify, FileOmniTool, graphify, Map (web/, Next.js 16 App Router; read node_modules/next/dist/docs before using Next APIs), Rules learned the hard way, Working economically

### Community 50 - "app/layout.tsx"
Cohesion: 0.12
Nodes (17): geistMono, geistSans, metadata, RootLayout(), viewport, dynamicParams, LocaleLayout(), LocaleLayoutProps (+9 more)

### Community 58 - "next"
Cohesion: 0.15
Nodes (9): next, ArticlesPage(), metadata, generateMetadata(), LocalizedArticlesPage(), LocalizedArticlesPageProps, ArticlesIndexClient(), ARTICLES_REGISTRY (+1 more)

### Community 59 - "[locale]/about/page.tsx"
Cohesion: 0.30
Nodes (9): AboutPage(), metadata, generateMetadata(), LocalizedAboutPage(), LocalizedAboutPageProps, toLocale(), AboutContent(), getAboutJsonLd() (+1 more)

### Community 60 - "guides-body-translations.ts"
Cohesion: 0.29
Nodes (7): GUIDES_BODY_DE, GUIDES_BODY_ES, GUIDES_BODY_FR, GUIDES_BODY_PT, GUIDE_BODY_TRANSLATIONS, GuideBodyTranslation, GuideBodyTranslations

### Community 61 - "pdf-lib"
Cohesion: 0.28
Nodes (7): pdf-lib, pdf-lib@^1.17.1, addTextWatermark(), hexToRgb(), UnsupportedCharsError, WatermarkLayout, WatermarkOptions

### Community 62 - "guides-translations.ts"
Cohesion: 0.44
Nodes (5): GUIDES_TRANSLATIONS, GUIDES_TRANSLATIONS_PART1, GuideTranslationEntry, GUIDES_TRANSLATIONS_PART2, GUIDES_TRANSLATIONS_PART3

### Community 63 - "copy-vendor.mjs"
Cohesion: 0.33
Nodes (3): copies, out, root

### Community 64 - "ArticleMarkdown.tsx"
Cohesion: 0.80
Nodes (4): ArticleMarkdown(), localizeHref(), renderInline(), renderTable()

### Community 65 - "PdfWatermarkTool.tsx"
Cohesion: 0.50
Nodes (4): parsePages(), PdfWatermarkTool(), PRESETS, STRINGS

## Knowledge Gaps
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ToolPageClient.tsx` to `OpenWithClient.tsx`, `Dropzone`, `AdBanner`, `seo-helpers.ts`, `Footer`, `[locale]/guides/[slug]/page.tsx`, `pdf-engine.ts`, `HeicToJpgTool.tsx`, `useLanguage`, `sanitizeFileName`, `package.json`, `dependencies`, `🚀 FileOmniTool - Domain Authority (DA / DR) Growth Playbook`, `calculateMd5`, `getHreflangAlternates`, `[locale]/tools/[slug]/page.tsx`, `ImageCompressKbTool.tsx`, `QrGeneratorTool.tsx`, `ExcelConvertTool.tsx`, `TextDiffTool.tsx`, `FileChecksumTool.tsx`, `KeywordDensityTool.tsx`, `RegexTesterTool.tsx`, `bg-remove-engine.ts`, `app/layout.tsx`, `next`, `[locale]/about/page.tsx`, `ArticleMarkdown.tsx`, `PdfWatermarkTool.tsx`, `SvgToPngTool.tsx`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `AgentResult` be split into smaller, more focused modules?**
  _Cohesion score 0.059644322845417236 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ArticleMarkdown.tsx`, `ToolPageClient.tsx`, `OpenWithClient.tsx`, `renderOgImage`, `articles-registry.ts`, `seo-helpers.ts`, `Footer`, `[locale]/guides/[slug]/page.tsx`, `next.config.ts`, `useLanguage`, `package.json`, `dependencies`, `app/layout.tsx`, `getHreflangAlternates`, `[locale]/tools/[slug]/page.tsx`, `[locale]/about/page.tsx`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Should `ToolPageClient.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08077260755048288 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `ToolPageClient.tsx` to `OpenWithClient.tsx`, `Dropzone`, `AdBanner`, `Footer`, `[locale]/guides/[slug]/page.tsx`, `pdf-engine.ts`, `HeicToJpgTool.tsx`, `useLanguage`, `sanitizeFileName`, `package.json`, `dependencies`, `🚀 FileOmniTool - Domain Authority (DA / DR) Growth Playbook`, `calculateMd5`, `getHreflangAlternates`, `ImageCompressKbTool.tsx`, `QrGeneratorTool.tsx`, `ExcelConvertTool.tsx`, `TextDiffTool.tsx`, `FileChecksumTool.tsx`, `KeywordDensityTool.tsx`, `RegexTesterTool.tsx`, `bg-remove-engine.ts`, `app/layout.tsx`, `next`, `PdfWatermarkTool.tsx`, `SvgToPngTool.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `OpenWithClient.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09082125603864734 - nodes in this community are weakly interconnected._
- **Should `Dropzone` be split into smaller, more focused modules?**
  _Cohesion score 0.10452961672473868 - nodes in this community are weakly interconnected._