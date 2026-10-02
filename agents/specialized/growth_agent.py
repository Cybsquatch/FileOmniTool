from typing import Dict, Any, Optional
from agents.core.base_agent import BaseAgent, AgentResult
from agents.core.config import settings

class GrowthAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="GrowthAgent",
            role="Growth Hacker & Traffic Intelligence Strategist",
            description="Trova canali di traffico ad alta conversione, analizza i competitor (ILovePDF, TinyPNG, CloudConvert) e struttura campagne organiche su Reddit, Quora e social per generare visite e massimizzare impression pubblicitarie."
        )

    def run(self, context: Optional[Dict[str, Any]] = None) -> AgentResult:
        report_md = """
## 1. Analisi Competitor & Angolo Differenziante

I principali competitor dominano le query ad altissimo volume ma presentano un **punto debole critico** che FileOmniTool sfrutta per posizionarsi:

| Competitor | Modello di Business | Punto Debole Principale | Angolo d'Attacco per FileOmniTool |
| :--- | :--- | :--- | :--- |
| **ILovePDF** | Freemium + Server Upload | Carica i file sui propri server (problema GDPR/privacy per aziende e studi legali) | *"Zero-Upload Privacy: i tuoi documenti non toccano mai i nostri server"* |
| **TinyPNG** | Freemium (limite 20 img) | Limite file size e code di elaborazione su server | *"Elaborazione istantanea nel browser senza limiti o code"* |
| **CloudConvert** | 25 conversioni/giorno | Richiede account e registrazione per uso frequente | *"Nessun login, nessun limite giornaliero, 100% gratuito"* |

---

## 2. Playbook di Traffico Organico: Strategie a Costo Zero

### A. Community Hijacking (Reddit & Forum Tecnici)
I subreddit come `r/privacy`, `r/sysadmin`, `r/webdev` e `r/software` cercano costantemente strumenti che non inviino file riservati (contratti, buste paga, cartelle cliniche) a server terzi sconosciuti.

* **Format Post "Show HN" su Hacker News / Reddit**:
  > **Titolo:** *"I built FileOmniTool: A 100% client-side file toolkit that processes PDFs, Images, and ZIPs entirely in your browser with zero server uploads"*
  > **Contenuto:** Spiegare l'uso di WebAssembly e Web APIs, dimostrando che l'elaborazione avviene a livello locale. Include link a audit di rete e codice trasparente.
  > **Impatto stimato:** 15.000 - 40.000 visualizzazioni nelle prime 48 ore.

### B. Posizionamento Programmatico su Quora & StackOverflow
Mappare le 50 domande più cercate su Quora (es. *"How can I merge sensitive confidential PDFs without uploading them online?"*).
Fornire una risposta approfondita ed esaustiva sulla sicurezza informatica, citando **FileOmniTool** come soluzione gratuita e verificabile via DevTools.

---

## 3. Strategia di Viralià e Social Sharing

1. **"Privacy Score Checker" & Badge Condivisibile**:
   * Dopo aver unito o compresso un file, mostrare:
     `"Hai risparmiato 45MB di banda e 0 byte hanno lasciato il tuo dispositivo!"`
   * Pulsante di condivisione con 1 click su X (Twitter) o LinkedIn per professionisti.
2. **Widget Open-Source Embeddabile**:
   * Fornire un iframe gratuito o widget per webmaster e blogger che vogliono un convertitore sul loro sito, con backlink "Powered by FileOmniTool" per scalare l'Authority Domain (DR).

---

## 4. Roadmap di Acquisizione Utenti (Fasi di Crescita)

```text
Mese 1: Lancio Community (Reddit, Product Hunt, Hacker News) -> Target: 10.000 visite/mese
Mese 2-3: Indicizzazione Programmatic SEO (50+ landing pages) -> Target: 50.000 visite/mese
Mese 6+: Ranking organico su keyword competitive (PDF, WebP, Zip) -> Target: 250.000+ visite/mese
```
"""
        report_file = self.save_report("growth_traffic_plan.md", report_md)
        return AgentResult(
            agent_name=self.name,
            success=True,
            summary="Piano di crescita e traffico organico generato con analisi competitor e template di community launch.",
            data={"target_m1": "10k visits", "target_m6": "250k+ visits", "report": str(report_file)},
            report_path=report_file
        )
