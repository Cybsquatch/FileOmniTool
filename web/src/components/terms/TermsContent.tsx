"use client";

import React from "react";
import Link from "next/link";
import { FileText, ShieldAlert, ArrowLeft, Scale, CheckCircle2, AlertTriangle, Mail } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n/context";

interface TermsCopy {
  backBtn: string;
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sec1Title: string;
  sec1Text: string;
  sec2Title: string;
  sec2Text: string;
  sec2Bullet1: string;
  sec2Bullet2: string;
  sec3Title: string;
  sec3Text: string;
  sec4Title: string;
  sec4Text: string;
  sec5Title: string;
  sec5Text: string;
  sec6Title: string;
  sec6Text: string;
}

const TERMS_TEXTS: Record<Language, TermsCopy> = {
  it: {
    backBtn: "Torna a tutti gli strumenti",
    badge: "Termini Legali & Condizioni d'Uso",
    title: "Termini e Condizioni di Servizio",
    subtitle: "Regolamento sull'utilizzo della piattaforma, esclusione di garanzie e responsabilità",
    lastUpdated: "Ultimo aggiornamento: Ottobre 2026",
    sec1Title: "1. Natura del Servizio ed Elaborazione Locale",
    sec1Text: "FileOmniTool fornisce gratuitamente una suite di utility per file (PDF, immagini, audio, archivi, testo e codice). Tutte le elaborazioni avvengono esclusivamente all'interno della memoria RAM del browser dell'utente (client-side) mediante WebAssembly, HTML5 Canvas e Web API. Nessun file caricato dall'utente viene memorizzato, trasmesso o conservato su server remoti di FileOmniTool.",
    sec2Title: "2. Esclusione di Garanzie e Limitazione di Responsabilità (\"As Is\")",
    sec2Text: "Il servizio viene fornito \"così com'è\" (AS IS) e \"secondo disponibilità\", a titolo completamente gratuito e senza alcuna garanzia, esplicita o implicita.",
    sec2Bullet1: "FileOmniTool non garantisce che i risultati delle conversioni siano esenti da errori o che il servizio sia ininterrotto. L'utente è tenuto a conservare sempre una copia di backup dei propri file originali prima di eseguire conversioni o modifiche.",
    sec2Bullet2: "Nei limiti massimi consentiti dalla legge applicabile, FileOmniTool e i suoi sviluppatori non saranno responsabili per eventuali danni diretti, indiretti, incidentali o consequenziali (inclusa la perdita di dati, mancati guadagni o corruzione di file) derivanti dall'uso o dall'impossibilità di usare il servizio.",
    sec3Title: "3. Proprietà Intellettuale sui File Elaborati",
    sec3Text: "L'utente rimane l'unico ed esclusivo proprietario di tutti i diritti di proprietà intellettuale e copyright sui file caricati ed elaborati. Poiché i file non transitano su alcun server, FileOmniTool non acquisisce alcun diritto, licenza o accesso ai documenti degli utenti.",
    sec4Title: "4. Uso Consentito e Divieti",
    sec4Text: "È fatto espresso divieto di utilizzare la piattaforma per tentare attacchi informatici, distribuire payload malevoli, sovraccaricare deliberatamente le risorse altrui o tentare di eludere le misure di sicurezza del sito. Gli utenti si impegnano a utilizzare gli strumenti nel pieno rispetto delle leggi vigenti.",
    sec5Title: "5. Pubblicità e Collegamenti a Terze Parti",
    sec5Text: "Al fine di sostenere i costi di infrastruttura e mantenere l'accesso 100% gratuito, il sito ospita annunci pubblicitari (Google AdSense, Adsterra). Le inserzioni sono gestite da reti terze indipendenti e regolamentate dalle rispettive informative sulla privacy e dai consensi cookie espressi dall'utente.",
    sec6Title: "6. Legge Applicabile, Modifiche e Contatti",
    sec6Text: "I presenti termini sono regolati dalla normativa vigente nell'Unione Europea e in Italia. FileOmniTool si riserva il diritto di aggiornare i termini in qualsiasi momento pubblicando la versione aggiornata su questa pagina. Per qualsiasi chiarimento o richiesta legale è possibile contattare l'amministrazione all'indirizzo email: contact@fileomnitool.com.",
  },
  en: {
    backBtn: "Back to all tools",
    badge: "Legal Terms & Conditions",
    title: "Terms of Service",
    subtitle: "Terms of use, disclaimer of warranties, and limitation of liability",
    lastUpdated: "Last updated: October 2026",
    sec1Title: "1. Nature of the Service and Client-Side Execution",
    sec1Text: "FileOmniTool provides a free suite of file utilities (PDF, images, audio, archives, text, and code). All processing occurs strictly inside your browser's local RAM memory (client-side) via WebAssembly, HTML5 Canvas, and Web APIs. Zero user files are stored, transmitted, or hosted on remote FileOmniTool servers.",
    sec2Title: "2. Disclaimer of Warranties and Limitation of Liability (\"As Is\")",
    sec2Text: "The service is provided strictly \"AS IS\" and \"AS AVAILABLE\", free of charge, without any warranties of any kind, whether express or implied.",
    sec2Bullet1: "FileOmniTool does not warrant that conversions will be error-free or uninterrupted. Users are solely responsible for maintaining backup copies of their original documents before converting or editing.",
    sec2Bullet2: "To the maximum extent permitted by applicable law, FileOmniTool and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages (including data loss, corrupted files, or lost profits) arising from the use or inability to use the service.",
    sec3Title: "3. Intellectual Property and User Content",
    sec3Text: "Users retain full and exclusive ownership of all copyright and intellectual property rights in their uploaded files. Because files never touch our servers, FileOmniTool claims zero rights or access to user data.",
    sec4Title: "4. Prohibited Uses",
    sec4Text: "You agree not to use the service for unlawful purposes, to distribute malware, to perform denial-of-service attacks, or to abuse automated scraping. Compliance with local laws is required at all times.",
    sec5Title: "5. Advertising and Third-Party Links",
    sec5Text: "To cover ongoing hosting costs and keep all tools 100% free, non-intrusive advertisements (Google AdSense, Adsterra) may be displayed in accordance with user cookie consent preferences.",
    sec6Title: "6. Governing Law, Updates, and Contact",
    sec6Text: "These terms are governed by the laws of the European Union. We reserve the right to revise these terms at any time. For legal inquiries, contact: contact@fileomnitool.com.",
  },
  es: {
    backBtn: "Volver a todas las herramientas",
    badge: "Términos y Condiciones Legales",
    title: "Términos de Servicio",
    subtitle: "Condiciones de uso, exención de garantías y limitación de responsabilidad",
    lastUpdated: "Última actualización: Octubre 2026",
    sec1Title: "1. Naturaleza del Servicio y Procesamiento Local",
    sec1Text: "FileOmniTool ofrece herramientas gratuitas para archivos. Todo el procesamiento se realiza en la memoria local del navegador mediante WebAssembly y Canvas sin subir archivos a servidores.",
    sec2Title: "2. Exención de Garantías (\"Tal Cual\")",
    sec2Text: "El servicio se suministra \"tal cual\" sin garantías de ningún tipo.",
    sec2Bullet1: "El usuario debe mantener copias de seguridad de sus archivos antes de procesarlos.",
    sec2Bullet2: "No asumimos responsabilidad por pérdidas de datos o daños derivados del uso del servicio.",
    sec3Title: "3. Propiedad Intelectual",
    sec3Text: "Usted conserva el 100% de los derechos sobre sus documentos.",
    sec4Title: "4. Usos Prohibidos",
    sec4Text: "Queda prohibido cualquier uso ilícito o intento de vulnerar la seguridad del sitio.",
    sec5Title: "5. Publicidad",
    sec5Text: "El sitio se financia con publicidad no invasiva sujeta al consentimiento del usuario.",
    sec6Title: "6. Ley Aplicable y Contacto",
    sec6Text: "Regulado por la legislación de la UE. Contacto: contact@fileomnitool.com.",
  },
  fr: {
    backBtn: "Retour aux outils",
    badge: "Conditions Générales d'Utilisation",
    title: "Conditions de Service",
    subtitle: "Règles d'utilisation, exclusion de garanties et responsabilité",
    lastUpdated: "Dernière mise à jour : Octobre 2026",
    sec1Title: "1. Nature du Service et Exécution Locale",
    sec1Text: "FileOmniTool fournit des outils gratuits pour fichiers. Tous les traitements s'exécutent en mémoire locale via WebAssembly sans aucun téléversement.",
    sec2Title: "2. Exclusion de Garanties",
    sec2Text: "Le service est fourni \"en l'état\" sans garantie d'aucune sorte.",
    sec2Bullet1: "Conservez toujours une sauvegarde de vos fichiers originaux.",
    sec2Bullet2: "Aucune responsabilité n'est engagée en cas de perte de données.",
    sec3Title: "3. Propriété Intellectuelle",
    sec3Text: "Vous conservez l'intégralité de vos droits sur vos fichiers.",
    sec4Title: "4. Utilisations Interdites",
    sec4Text: "Tout usage malveillant ou tentative de piratage est strictement interdit.",
    sec5Title: "5. Financement Publicitaire",
    sec5Text: "Le site est financé par des annonces conformes au consentement des utilisateurs.",
    sec6Title: "6. Droit Applicable et Contact",
    sec6Text: "Soumis au droit européen. Contact : contact@fileomnitool.com.",
  },
  de: {
    backBtn: "Zurück zu allen Werkzeugen",
    badge: "Allgemeine Geschäftsbedingungen",
    title: "Nutzungsbedingungen",
    subtitle: "Regeln zur Nutzung, Gewährleistungsausschluss und Haftungsbeschränkung",
    lastUpdated: "Stand: Oktober 2026",
    sec1Title: "1. Art des Dienstes und lokale Verarbeitung",
    sec1Text: "FileOmniTool bietet kostenlose Dateidienste an. Alle Vorgänge laufen lokal im Browser ab. Keine Dateien werden auf Server hochgeladen.",
    sec2Title: "2. Gewährleistungsausschluss",
    sec2Text: "Der Dienst wird ohne Mängelgewähr zur Verfügung gestellt.",
    sec2Bullet1: "Nutzer müssen Sicherungskopien ihrer Originaldateien anlegen.",
    sec2Bullet2: "Keine Haftung für Datenverlust oder Folgeschäden.",
    sec3Title: "3. Geistiges Eigentum",
    sec3Text: "Sie bleiben alleiniger Inhaber aller Rechte an Ihren Dateien.",
    sec4Title: "4. Unzulässige Nutzung",
    sec4Text: "Rechtswidrige Nutzung und Angriffe auf die Infrastruktur sind untersagt.",
    sec5Title: "5. Werbefinanzierung",
    sec5Text: "Finanzierung erfolgt durch unaufdringliche, datenschutzkonforme Anzeigen.",
    sec6Title: "6. Anwendbares Recht und Kontakt",
    sec6Text: "Geltendes Recht der EU. Kontakt: contact@fileomnitool.com.",
  },
  pt: {
    backBtn: "Voltar para as ferramentas",
    badge: "Termos e Condições de Uso",
    title: "Termos de Serviço",
    subtitle: "Condições de utilização, isenção de garantias e limitação de responsabilidade",
    lastUpdated: "Última atualização: Outubro 2026",
    sec1Title: "1. Natureza do Serviço e Execução Local",
    sec1Text: "O FileOmniTool oferece utilitários gratuitos executados localmente no navegador via WebAssembly sem envio de arquivos para servidores.",
    sec2Title: "2. Isenção de Garantias",
    sec2Text: "O serviço é fornecido no estado em que se encontra.",
    sec2Bullet1: "Mantenha sempre cópias de segurança dos seus arquivos originais.",
    sec2Bullet2: "Não nos responsabilizamos por perdas de dados decorrentes do uso.",
    sec3Title: "3. Propriedade Intelectual",
    sec3Text: "Você retém a titularidade total sobre os seus arquivos.",
    sec4Title: "4. Usos Proibidos",
    sec4Text: "É vedado qualquer uso ilícito ou tentativa de violar a segurança da plataforma.",
    sec5Title: "5. Publicidade",
    sec5Text: "Financiado por publicidade não invasiva sujeita a consentimento.",
    sec6Title: "6. Lei Aplicável e Contato",
    sec6Text: "Regido pela legislação da União Europeia. Contato: contact@fileomnitool.com.",
  },
};

