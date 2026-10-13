# FileOmniTool 🛠️🔒

[![Live Site](https://img.shields.io/badge/Live-fileomnitool.com-10b981?style=for-the-badge&logo=vercel)](https://www.fileomnitool.com)
[![Tools](https://img.shields.io/badge/Tools-77%20In--Browser-059669?style=for-the-badge)](https://www.fileomnitool.com)
[![Architecture](https://img.shields.io/badge/Privacy-100%25%20Zero--Upload-047857?style=for-the-badge)](https://www.fileomnitool.com/privacy)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> 🌐 **Live Web App:** [https://www.fileomnitool.com](https://www.fileomnitool.com) — *100% In-Browser & Private File Tools*  
> Piattaforma open-source di utilità per file eseguita al **100% all'interno del browser (Client-Side)**. Zero server upload, rispetto totale del GDPR e riservatezza garantita via WebAssembly, HTML5 Canvas e Web Crypto API.

---

## 💡 Perché FileOmniTool?

A differenza dei tradizionali convertitori cloud (come *iLovePDF* o *Smallpdf*) che caricano i documenti riservati su server esterni esponendoli a rischi di leak, **FileOmniTool esegue ogni singola operazione direttamente nella memoria RAM del tuo dispositivo**:
- **Zero Upload su Server:** Nessun byte lascia mai il computer o lo smartphone. Puoi disconnettere la connessione internet e gli strumenti continueranno a funzionare.
- **Istantaneo e Illimitato:** Nessuna coda di attesa sui server, nessun limite giornaliero e nessuna registrazione richiesta.
- **Conforme GDPR & Privacy First:** Adatto a contratti, documenti legali, cartelle cliniche e foto personali.

---

## 🧰 Catalogo dei 77 Strumenti Inclusi

1. **📄 Suite PDF (11 Strumenti):**
   - Unisci PDF (`pdf-merge`), Dividi PDF (`pdf-split`), Ruota pagine (`pdf-rotate`), Proteggi con password AES-256 (`pdf-encrypt`), Da JPG a PDF (`image-to-pdf`), Numeri di pagina (`pdf-page-number`), Estrai testo (`pdf-to-text`), Appiattisci moduli (`pdf-flatten`), ecc.
2. **🖼️ Immagini & Schermo (19 Strumenti):**
   - Convertitore WebP/PNG/JPG (`image-convert`), Comprimi immagini (`image-compress`), **Registratore Schermo in-browser** (`screen-recorder`), Rimuovi metadati EXIF e GPS (`exif-remover`), Ridimensiona, Ritaglia, Sfoca censura, Da SVG a PNG, Generatore Favicon, ecc.
3. **🎙️ Audio & Voce (10 Strumenti):**
   - Convertitore OGG/WAV/MP3 (`audio-convert`), **Registratore Vocale con microfono** (`voice-recorder`), Taglia audio e suonerie (`audio-trim`), Estrai audio da video MP4 (`video-to-audio`), Amplificatore volume 300% (`audio-booster`), ecc.
4. **📦 Archivi & Integrità (5 Strumenti):**
   - Crea archivio ZIP (`zip-create`), Estrai ZIP con protezione anti-ZipBomb (`zip-extract`), Calcolatore Checksum SHA-256/MD5 (`file-checksum`), Hex Viewer esadecimale (`hex-viewer`).
5. **💻 Testo & Developer (32 Strumenti):**
   - JSON $\leftrightarrow$ CSV (`json-csv`), Editor Markdown con anteprima live (`markdown-preview`), Code Diff Checker (`text-diff`), Generatore QR Code (`qr-generator`), Da Excel a CSV/JSON (`excel-convert`), Encoder/Decoder Base64 (`base64-tool`), Tester RegEx, Generatore UUID v4, Formattatore JSON, ecc.

---

## 📚 Sezione Editoriale & Guide Open-Source

Oltre agli strumenti, FileOmniTool ospita:
- **75 Guide Passo-Passo:** Tutorial pratici per ogni utility ([/guides](https://www.fileomnitool.com/guides)).
- **5 Articoli di Approfondimento Open-Source & Privacy:**
  1. *Artcraft e la rivoluzione Open-Source: come i tool liberi mandano in pensione gli abbonamenti Adobe.*
  2. *I 7 migliori progetti Open-Source su GitHub per sostituire i software SaaS a pagamento.*
  3. *FileOmniTool vs Smallpdf e iLovePDF: cosa succede davvero ai tuoi file quando li carichi nel cloud.*
  4. *Suite PDF completa senza spendere un euro: alternative gratuite locali ad Adobe Acrobat Pro.*
  5. *Guida definitiva ai metadati EXIF: come cancellare le coordinate GPS dalle foto prima di condividerle.*

---

## 🛠️ Stack Tecnologico

- **Frontend & SSG:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS.
- **Motori di Calcolo Client-Side:** WebAssembly (Wasm), `pdf-lib`, `jszip`, HTML5 Canvas API, Web Audio API, MediaStream Recording API, Web Cryptography API.
- **SEO & Internazionalizzazione:** 6 lingue (IT, EN, ES, FR, DE, PT) con sitemap XML da 979 URL statici e annotazioni `hreflang` / `x-default`.
- **Sicurezza:** Header HTTP completi (HSTS, CSP, X-Frame-Options, Permissions-Policy), sanificazione XSS e CMP Cookie GDPR conforme.

---

## 💻 Come Eseguire in Locale

```bash
# Clona il repository
git clone https://github.com/Cybsquatch/FileOmniTool.git
cd FileOmniTool/web

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri `http://localhost:3000` nel browser.

Per compilare la versione di produzione ad alte prestazioni:
```bash
npm run build
npm run start
```

---

## 👤 Autore & Licenza

- **Autore:** [Cybsquatch](https://github.com/Cybsquatch)
- **Licenza:** Rilasciato sotto licenza [MIT](LICENSE).
