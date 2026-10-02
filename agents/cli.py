import sys
import argparse
from pathlib import Path

# Assicura che la root del progetto sia nel PYTHONPATH
PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from agents.core.orchestrator import Orchestrator
from agents.core.config import settings

console = Console()

def print_banner():
    console.print(Panel.fit(
        "[bold cyan]FileOmniTool[/bold cyan] - [bold green]Multi-Agent Autonomous Engine[/bold green]\n"
        "[dim]SEO • Traffic Growth • Tool Discovery • Ad Monetization • Web QA • Cybersecurity[/dim]",
        border_style="cyan"
    ))

def cmd_list(orchestrator: Orchestrator):
    table = Table(title="Agenti Specializzati Disponibili", show_header=True, header_style="bold magenta")
    table.add_column("Key", style="bold yellow", width=15)
    table.add_column("Nome Agente", style="cyan", width=22)
    table.add_column("Ruolo", style="green")

    for key, agent in orchestrator.agents.items():
        table.add_row(key, agent.name, agent.role)

    console.print(table)

def cmd_run_all(orchestrator: Orchestrator):
    console.print("[bold yellow]Avvio del ciclo completo per tutti i 6 agenti...[/bold yellow]\n")
    results = orchestrator.run_all()

    table = Table(title="Risultati Esecuzione Team Agenti", show_header=True, header_style="bold green")
    table.add_column("Agente", style="cyan")
    table.add_column("Stato", style="bold")
    table.add_column("Sintesi Risultato", style="white")
    table.add_column("File Report", style="dim")

    for key, res in results.items():
        status = "[green]Completato[/green]" if res.success else "[red]Attenzione[/red]"
        report_name = res.report_path.name if res.report_path else "N/A"
        table.add_row(res.agent_name, status, res.summary, report_name)

    console.print(table)
    console.print(f"\n[bold green][OK] Master Dashboard salvata in:[/bold green] {settings.REPORTS_DIR / 'MASTER_DASHBOARD.md'}")

def cmd_run_one(orchestrator: Orchestrator, agent_key: str):
    if agent_key not in orchestrator.agents:
        console.print(f"[bold red]Errore:[/bold red] Agente '{agent_key}' non trovato.")
        cmd_list(orchestrator)
        return

    console.print(f"[yellow]Esecuzione di [bold]{agent_key}[/bold]...[/yellow]")
    res = orchestrator.run_agent(agent_key)
    if res.success:
        console.print(f"[bold green][OK] {res.agent_name} completato con successo![/bold green]")
    else:
        console.print(f"[bold red][!] {res.agent_name} ha riscontrato delle anomalie.[/bold red]")
    console.print(f"[cyan]Sintesi:[/cyan] {res.summary}")
    if res.report_path:
        console.print(f"[dim]Report dettagliato:[/dim] {res.report_path}")

def cmd_dashboard():
    dashboard_file = settings.REPORTS_DIR / "MASTER_DASHBOARD.md"
    if dashboard_file.exists():
        console.print(dashboard_file.read_text(encoding="utf-8"))
    else:
        console.print("[yellow]Nessun dashboard presente. Esegui prima `python agents/cli.py run-all`[/yellow]")

def main():
    print_banner()
    orchestrator = Orchestrator()

    parser = argparse.ArgumentParser(description="CLI del Sistema Multi-Agente di FileOmniTool")
    subparsers = parser.add_subparsers(dest="command", help="Comando da eseguire")

    subparsers.add_parser("list", help="Elenca tutti gli agenti e i loro ruoli")
    subparsers.add_parser("run-all", help="Esegue tutti gli agenti e compila la Master Dashboard")
    
    run_parser = subparsers.add_parser("run", help="Esegue un singolo agente specificato")
    run_parser.add_argument("agent", choices=list(orchestrator.agents.keys()), help="Chiave dell'agente")

    subparsers.add_parser("dashboard", help="Mostra l'ultimo Master Dashboard generato")

    args = parser.parse_args()

    if args.command == "list":
        cmd_list(orchestrator)
    elif args.command == "run-all":
        cmd_run_all(orchestrator)
    elif args.command == "run":
        cmd_run_one(orchestrator, args.agent)
    elif args.command == "dashboard":
        cmd_dashboard()
    else:
        # Default se nessun comando viene fornito: mostra la lista e suggerimento
        cmd_list(orchestrator)
        console.print("\n[dim]Usa: python agents/cli.py run-all per avviare l'analisi completa.[/dim]")

if __name__ == "__main__":
    main()