export const TermsContent: React.FC = () => {
  const { language } = useLanguage();
  const t = TERMS_TEXTS[language] || TERMS_TEXTS.en;

  return (
    <main className="flex-1 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-emerald-600 dark:text-zinc-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{t.backBtn}</span>
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            <Scale className="h-7 w-7" />
          </div>
          <div>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              {t.badge}
            </span>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {t.title}
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {t.subtitle} • {t.lastUpdated}
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {/* Sezione 1 */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              {t.sec1Title}
            </h2>
            <p className="mt-3">{t.sec1Text}</p>
          </section>

          {/* Sezione 2 - Disclaimer As-Is */}
          <section className="rounded-2xl border border-amber-200/80 bg-amber-50/30 p-6 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/20">
            <h2 className="flex items-center gap-2 text-base font-bold text-amber-900 dark:text-amber-300">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              {t.sec2Title}
            </h2>
            <p className="mt-3 text-zinc-800 dark:text-zinc-200">{t.sec2Text}</p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
              <li>{t.sec2Bullet1}</li>
              <li>{t.sec2Bullet2}</li>
            </ul>
          </section>

          {/* Sezione 3 - Proprietà Intellettuale */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <FileText className="h-5 w-5 text-teal-600" />
              {t.sec3Title}
            </h2>
            <p className="mt-3">{t.sec3Text}</p>
          </section>

          {/* Sezione 4 - Usi vietati */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <ShieldAlert className="h-5 w-5 text-red-600" />
              {t.sec4Title}
            </h2>
            <p className="mt-3">{t.sec4Text}</p>
          </section>

          {/* Sezione 5 - Pubblicità */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              {t.sec5Title}
            </h2>
            <p className="mt-3">{t.sec5Text}</p>
          </section>

          {/* Sezione 6 - Legge e Contatti */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <Mail className="h-5 w-5 text-blue-600" />
              {t.sec6Title}
            </h2>
            <p className="mt-3">{t.sec6Text}</p>
          </section>

        </div>
      </div>
    </main>
  );
};
