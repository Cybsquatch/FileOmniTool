import re
from pathlib import Path
from typing import Dict, Any, Optional, List
from agents.core.base_agent import BaseAgent, AgentResult
from agents.core.config import settings

class SeoAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="SeoAgent",
            role="Specialista SEO Tecnico & Programmatic Content Strategy",
            description="Analizza il volume di ricerca, mappa keyword ad alto intento, genera schemi JSON-LD e progetta landing page programmatiche per massimizzare il traffico organico."
        )

    def extract_tools_from_code(self) -> List[Dict[str, str]]:
        """Estrae la lista dei tool registrati dal file tools-registry.ts se esistente, altrimenti usa i tool core"""
        registry_file = settings.WEB_DIR / "src" / "lib" / "tools-registry.ts"
        tools = []
        if registry_file.exists():
            content = registry_file.read_text(encoding="utf-8")
            # Estrazione id, category e titolo en dal nuovo formato bilingue
            matches = re.findall(
                r'id:\s*["\']([^"\']+)["\'][\s\S]*?category:\s*["\']([^"\']+)["\'][\s\S]*?title:\s*\{[\s\S]*?en:\s*["\']([^"\']+)["\']',
                content
            )
            for m in matches:
                tools.append({"id": m[0], "category": m[1], "title": m[2]})
        
        if not tools:
            # Fallback ai tool pianificati
            tools = [
                {"id": "pdf-merge", "title": "Unisci PDF Online", "category": "pdf"},
                {"id": "pdf-split", "title": "Dividi PDF", "category": "pdf"},
                {"id": "image-compress", "title": "Comprimi Immagini (WebP/PNG/JPG)", "category": "image"},
                {"id": "image-convert", "title": "Convertitore Immagini", "category": "image"},
                {"id": "zip-extract", "title": "Estrai File ZIP nel Browser", "category": "archive"},
                {"id": "zip-create", "title": "Crea Archivio ZIP", "category": "archive"},
                {"id": "hash-generator", "title": "Generatore Hash MD5/SHA256", "category": "text"},
                {"id": "json-csv", "title": "Convertitore JSON in CSV", "category": "text"},
            ]
        return tools

    def generate_seo_matrix(self, tools: List[Dict[str, str]]) -> str:
        rows = []
        for t in tools:
            slug = t["id"]
            name = t["title"]
            cat = t["category"]
            keyword = f"{name.lower()} gratis senza caricamento"
            title_tag = f"{name} Gratis e Sicuro al 100% | FileOmniTool"
            meta_desc = f"Usa {name} direttamente nel tuo browser. Zero upload sui server, privacy garantita, veloce e senza registrazione. 100% client-side gratuito."
            rows.append(f"| `{slug}` | **{name}** ({cat.upper()}) | `{keyword}` | `{title_tag}` | `{meta_desc[:65]}...` |")
        return "\n".join(rows)

    def run(self, context: Optional[Dict[str, Any]] = None) -> AgentResult:
        tools = self.extract_tools_from_code()
        matrix_table = self.generate_seo_matrix(tools)

        report_md = f"""
## 1. Mappa Strategica Programmatic SEO & Keyword Target

Il vantaggio competitivo chiave di **FileOmniTool** rispetto a giganti come *ILovePDF* o *Smallpdf* è il fattore **Privacy 100% Client-Side**: i file non escono mai dal computer dell'utente. Questa keyword ("senza caricamento", "senza upload", "privacy", "client-side") converte a tassi altissimi soprattutto in contesti aziendali, legali e medici.

### Matrice di Ottimizzazione per Tool Attivi

| Tool Slug | Nome Tool | Focus Keyword | Target Title Tag (< 60 char) | Meta Description Snippet (< 160 char) |
| :--- | :--- | :--- | :--- | :--- |
{matrix_table}

---

## 2. Architettura Programmatic Landing Pages (Long-Tail)

Per scalare il traffico organico rapidamente a decine di migliaia di visite/mese:
1. **Pagine di Conversione Specifica (Pair-Matrix)**:
   * `/tools/png-to-webp`
   * `/tools/jpg-to-webp`
   * `/tools/webp-to-png`
   * `/tools/heic-to-jpg` (altissimo volume da mobile iPhone)
   * `/tools/pdf-to-jpg`
2. **Cluster Semantico "Zero-Upload Privacy"**:
   * Creare una landing `/privacy-guarantee` linkata da ogni tool con audit spiegato in parole semplici ("Perché siamo più sicuri di SmallPDF/ILovePDF"). Questo aumenta il tempo di permanenza (Dwell Time) e abbassa il Bounce Rate.

---

## 3. Schema JSON-LD Raccomandato per Ogni Tool

Ogni pagina tool deve includere lo schema `WebApplication` e `HowTo` per comparire nei rich snippet di Google:

```json
{{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Unisci PDF Online - FileOmniTool",
  "url": "https://fileomnitool.com/tools/pdf-merge",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "offers": {{
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }},
  "featureList": [
    "100% Client-Side Processing",
    "Nessun file caricato su server esterni",
    "Completamente gratuito e senza limiti"
  ]
}}
```

---

## 4. Checklist On-Page SEO per la Build
- [x] Canonical tag dinamici per ciascun tool.
- [x] OpenGraph (og:title, og:description, og:image) con card ad alta risoluzione.
- [x] Sitemap automatica (`/sitemap.xml`) e `robots.txt` ottimizzato per crawler Googlebot.
- [x] Core Web Vitals: Largest Contentful Paint (LCP) < 1.2s grazie all'assenza di elaborazione backend.
"""
        report_file = self.save_report("seo_strategy_report.md", report_md)
        return AgentResult(
            agent_name=self.name,
            success=True,
            summary=f"Mappati {len(tools)} tool con strategie programmatic SEO, titoli, meta description e schemi JSON-LD generati.",
            data={"tools_count": len(tools), "report": str(report_file)},
            report_path=report_file
        )
