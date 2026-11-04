<div align="center">

<a href="https://www.fileomnitool.com"><img src="https://www.fileomnitool.com/opengraph-image" alt="FileOmniTool: free file tools that run entirely in your browser" width="720"></a>

# FileOmniTool

**80+ free file tools that run 100% in your browser. Your files never leave your device.**

[![Live site](https://img.shields.io/badge/Live-fileomnitool.com-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://www.fileomnitool.com)
[![Zero upload](https://img.shields.io/badge/Privacy-Zero%20upload-047857?style=for-the-badge&logo=shieldsdotio&logoColor=white)](https://www.fileomnitool.com/privacy)
[![Languages](https://img.shields.io/badge/Languages-6-059669?style=for-the-badge&logo=googletranslate&logoColor=white)](https://www.fileomnitool.com/en)
[![License](https://img.shields.io/badge/License-PolyForm%20Noncommercial-f59e0b?style=for-the-badge)](LICENSE)

[**Open the app**](https://www.fileomnitool.com/en) · [Guides](https://www.fileomnitool.com/en/guides) · [Articles](https://www.fileomnitool.com/en/articles) · [🇮🇹 Italiano](#-in-italiano)

</div>

---

## Why FileOmniTool?

Most "free online converters" upload your contracts, payslips and photos to a server you know nothing about. FileOmniTool does the opposite: every operation runs **inside your browser**, in your device's memory, using WebAssembly and native web APIs.

| | Typical cloud converter | FileOmniTool |
|---|---|---|
| Where your file goes | Uploaded to a remote server | Stays on your device |
| Account or signup | Often required | Never |
| Daily limits or paywall | Common | None |
| Works offline | No | Yes, installable as an app (PWA) |
| Waiting in a server queue | Yes | No, it runs at your device's speed |

You can check this yourself: open your browser's DevTools, go to the **Network** tab and use any tool. No request carries your file.

## What's inside

| Category | Highlights |
|---|---|
| 📄 **PDF** | Merge, split, compress, sign, protect with a password, rotate, reorder or delete pages, page numbers, extract text, flatten forms, grayscale, edit metadata, text to PDF |
| 🖼️ **Images** | Convert (JPG, PNG, WebP), compress, **HEIC to JPG**, resize, crop, blur and censor, watermark, **remove EXIF and GPS data**, SVG to PNG, favicon and ICO generator, color picker, QR scanner, barcode generator, screen recorder, webcam test |
| 🎧 **Audio & video** | Convert to MP3, extract audio from video, trim and make ringtones, volume booster, speed change, reverse, stereo to mono, voice recorder, mic test, SRT to WebVTT |
| 📦 **Archives & files** | Create and extract ZIP (with zip-bomb protection), SHA-256 / MD5 checksums, hex viewer, file-type detection from magic bytes |
| 💻 **Text & developer** | JSON / CSV / XML / YAML converters, JSON to SQL, JSON formatter, Excel and Word viewers, Markdown editor, text diff, RegEx tester, JWT decoder, hash, UUID and password generators, Base64, timestamps, CSS minifier, and more |

Every tool comes with a step-by-step guide, and the site also publishes in-depth articles on file privacy and free alternatives to paid software.

**Available in 6 languages:** Italian, English, Spanish, French, German and Portuguese.

## Privacy by design

- **Zero upload.** Tool code never sends file data over the network. This is a hard rule of the project, not a setting.
- **Offline-ready.** A service worker caches the app, so you can install it and use it without a connection. On supported devices you can open or share files straight into FileOmniTool.
- **Consent first.** Analytics and ads load only after you accept them in the cookie banner. Reject them and the tools work exactly the same.
- **Hardened headers.** HSTS, `X-Frame-Options` and a strict `Permissions-Policy`.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, static generation), React 19, TypeScript, Tailwind CSS
- **Processing engines (all client-side):** [`pdf-lib`](https://github.com/Hopding/pdf-lib), [`jszip`](https://github.com/Stuk/jszip), [`heic-to`](https://github.com/hoppergee/heic-to), [`lamejs`](https://github.com/breezystack/lamejs), Canvas API, Web Audio API, MediaRecorder, Web Crypto API, WebAssembly
- **SEO:** about 1,000 prerendered pages, `hreflang` for every language, generated Open Graph images, [`llms.txt`](https://www.fileomnitool.com/llms.txt) for AI assistants, IndexNow
- **Hosting:** Vercel. Every push to `main` deploys to production.

## Run it locally

Requires Node.js 20 or newer.

```bash
git clone https://github.com/Cybsquatch/FileOmniTool.git
cd FileOmniTool/web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build:

```bash
npm run build
npm run start
```

### Project layout

```text
web/
├── src/app/                 # Routes: Italian at "/", other languages under /[locale]
├── src/components/tools/    # One React component per tool
├── src/lib/client-engines/  # Heavy processing logic, lazy-loaded per tool page
├── src/lib/tools-registry*  # Tool catalog: titles, SEO and FAQ in 6 languages
├── src/lib/articles-*       # Articles
├── src/lib/guides-*         # Step-by-step guides
└── public/sw.js             # Offline service worker
```

## Contributing

Bug reports and ideas for new tools are welcome in [Issues](https://github.com/Cybsquatch/FileOmniTool/issues). When proposing a tool, keep the core rule in mind: it must work entirely in the browser, with no file data sent anywhere.

## Support the project

FileOmniTool is free and has no paid tier. It is funded by ads that appear only with your consent. If it saved you time, the best way to help is to **star this repository ⭐** and share the site with someone who still uploads their documents to random converters.

## License

This project is **source-available** under the [PolyForm Noncommercial License 1.0.0](LICENSE).

- ✅ **You can** read, study, modify and run the code for personal use, research, education, hobby projects, and in charities, schools and public institutions.
- ❌ **You cannot** use it for commercial purposes, such as running a competing site with ads or paid plans, selling it, or using it inside a business, without written permission.

Need a commercial license? Open an issue or contact the author through [GitHub](https://github.com/Cybsquatch).

Third-party libraries keep their own licenses (for example, `heic-to` is LGPL-3.0).

---

## 🇮🇹 In italiano

**FileOmniTool** offre oltre 80 strumenti gratuiti per PDF, immagini, audio, archivi e testo che funzionano **interamente nel browser**: i file non vengono mai caricati su un server. Non serve registrarsi, non ci sono limiti e si può installare come app che funziona anche offline.

👉 Provalo su **[fileomnitool.com](https://www.fileomnitool.com)**

**Licenza:** il codice è pubblico e consultabile sotto [PolyForm Noncommercial 1.0.0](LICENSE). Puoi studiarlo, modificarlo e usarlo per scopi personali, di studio o di ricerca, e in enti non profit, scuole e pubbliche amministrazioni. Non puoi usarlo per scopi commerciali, per esempio un sito concorrente con pubblicità o abbonamenti, senza un permesso scritto.

<div align="center">

Made in Italy by [Cybsquatch](https://github.com/Cybsquatch)

</div>
