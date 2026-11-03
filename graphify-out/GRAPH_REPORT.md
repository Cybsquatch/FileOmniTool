# Graph Report - OmniTool  (2026-11-03)

## Corpus Check
- 224 files · ~236,208 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .xml 1, .ico 1)

## Summary
- 997 nodes · 2935 edges · 58 communities (49 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 33 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1a475995`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- AgentResult
- ToolPageClient.tsx
- OpenWithClient.tsx
- Dropzone
- renderOgImage
- Header.tsx
- AdBanner
- seo-helpers.ts
- steps
- Footer
- next
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
- FileOmniTool 🛠️🔒
- ZipExtractTool.tsx
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
- web/README.md
- push-indexnow.mjs
- CLAUDE.md
- @vercel/speed-insights
- AGENTS.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `react` - 129 edges
2. `lucide-react` - 108 edges
3. `Dropzone()` - 105 edges
4. `formatBytes()` - 97 edges
5. `AdBanner()` - 96 edges
6. `ToolPageClient()` - 96 edges
7. `useLanguage()` - 81 edges
8. `sanitizeFileName()` - 74 edges
9. `next` - 45 edges
10. `Footer()` - 29 edges

## Surprising Connections (you probably didn't know these)
- `5. Embeddable Widget Backlink Strategy` --references--> `EmbedWidgetModal()`  [INFERRED]
  docs/DOMAIN_AUTHORITY_PLAYBOOK.md → web/src/components/tools/EmbedWidgetModal.tsx
- `2. Punti di Forza Strategici` --references--> `GrowthAgent`  [INFERRED]
  agents/reports/MASTER_DASHBOARD.md → agents/specialized/growth_agent.py
- `2. Punti di Forza Strategici` --references--> `MonetizationAgent`  [INFERRED]
  agents/reports/MASTER_DASHBOARD.md → agents/specialized/monetization_agent.py
- `2. Punti di Forza Strategici` --references--> `SecurityAuditorAgent`  [INFERRED]
  agents/reports/MASTER_DASHBOARD.md → agents/specialized/security_agent.py
- `2. Punti di Forza Strategici` --references--> `SeoAgent`  [INFERRED]
  agents/reports/MASTER_DASHBOARD.md → agents/specialized/seo_agent.py

## Import Cycles
- None detected.

## Communities (58 total, 9 thin omitted)

### Community 0 - "AgentResult"
Cohesion: 0.06
Nodes (19): cmd_dashboard(), cmd_list(), cmd_run_all(), cmd_run_one(), main(), print_banner(), AgentResult, BaseAgent (+11 more)

### Community 1 - "ToolPageClient.tsx"
Cohesion: 0.08
Nodes (36): lucide-react, react, BarcodeGeneratorTool(), CaseConverterTool(), ColorConverterTool(), CsvToMarkdownTool(), EmbedWidgetModal(), EmbedWidgetModalProps (+28 more)

### Community 2 - "OpenWithClient.tsx"
Cohesion: 0.06
Nodes (51): geistMono, geistSans, metadata, RootLayout(), viewport, LocaleLayout(), FILE_INPUT_TOOL_IDS, metadata (+43 more)

### Community 3 - "Dropzone"
Cohesion: 0.10
Nodes (34): Base64ToImageTool(), CssMinifierTool(), Dropzone(), DropzoneProps, FileMagicDetectorTool(), MagicSignature, SIGNATURES, FileToBase64Tool() (+26 more)

### Community 4 - "renderOgImage"
Cohesion: 0.06
Nodes (34): alt, contentType, Image(), size, alt, contentType, Image(), size (+26 more)

### Community 5 - "Header.tsx"
Cohesion: 0.10
Nodes (24): ArticlesPage(), metadata, escapeXml(), GET(), CATEGORIES, dynamic, generateMetadata(), LocalizedArticlesPage() (+16 more)

### Community 6 - "AdBanner"
Cohesion: 0.10
Nodes (23): AdBanner(), AdBannerProps, AdSlotType, readMarketingConsent(), SandboxedAdSlot(), SandboxedNativeSlot(), subscribeToConsent(), useMarketingConsent() (+15 more)

### Community 7 - "seo-helpers.ts"
Cohesion: 0.09
Nodes (27): LocaleLayoutProps, generateMetadata(), LocalizedHomePage(), LocalizedHomePageProps, metadata, RootHomePage(), sitemap(), ALL_LOCALES (+19 more)

### Community 8 - "steps"
Cohesion: 0.06
Nodes (30): concurrency, cancel-in-progress, group, GH_TOKEN, STALE_MD, runs-on, steps, jobs (+22 more)

### Community 9 - "Footer"
Cohesion: 0.12
Nodes (23): SingleGuidePage(), LocalizedGuidePage(), generateMetadata(), LocalizedPrivacyPage(), LocalizedPrivacyPageProps, generateMetadata(), LocalizedTermsPage(), LocalizedTermsPageProps (+15 more)

### Community 10 - "next"
Cohesion: 0.11
Nodes (14): next, GuidesPage(), metadata, generateMetadata(), GuidePageProps, generateMetadata(), LocalizedGuidesPage(), LocalizedGuidesPageProps (+6 more)

### Community 11 - "weekly-freshness.mjs"
Cohesion: 0.09
Nodes (16): __dirname, envPath, fetchStats(), headers, sinceDate, untilDate, __dirname, __dirname (+8 more)

### Community 12 - "guides-registry.ts"
Cohesion: 0.13
Nodes (17): GuidePageClientProps, GuidesIndexClientProps, AUDIO_GUIDES, DEV_INTEGRITY_GUIDES, IMAGE_GUIDES, OFFICE_TEXT_GUIDES, PDF_GUIDES, getGuideByToolId() (+9 more)

### Community 13 - "pdf-engine.ts"
Cohesion: 0.12
Nodes (20): ImageToPdfTool(), PdfMetadataTool(), PageItem, PdfOrganizeTool(), PdfPageNumberTool(), PdfRotateTool(), PdfSplitTool(), PdfToTextTool() (+12 more)

### Community 14 - "HeicToJpgTool.tsx"
Cohesion: 0.13
Nodes (21): heic-to, heic-to@^1.6.7, Converted, HeicToJpgTool(), STRINGS, triggerDownload(), Box, convertHeicFile() (+13 more)

### Community 15 - "useLanguage"
Cohesion: 0.16
Nodes (17): PrivacyBadge(), ShareButtons(), ShareButtonsProps, SocialLinks(), SocialLinksProps, SupportPromptModal(), TEXTS, GuidePageClient() (+9 more)

### Community 16 - "sanitizeFileName"
Cohesion: 0.27
Nodes (16): AudioBoosterTool(), AudioConvertTool(), AudioReverseTool(), AudioSpeedTool(), AudioStereoToMonoTool(), AudioToneTool(), AudioTrimTool(), VideoToAudioTool() (+8 more)

### Community 17 - "package.json"
Cohesion: 0.13
Nodes (20): tailwindcss, @tailwindcss/postcss, @types/jsbarcode, @types/node, @types/qrcode, @types/react, @types/react-dom, typescript (+12 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (20): @breezystack/lamejs, jsbarcode, jsqr, jszip, pdf-lib, react-dom, @vercel/analytics, xlsx (+12 more)

### Community 19 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "pdf-compress-engine.ts"
Cohesion: 0.21
Nodes (17): canvasToJpeg(), collectMaskRefs(), colorComponents(), COMPRESS_LEVELS, CompressLevel, compressOnce(), compressPdf(), compressPdfToTarget() (+9 more)

### Community 21 - "tools-registry.ts"
Cohesion: 0.18
Nodes (11): ICON_MAP, ToolCardProps, ToolPageClientProps, BASE_TOOLS, EXPANDED_TOOLS, LocalizedContent, NEW_VIRAL_TOOLS, ToolDefinition (+3 more)

### Community 22 - "🚀 FileOmniTool - Domain Authority (DA / DR) Growth Playbook"
Cohesion: 0.13
Nodes (14): 1. High-Authority Directory Submissions (DA 70 – 96), 2. GitHub Awesome Lists Link Building (DA 96+ Dofollow), 3. Launch Posts & Community Outreach, 4. Digital PR Pitch Templates for Tech Journalists, 5. Embeddable Widget Backlink Strategy, 6. IndexNow & Instant Crawling Protocol, 🚀 FileOmniTool - Domain Authority (DA / DR) Growth Playbook, Hacker News ("Show HN") (+6 more)

### Community 23 - "sw.js"
Cohesion: 0.24
Nodes (13): handleNavigation(), handleRuntime(), handleShareTarget(), handleStatic(), isCacheable(), KNOWN_CACHES, openDb(), pageKey() (+5 more)

### Community 24 - "calculateMd5"
Cohesion: 0.25
Nodes (11): JsonCsvTool(), calculateMd5(), bitRol(), md5cmn(), md5ff(), md5gg(), md5hh(), md5ii() (+3 more)

### Community 25 - "getHreflangAlternates"
Cohesion: 0.28
Nodes (9): ArticlePageProps, generateMetadata(), SingleArticlePage(), generateMetadata(), LocalizedArticlePage(), LocalizedArticlePageProps, ArticlePageClient(), getArticleBySlug() (+1 more)

### Community 26 - "[locale]/tools/[slug]/page.tsx"
Cohesion: 0.26
Nodes (9): generateMetadata(), LocalizedToolPage(), LocalizedToolPageProps, generateMetadata(), PageProps, ToolPage(), getToolMetadata(), getToolById() (+1 more)

### Community 27 - "1. Mappatura & Architettura dei Tool Client-Side (100% Legali & Browser-Based)"
Cohesion: 0.22
Nodes (8): 1. Mappatura & Architettura dei Tool Client-Side (100% Legali & Browser-Based), 2. Specifiche Tecniche per lo Sviluppo di Nuovi Tool, A. Categoria Documenti & PDF (Libreria Core: `pdf-lib` + `pdfjs-dist`), B. Categoria Immagini (Tecnologia Core: HTML5 Canvas + Web Codecs), C. Categoria Archivi (Libreria Core: `jszip`), D. Categoria Dati, Codici & Testo, E. Roadmap Prossima release (WASM Avanzato), ToolArchitectAgent - Report Ufficiale

### Community 28 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, build, dev, freshness, indexnow, lint, ping, start (+1 more)

### Community 29 - "tools-translations.ts"
Cohesion: 0.44
Nodes (5): TOOLS_TRANSLATIONS_BASE, ToolTranslationEntry, TOOLS_TRANSLATIONS_EXPANDED, TOOLS_TRANSLATIONS, TOOLS_TRANSLATIONS_WAVE3

### Community 30 - "GrowthAgent - Report Ufficiale"
Cohesion: 0.25
Nodes (7): 1. Analisi Competitor & Angolo Differenziante, 2. Playbook di Traffico Organico: Strategie a Costo Zero, 3. Strategia di Viralià e Social Sharing, 4. Roadmap di Acquisizione Utenti (Fasi di Crescita), A. Community Hijacking (Reddit & Forum Tecnici), B. Posizionamento Programmatico su Quora & StackOverflow, GrowthAgent - Report Ufficiale

### Community 31 - "FileOmniTool 🛠️🔒"
Cohesion: 0.25
Nodes (7): 👤 Autore & Licenza, 🧰 Catalogo dei 77 Strumenti Inclusi, 💻 Come Eseguire in Locale, FileOmniTool 🛠️🔒, 💡 Perché FileOmniTool?, 📚 Sezione Editoriale & Guide Open-Source, 🛠️ Stack Tecnologico

### Community 32 - "ZipExtractTool.tsx"
Cohesion: 0.43
Nodes (5): ZipCreateTool(), ZipExtractTool(), createZipArchive(), ExtractedFile, extractZipArchive()

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

### Community 47 - "web/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 48 - "push-indexnow.mjs"
Cohesion: 0.83
Nodes (3): fetchUrlsFromSitemap(), main(), submitIndexNow()

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ToolPageClient.tsx` to `OpenWithClient.tsx`, `Dropzone`, `Header.tsx`, `AdBanner`, `seo-helpers.ts`, `Footer`, `next`, `pdf-engine.ts`, `HeicToJpgTool.tsx`, `useLanguage`, `sanitizeFileName`, `package.json`, `dependencies`, `tools-registry.ts`, `calculateMd5`, `getHreflangAlternates`, `[locale]/tools/[slug]/page.tsx`, `ZipExtractTool.tsx`, `QrGeneratorTool.tsx`, `ExcelConvertTool.tsx`, `TextDiffTool.tsx`, `FileChecksumTool.tsx`, `KeywordDensityTool.tsx`, `RegexTesterTool.tsx`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `AgentResult` be split into smaller, more focused modules?**
  _Cohesion score 0.059644322845417236 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ToolPageClient.tsx`, `OpenWithClient.tsx`, `renderOgImage`, `Header.tsx`, `seo-helpers.ts`, `Footer`, `next.config.ts`, `useLanguage`, `package.json`, `dependencies`, `tools-registry.ts`, `getHreflangAlternates`, `[locale]/tools/[slug]/page.tsx`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `ToolPageClient.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08461538461538462 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `ToolPageClient.tsx` to `OpenWithClient.tsx`, `Dropzone`, `Header.tsx`, `AdBanner`, `Footer`, `next`, `pdf-engine.ts`, `HeicToJpgTool.tsx`, `useLanguage`, `sanitizeFileName`, `package.json`, `dependencies`, `tools-registry.ts`, `calculateMd5`, `ZipExtractTool.tsx`, `QrGeneratorTool.tsx`, `ExcelConvertTool.tsx`, `TextDiffTool.tsx`, `FileChecksumTool.tsx`, `KeywordDensityTool.tsx`, `RegexTesterTool.tsx`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Should `OpenWithClient.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06292966684294024 - nodes in this community are weakly interconnected._
- **Should `Dropzone` be split into smaller, more focused modules?**
  _Cohesion score 0.0955837870538415 - nodes in this community are weakly interconnected._