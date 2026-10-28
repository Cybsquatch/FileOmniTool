import type { Language } from "@/lib/i18n/context";

type PwaStrings = {
  installTitle: string;
  installDesc: string;
  installBtn: string;
  offlineBtn: string;
  offlineSaving: string;
  offlineReady: string;
  iosHint: string;
  dismiss: string;
  openTitle: string;
  openSubtitle: string;
  openPrivacy: string;
  openEmpty: string;
  openLoading: string;
  openOtherTools: string;
  openNoMatch: string;
  openBackHome: string;
};

export const PWA_STRINGS: Record<Language, PwaStrings> = {
  it: {
    installTitle: "Installa l'app · funziona offline",
    installDesc: "Apri PDF, immagini, audio e ZIP direttamente da FileOmniTool, anche senza connessione. I file restano sempre sul tuo dispositivo.",
    installBtn: "Installa l'app",
    offlineBtn: "Rendi disponibile offline",
    offlineSaving: "Salvataggio per l'uso offline…",
    offlineReady: "Pronto: gli strumenti funzionano anche offline.",
    iosHint: "Su iPhone/iPad: tocca Condividi → Aggiungi alla schermata Home.",
    dismiss: "Chiudi",
    openTitle: "Scegli lo strumento",
    openSubtitle: "Strumenti compatibili con il file che hai condiviso:",
    openPrivacy: "Il file è rimasto sul tuo dispositivo: nessun upload su server.",
    openEmpty: "Nessun file ricevuto. Condividi un file con FileOmniTool o aprilo con l'app installata.",
    openLoading: "Lettura del file in corso…",
    openOtherTools: "Altri strumenti per qualsiasi file",
    openNoMatch: "Nessuno strumento specifico per questo tipo di file.",
    openBackHome: "Vai a tutti gli strumenti",
  },
  en: {
    installTitle: "Install the app · works offline",
    installDesc: "Open PDFs, images, audio and ZIPs straight into FileOmniTool, even without a connection. Your files never leave your device.",
    installBtn: "Install app",
    offlineBtn: "Make available offline",
    offlineSaving: "Saving for offline use…",
    offlineReady: "Ready: the tools now work offline.",
    iosHint: "On iPhone/iPad: tap Share → Add to Home Screen.",
    dismiss: "Dismiss",
    openTitle: "Choose a tool",
    openSubtitle: "Tools that work with the file you shared:",
    openPrivacy: "Your file stayed on your device: nothing was uploaded.",
    openEmpty: "No file received. Share a file with FileOmniTool or open it with the installed app.",
    openLoading: "Reading your file…",
    openOtherTools: "Other tools for any file",
    openNoMatch: "No dedicated tool for this file type.",
    openBackHome: "Browse all tools",
  },
  es: {
    installTitle: "Instala la app · funciona sin conexión",
    installDesc: "Abre PDF, imágenes, audio y ZIP directamente en FileOmniTool, incluso sin conexión. Tus archivos nunca salen de tu dispositivo.",
    installBtn: "Instalar app",
    offlineBtn: "Disponible sin conexión",
    offlineSaving: "Guardando para uso sin conexión…",
    offlineReady: "Listo: las herramientas funcionan sin conexión.",
    iosHint: "En iPhone/iPad: toca Compartir → Añadir a pantalla de inicio.",
    dismiss: "Cerrar",
    openTitle: "Elige una herramienta",
    openSubtitle: "Herramientas compatibles con el archivo compartido:",
    openPrivacy: "Tu archivo se quedó en tu dispositivo: no se subió nada.",
    openEmpty: "No se recibió ningún archivo. Comparte un archivo con FileOmniTool o ábrelo con la app instalada.",
    openLoading: "Leyendo tu archivo…",
    openOtherTools: "Otras herramientas para cualquier archivo",
    openNoMatch: "No hay una herramienta específica para este tipo de archivo.",
    openBackHome: "Ver todas las herramientas",
  },
  fr: {
    installTitle: "Installer l'app · fonctionne hors ligne",
    installDesc: "Ouvrez PDF, images, audio et ZIP directement dans FileOmniTool, même sans connexion. Vos fichiers ne quittent jamais votre appareil.",
    installBtn: "Installer l'app",
    offlineBtn: "Rendre disponible hors ligne",
    offlineSaving: "Enregistrement pour l'usage hors ligne…",
    offlineReady: "Prêt : les outils fonctionnent hors ligne.",
    iosHint: "Sur iPhone/iPad : touchez Partager → Sur l'écran d'accueil.",
    dismiss: "Fermer",
    openTitle: "Choisissez un outil",
    openSubtitle: "Outils compatibles avec le fichier partagé :",
    openPrivacy: "Votre fichier est resté sur votre appareil : aucun envoi.",
    openEmpty: "Aucun fichier reçu. Partagez un fichier avec FileOmniTool ou ouvrez-le avec l'app installée.",
    openLoading: "Lecture de votre fichier…",
    openOtherTools: "Autres outils pour tout fichier",
    openNoMatch: "Aucun outil dédié à ce type de fichier.",
    openBackHome: "Voir tous les outils",
  },
  de: {
    installTitle: "App installieren · funktioniert offline",
    installDesc: "Öffne PDFs, Bilder, Audio und ZIPs direkt in FileOmniTool, auch ohne Verbindung. Deine Dateien verlassen nie dein Gerät.",
    installBtn: "App installieren",
    offlineBtn: "Offline verfügbar machen",
    offlineSaving: "Wird für die Offline-Nutzung gespeichert…",
    offlineReady: "Fertig: Die Tools funktionieren jetzt offline.",
    iosHint: "Auf iPhone/iPad: Teilen → Zum Home-Bildschirm.",
    dismiss: "Schließen",
    openTitle: "Tool auswählen",
    openSubtitle: "Passende Tools für die geteilte Datei:",
    openPrivacy: "Deine Datei ist auf deinem Gerät geblieben: kein Upload.",
    openEmpty: "Keine Datei empfangen. Teile eine Datei mit FileOmniTool oder öffne sie mit der installierten App.",
    openLoading: "Datei wird gelesen…",
    openOtherTools: "Weitere Tools für jede Datei",
    openNoMatch: "Kein spezielles Tool für diesen Dateityp.",
    openBackHome: "Alle Tools ansehen",
  },
  pt: {
    installTitle: "Instale o app · funciona offline",
    installDesc: "Abra PDFs, imagens, áudio e ZIPs direto no FileOmniTool, mesmo sem conexão. Seus arquivos nunca saem do seu dispositivo.",
    installBtn: "Instalar app",
    offlineBtn: "Disponibilizar offline",
    offlineSaving: "Salvando para uso offline…",
    offlineReady: "Pronto: as ferramentas funcionam offline.",
    iosHint: "No iPhone/iPad: toque em Compartilhar → Adicionar à Tela de Início.",
    dismiss: "Fechar",
    openTitle: "Escolha uma ferramenta",
    openSubtitle: "Ferramentas compatíveis com o arquivo compartilhado:",
    openPrivacy: "Seu arquivo ficou no seu dispositivo: nada foi enviado.",
    openEmpty: "Nenhum arquivo recebido. Compartilhe um arquivo com o FileOmniTool ou abra-o com o app instalado.",
    openLoading: "Lendo seu arquivo…",
    openOtherTools: "Outras ferramentas para qualquer arquivo",
    openNoMatch: "Nenhuma ferramenta específica para este tipo de arquivo.",
    openBackHome: "Ver todas as ferramentas",
  },
};
