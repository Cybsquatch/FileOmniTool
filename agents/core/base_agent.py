from abc import ABC, abstractmethod
from typing import Dict, Any, Optional
from datetime import datetime
from pathlib import Path
from agents.core.config import settings

class AgentResult:
    def __init__(self, agent_name: str, success: bool, summary: str, data: Optional[Dict[str, Any]] = None, report_path: Optional[Path] = None):
        self.agent_name = agent_name
        self.success = success
        self.summary = summary
        self.data = data or {}
        self.report_path = report_path
        self.timestamp = datetime.now()

    def to_dict(self) -> Dict[str, Any]:
        return {
            "agent": self.agent_name,
            "success": self.success,
            "summary": self.summary,
            "data": self.data,
            "report_path": str(self.report_path) if self.report_path else None,
            "timestamp": self.timestamp.isoformat()
        }

class BaseAgent(ABC):
    def __init__(self, name: str, role: str, description: str):
        self.name = name
        self.role = role
        self.description = description

    def save_report(self, filename: str, content: str) -> Path:
        """Salva il report in markdown nella cartella reports con intestazione standard"""
        target_path = settings.REPORTS_DIR / filename
        header = f"""# {self.name} - Report Ufficiale
**Ruolo:** {self.role}
**Data Generazione:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
**Progetto:** {settings.PROJECT_NAME}

---

"""
        target_path.write_text(header + content, encoding="utf-8")
        return target_path

    @abstractmethod
    def run(self, context: Optional[Dict[str, Any]] = None) -> AgentResult:
        """Esegue il ciclo di analisi o azione dell'agente"""
        pass
