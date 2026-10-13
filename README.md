# FileOmniTool 🛠️🔒
🌐 Live Web App: [FileOmniTool.com](https://www.fileomnitool.com) - 100% In-Browser & Private File Tools.
Piattaforma web moderna, reattiva ed elegante per la manipolazione di file **100% Client-Side** (zero upload su server, totale rispetto della privacy), progettata per la monetizzazione pubblicitaria e governata da un **motore multi-agente autonomo** in Python.

---

## 🚀 Caratteristiche Principali

1. **Elaborazione 100% nel Browser:** I tuoi file non lasciano mai il tuo computer. L'elaborazione sfrutta la potenza della CPU/GPU locale tramite WebAssembly, HTML5 Canvas e Web Crypto API.
2. **Suite di Strumenti Inclusi:**
   - **PDF:** Unisci PDF (`pdf-merge`), Dividi PDF ed estrai pagine (`pdf-split`).
   - **Immagini:** Convertitore formati PNG, JPG, WebP (`image-convert`), Compressore con slider qualità (`image-compress`).
   - **Archivi:** Crea file ZIP (`zip-create`), Estrai file ZIP con protezione anti-ZipBomb (`zip-extract`).
   - **Dati & Crittografia:** Generatore Hash crittografici SHA-256/512 (`hash-generator`), Convertitore bidirezionale JSON $\leftrightarrow$ CSV (`json-csv`).
3. **Monetizzazione AdSense-Ready (Zero CLS):** Slot pubblicitari posizionati strategicamente (Leaderboard, Post-action card accanto al pulsante download, Sticky footer).
4. **Squadra di 6 Agenti Autonomi in Python:**
   - `SeoAgent`: Programmatic SEO, metadati, e schemi JSON-LD (`WebApplication` e `FAQPage`).
   - `GrowthAgent`: Analisi competitor (ILovePDF, TinyPNG), strategie Reddit/Quora e playbook di traffico.
   - `ToolArchitectAgent`: Roadmap tecnica per l'aggiunta di nuovi strumenti browser-based.
   - `MonetizationAgent`: Stime di revenue ($3.50 - $6.20 RPM) e checklist AdSense.
   - `WebEngineerAgent`: QA, test di responsività mobile-first e certificazione zero-server upload.
   - `SecurityAuditorAgent`: Audit DOM-XSS, sanificazione nomi file, quote di memoria e Content Security Policy.

---

## 💻 Come Avviare

### 1. Avviare la Piattaforma Web
```bash
cd web
npm run dev
```
Apri il browser su `http://localhost:3000`.

Per compilare la versione di produzione:
```bash
cd web
npm run build
npm start
```

### 2. Eseguire il Team Multi-Agente
Dalla cartella principale:
```bash
# Esegui tutti gli agenti e compila la Master Dashboard
python agents/cli.py run-all

# Esegui un singolo agente specializzato
python agents/cli.py run security
python agents/cli.py run seo
python agents/cli.py run growth
python agents/cli.py run web_engineer

# Consulta l'ultima Master Dashboard
python agents/cli.py dashboard
```

---

## 📁 Struttura del Progetto

```text
OmniTool/
├── web/                     # Web Platform (Next.js 16, Tailwind CSS, TypeScript)
│   ├── src/app/             # Routing, Home, /privacy e /tools/[slug]
│   ├── src/components/      # UI components, Dropzone, Ads, Tool engines
│   └── src/lib/             # Security Guard, Client-engines (PDF, Immagini, ZIP, Testo)
│
├── agents/                  # Motore Multi-Agente in Python 3.12
│   ├── core/                # Base agent, Config, Orchestrator
│   ├── specialized/         # I 6 Agenti (SEO, Growth, Tools, Monetization, Web QA, Security)
│   ├── reports/             # Report dettagliati generati dagli agenti (.md)
│   ├── cli.py               # Interfaccia a riga di comando Rich
│   └── requirements.txt     # Dipendenze Python
│
└── README.md
```
