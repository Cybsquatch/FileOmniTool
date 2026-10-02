import os
from pathlib import Path
from dotenv import load_dotenv

# Carica variabili d'ambiente da .env se presente
BASE_DIR = Path(__file__).resolve().parent.parent
PROJECT_ROOT = BASE_DIR.parent
WEB_DIR = PROJECT_ROOT / "web"
REPORTS_DIR = BASE_DIR / "reports"

load_dotenv(BASE_DIR / ".env")

REPORTS_DIR.mkdir(parents=True, exist_ok=True)

class Settings:
    PROJECT_NAME: str = "FileOmniTool"
    PROJECT_ROOT: Path = PROJECT_ROOT
    WEB_DIR: Path = WEB_DIR
    REPORTS_DIR: Path = REPORTS_DIR
    
    # API Keys per LLM (opzionali - l'engine include analisi avanzata euristica e offline)
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    
    # Parametri monetizzazione stimati
    DEFAULT_ESTIMATED_RPM: float = 3.50  # 3.50$ per 1000 pageviews (media tool utilities)
    HIGH_TIER_RPM: float = 6.20

settings = Settings()
