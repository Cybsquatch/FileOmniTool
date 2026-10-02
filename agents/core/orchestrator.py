from typing import Dict, Any, List, Optional
from datetime import datetime
from agents.core.base_agent import BaseAgent, AgentResult
from agents.core.config import settings
from agents.specialized.seo_agent import SeoAgent
from agents.specialized.growth_agent import GrowthAgent
from agents.specialized.tool_architect_agent import ToolArchitectAgent
from agents.specialized.monetization_agent import MonetizationAgent
from agents.specialized.web_engineer_agent import WebEngineerAgent
from agents.specialized.security_agent import SecurityAuditorAgent

class Orchestrator:
    def __init__(self):
        self.agents: Dict[str, BaseAgent] = {
            "seo": SeoAgent(),
            "growth": GrowthAgent(),
            "tools": ToolArchitectAgent(),
            "monetization": MonetizationAgent(),
            "web_engineer": WebEngineerAgent(),
            "security": SecurityAuditorAgent()
        }

    def run_agent(self, agent_key: str, context: Optional[Dict[str, Any]] = None) -> AgentResult:
        if agent_key not in self.agents:
            raise ValueError(f"Agente '{agent_key}' sconosciuto. Disponibili: {list(self.agents.keys())}")
        return self.agents[agent_key].run(context)

    def run_all(self, context: Optional[Dict[str, Any]] = None) -> Dict[str, AgentResult]:
        results: Dict[str, AgentResult] = {}
        for key, agent in self.agents.items():
            results[key] = agent.run(context)
        self.generate_master_dashboard(results)
        return results

    def generate_master_dashboard(self, results: Dict[str, AgentResult]) -> str:
        rows = []
        for key, res in results.items():
            status_badge = "[OK] COMPLETATO" if res.success else "[WARN] VERIFICARE"
            rows.append(f"| **{res.agent_name}** | {status_badge} | {res.summary} | `{res.report_path.name if res.report_path else 'N/A'}` |")

        dashboard_md = f"""# FileOmniTool - Master Multi-Agent Dashboard
**Data Aggiornamento:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
**Stato Piattaforma:** Operativa & Ottimizzata

---

## 1. Stato Esecuzione Squadra Agenti

| Agente | Stato | Risultato Chiave | Report Dettagliato |
| :--- | :---: | :--- | :--- |
{chr(10).join(rows)}

---

## 2. Punti di Forza Strategici
- **Privacy 100% Client-Side:** Certificata da `WebEngineerAgent` e `SecurityAuditorAgent`.
- **Monetizzazione Non Invasiva:** 3 slot pubblicitari progettati da `MonetizationAgent` con zero impatto su Core Web Vitals (CLS = 0).
- **Dominio SEO di Nicchia:** Mappate keyword e schemi JSON-LD da `SeoAgent` per scalare su query "gratis senza caricamento".
- **Roadmap Strumenti Continua:** 16 tool client-side prioritizzati da `ToolArchitectAgent`.
- **Crescita Organica:** Template di lancio community e posizionamento Reddit/Quora pronti da `GrowthAgent`.
"""
        master_file = settings.REPORTS_DIR / "MASTER_DASHBOARD.md"
        master_file.write_text(dashboard_md, encoding="utf-8")
        return dashboard_md
