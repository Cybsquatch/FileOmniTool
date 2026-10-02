from typing import Dict, Any, Optional
from agents.core.base_agent import BaseAgent, AgentResult
from agents.core.config import settings

class MonetizationAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="MonetizationAgent",
            role="Ottimizzatore Ad Revenue & Monetizzazione Pubblicitaria",
            description="Massimizza il fatturato pubblicitario (AdSense, Adsterra, Ezoic) posizionando annunci ad alto CTR senza degradare l'esperienza utente e preservando il punteggio Core Web Vitals (zero CLS)."
        )

    def calculate_revenue_projections(self) -> Dict[str, Any]:
        """Calcola proiezioni di ricavi pubblicitari mensili su diversi scaglioni di traffico"""
        tiers = [
            {"name": "Lancio", "visitors_per_month": 10000, "pageviews_per_visit": 2.2},
            {"name": "Crescita", "visitors_per_month": 50000, "pageviews_per_visit": 2.5},
            {"name": "Scalabilità", "visitors_per_month": 200000, "pageviews_per_visit": 2.8},
            {"name": "Leader di Nicchia", "visitors_per_month": 1000000, "pageviews_per_visit": 3.0},
        ]
        results = []
        for t in tiers:
            pv = int(t["visitors_per_month"] * t["pageviews_per_visit"])
            monthly_rev_low = round((pv / 1000) * settings.DEFAULT_ESTIMATED_RPM, 2)
            monthly_rev_high = round((pv / 1000) * settings.HIGH_TIER_RPM, 2)
            results.append({
                "tier": t["name"],
                "visitors": f"{t['visitors_per_month']:,}",
                "pageviews": f"{pv:,}",
                "revenue_usd": f"${monthly_rev_low:,.2f} - ${monthly_rev_high:,.2f}"
            })
        return {"tiers": results}

    def run(self, context: Optional[Dict[str, Any]] = None) -> AgentResult:
        projections = self.calculate_revenue_projections()
        tier_rows = "\n".join([
            f"| **{r['tier']}** | {r['visitors']} | {r['pageviews']} | **{r['revenue_usd']}** |"
            for r in projections["tiers"]
        ])

        report_md = f"""
## 1. Proiezioni di Entrate Pubblicitarie (Stima RPM $3.50 - $6.20)

I siti di utility e conversione file godono di un tempo di permanenza attivo elevato e di un'intenzione di ricerca mirata, con RPM (Revenue Per Mille pageviews) tra i più alti nel settore tool:

| Livello Traffico | Visitatori Unici / Mese | Visualizzazioni Pagina / Mese | Guadagno Stimato / Mese |
| :--- | :--- | :--- | :--- |
{tier_rows}

---

## 2. Architettura Posizionamento Annunci (High Viewability & Zero CLS)

Google penalizza pesantemente i siti in cui gli annunci provocano scatti improvvisi del layout (*Cumulative Layout Shift - CLS*). La nostra architettura adotta contenitori a dimensione fissa riservata (*min-height* fisso):

### I 3 Slot Pubblicitari Strategici
1. **Slot Top Leaderboard (`728x90` Desktop, `320x50` Mobile)**:
   * Posizionato immediatamente sotto la navbar principale, sopra il blocco di upload.
   * Viewability garantita al 95% al primo caricamento pagina.
2. **Slot "Post-Conversion Action Card" (Native Display `336x280` o `300x250`)**:
   * Posizionato all'interno della schermata del tool, proprio accanto o sotto il pulsante *"Download File Pronto"*.
   * **Massimo CTR naturale**: l'utente attende il completamento della conversione ed è focalizzato esattamente in quell'area visiva.
3. **Slot Sticky Footer Banner (`728x90` / `320x50`)**:
   * Rimane ancorato in fondo allo schermo in modo elegante e minimizzabile, garantendo continue impression durante tutta la sessione di utilizzo.

---

## 3. Checklist Approvazione Google AdSense al Primo Invio
- [x] Pagine legali essenziali obbligatorie: `/privacy-policy`, `/terms-of-service`, `/about`, `/contact`.
- [x] Banner informativo Cookie & Consenso GDPR (CMP compatibile IAB TCF 2.2).
- [x] Contenuto editoriale utile: ogni tool include una guida passo-passo "Come funziona", FAQ correlate e specifiche tecniche per evitare il rifiuto *"Contenuto di scarso valore"*.
- [x] Navigazione chiara e zero link rotti.
"""
        report_file = self.save_report("monetization_strategy.md", report_md)
        return AgentResult(
            agent_name=self.name,
            success=True,
            summary="Strategia di monetizzazione e proiezioni di ricavo generate con piano posizionamento ads e checklist AdSense.",
            data={"projections": projections, "report": str(report_file)},
            report_path=report_file
        )
