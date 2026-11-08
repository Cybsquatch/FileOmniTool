"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Terminal, Cpu, CheckCircle2, ArrowLeft, UserCheck, Cookie, Sliders, Mail } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n/context";

interface PrivacyCopy {
  backBtn: string;
  badge: string;
  title: string;
  subtitle: string;
  sec1Title: string;
  sec1P1: string;
  sec1P2: string;
  sec2Title: string;
  sec2P1: string;
  sec2Step1: string;
  sec2Step2: string;
  sec2Step3: string;
  sec2Step4: string;
  sec3Title: string;
  sec3Bullet1: string;
  sec3Bullet2: string;
  sec3Bullet3: string;
  sec3Bullet4: string;
  sec4Title: string;
  sec4P1: string;
  sec5Title: string;
  sec5P1: string;
  sec5P2: string;
  sec5Rights: string;
  sec6Title: string;
  sec6P1: string;
  manageCookiesBtn: string;
}

const PRIVACY_TEXTS: Record<Language, PrivacyCopy> = {
  it: {
    backBtn: "Torna a tutti gli strumenti",
    badge: "Garanzia Privacy 100% In-Browser",
    title: "Informativa Privacy & Architettura Zero-Upload",
    subtitle: "Conformità al Regolamento Generale sulla Protezione dei Dati (GDPR UE 2016/679)",
    sec1Title: "1. Perché i tuoi file non lasciano mai il tuo dispositivo",
    sec1P1: "I tradizionali convertitori online funzionano caricando il tuo file sui loro server cloud, eseguendo la modifica e rimandandoti il link di download. Questo espone contratti riservati, dati personali o documenti aziendali a potenziali violazioni o data leak.",
    sec1P2: "FileOmniTool adotta una filosofia completamente diversa: ogni singola operazione (unione PDF, conversione immagini, compressione, estrazione ZIP) è scritta in JavaScript e WebAssembly per essere eseguita direttamente all'interno del motore del tuo browser. Zero byte vengono caricati su server remoti.",
    sec2Title: "2. Come verificare tu stesso con gli Strumenti per Sviluppatori",
    sec2P1: "Non fidarti solo delle nostre parole: puoi certificare l'assenza di upload in qualsiasi istante:",
    sec2Step1: "Premi il tasto F12 (oppure tasto destro -> Ispeziona) per aprire i DevTools del tuo browser.",
    sec2Step2: "Vai sulla scheda Network (Rete).",
    sec2Step3: "Trascina un file in uno dei nostri strumenti ed esegui la conversione o unione.",
    sec2Step4: "Noterai che nessuna chiamata di tipo POST o PUT con dati binari viene inviata ad alcun server. Il file viene gestito esclusivamente come Blob in memoria RAM locale.",
    sec3Title: "3. Motori Tecnologici Utilizzati",
    sec3Bullet1: "pdf-lib: Manipolazione e rendering dei PDF compilati direttamente in JavaScript client-side.",
    sec3Bullet2: "HTML5 Canvas API: Conversione formati raster (PNG, JPEG, WebP) con accelerazione hardware della tua GPU.",
    sec3Bullet3: "JSZip: Compressione e decompressione con algoritmo DEFLATE locale con guardrail anti zip-bomb.",
    sec3Bullet4: "Web Crypto API: Generazione crittografica di hash SHA-256/512 eseguita dal processore nativo del dispositivo.",
    sec4Title: "4. Come finanziamo il sito: Pubblicità Etica & Sponsor",
    sec4P1: "Per mantenere tutti i nostri tool gratuiti, illimitati e senza canoni di abbonamento, ospitiamo annunci pubblicitari certificati. Gli annunci sono integrati in contenitori a dimensione fissa (zero CLS) e non hanno mai accesso ai file che manipoli nel browser.",
    sec5Title: "5. Informativa Privacy GDPR (Artt. 13 e 14 Reg. UE 2016/679)",
    sec5P1: "Titolare del trattamento: FileOmniTool Team / Cybsquatch (email: riccardo.belli00@gmail.com). Trattamento file: ZERO dati vengono salvati o caricati. Dati di navigazione: per la sicurezza dell'infrastruttura vengono registrati log tecnici con IP anonimizzati. Servizi di terze parti: previo consenso esplicito, utilizziamo Google Analytics per analisi aggregate e Google AdSense / Adsterra per l'erogazione di banner pubblicitari.",
    sec5P2: "Base giuridica: Esecuzione del servizio e legittimo interesse per la sicurezza tecnica; Consenso esplicito dell'interessato (Art. 6.1.a GDPR) per cookie di tracciamento e marketing.",
    sec5Rights: "Diritti dell'Interessato (Artt. 15-22 GDPR): Hai diritto di accesso, cancellazione, limitazione, opposizione al trattamento e revoca del consenso in qualsiasi momento. Hai inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).",
    sec6Title: "6. Gestione dei Cookie & Consenso Informato",
    sec6P1: "Utilizziamo cookie tecnici essenziali per garantire la lingua e la sicurezza. I cookie analitici e pubblicitari vengono attivati solo se hai prestato il tuo consenso informato tramite il nostro banner conforme alla direttiva ePrivacy e alle linee guida EDPB.",
    manageCookiesBtn: "Modifica le tue Preferenze Cookie",
  },
  en: {
    backBtn: "Back to all tools",
    badge: "100% In-Browser Privacy Guarantee",
    title: "Privacy Policy & Zero-Upload Architecture",
    subtitle: "Full compliance with the EU General Data Protection Regulation (GDPR 2016/679)",
    sec1Title: "1. Why your files never leave your device",
    sec1P1: "Traditional online converters work by uploading your documents to remote cloud servers, processing them externally, and returning a download link. This exposes sensitive contracts, tax records, and personal photos to potential leaks.",
    sec1P2: "FileOmniTool follows an opposite philosophy: every single operation (PDF merge, image conversion, compression, ZIP extraction) runs directly inside your browser memory using WebAssembly and HTML5 Canvas. Zero bytes ever leave your device.",
    sec2Title: "2. How to verify it yourself with Browser DevTools",
    sec2P1: "Don't just take our word for it: you can independently inspect the absence of network uploads at any moment:",
    sec2Step1: "Press F12 (or right-click -> Inspect) to open your browser's Developer Tools.",
    sec2Step2: "Navigate to the Network tab.",
    sec2Step3: "Drag a file into any tool and start conversion or merging.",
    sec2Step4: "You will see that zero POST or PUT requests containing binary data are sent over the network. The file is handled exclusively as an in-memory local Blob.",
    sec3Title: "3. Technical Engines Used",
    sec3Bullet1: "pdf-lib: PDF manipulation and rendering executed entirely client-side in JavaScript.",
    sec3Bullet2: "HTML5 Canvas API: High-performance raster image conversion (PNG, JPEG, WebP) with GPU acceleration.",
    sec3Bullet3: "JSZip: Local client-side DEFLATE compression and decompression with zip-bomb protection.",
    sec3Bullet4: "Web Cryptography API: Hardware-accelerated cryptographic SHA-256 and AES calculations.",
    sec4Title: "4. Ethical Monetization & Ad Transparency",
    sec4P1: "To maintain all tools 100% free with unlimited usage and no paywalls, we display non-intrusive advertisements. Ads run in isolated containers (Zero CLS) and have zero access to files processed in your browser.",
    sec5Title: "5. GDPR Privacy Disclosure (Articles 13 & 14 EU 2016/679)",
    sec5P1: "Data Controller: FileOmniTool Team / Cybsquatch (email: riccardo.belli00@gmail.com). User Files: ZERO data is uploaded, retained, or stored. Server Logs: minimal technical server logs with anonymized IPs are retained for security purposes. Third parties: with explicit prior consent, Google Analytics and ad networks (Google AdSense, Adsterra) may process technical identifiers.",
    sec5P2: "Legal Basis: Legitimate interest for site security; Explicit consent (GDPR Art. 6.1.a) for analytics and advertising cookies.",
    sec5Rights: "User Rights (GDPR Arts. 15-22): You have the right to access, rectify, erase, restrict, and revoke consent at any time. You may also lodge a complaint with your national Data Protection Authority.",
    sec6Title: "6. Cookie Management & Informed Consent",
    sec6P1: "We use essential technical cookies to remember language and security settings. Analytical and marketing cookies are strictly held until you grant affirmative opt-in consent via our banner.",
    manageCookiesBtn: "Manage Your Cookie Preferences",
  },
  es: {
    backBtn: "Volver a todas las herramientas",
    badge: "Garantía de Privacidad 100% en el Navegador",
    title: "Política de Privacidad y Arquitectura Zero-Upload",
    subtitle: "Cumplimiento integral con el Reglamento General de Protección de Datos (RGPD UE 2016/679)",
    sec1Title: "1. Por qué tus archivos nunca salen de tu dispositivo",
    sec1P1: "Los convertidores tradicionales en línea suben tus documentos a servidores remotos. FileOmniTool procesa todo localmente.",
    sec1P2: "Cada operación se ejecuta directamente en la memoria RAM de tu navegador mediante WebAssembly y Canvas. Cero bytes salen de tu dispositivo.",
    sec2Title: "2. Cómo comprobarlo tú mismo",
    sec2P1: "Verifica con F12 en la pestaña Network que no se envía ninguna petición POST con datos binarios.",
    sec2Step1: "Pulsa F12 en tu navegador.",
    sec2Step2: "Abre la pestaña Red (Network).",
    sec2Step3: "Procesa un archivo en cualquier herramienta.",
    sec2Step4: "Verás cero subidas a servidores en la red.",
    sec3Title: "3. Motores Tecnológicos",
    sec3Bullet1: "pdf-lib: Procesamiento PDF local en JavaScript.",
    sec3Bullet2: "Canvas API: Conversión acelerada por GPU.",
    sec3Bullet3: "JSZip: Compresión DEFLATE en el cliente.",
    sec3Bullet4: "Web Crypto: Cálculo nativo de hashes SHA-256.",
    sec4Title: "4. Publicidad Ética",
    sec4P1: "Nos financiamos con publicidad aislada sin acceso a tus archivos.",
    sec5Title: "5. Declaración RGPD (Arts. 13 y 14)",
    sec5P1: "Responsable: FileOmniTool Team (riccardo.belli00@gmail.com). Archivos: CERO datos almacenados. Terceros: solo con consentimiento previo.",
    sec5P2: "Base jurídica: Ejecución y consentimiento (Art. 6.1.a RGPD).",
    sec5Rights: "Derechos: Acceso, supresión y revocación de consentimiento en cualquier momento.",
    sec6Title: "6. Gestión de Cookies",
    sec6P1: "Puedes cambiar o revocar tu consentimiento de cookies cuando lo desees.",
    manageCookiesBtn: "Gestionar Preferencias de Cookies",
  },
  fr: {
    backBtn: "Retour aux outils",
    badge: "Garantie Confidentialité 100% dans le Navigateur",
    title: "Politique de Confidentialité & Architecture Zéro-Upload",
    subtitle: "Conformité avec le Règlement Général sur la Protection des Données (RGPD UE 2016/679)",
    sec1Title: "1. Pourquoi vos fichiers ne quittent jamais votre appareil",
    sec1P1: "Les convertisseurs classiques envoient vos données sur des serveurs distants. FileOmniTool fonctionne 100% localement.",
    sec1P2: "Tous les calculs s'exécutent en RAM via WebAssembly et Canvas. Zéro fichier téléversé.",
    sec2Title: "2. Comment vérifier par vous-même",
    sec2P1: "Inspectez l'onglet Réseau avec F12 :",
    sec2Step1: "Ouvrez les Outils Développeur avec F12.",
    sec2Step2: "Allez sur l'onglet Réseau (Network).",
    sec2Step3: "Traitez un fichier dans un outil.",
    sec2Step4: "Aucune requête POST contenant vos fichiers n'est envoyée.",
    sec3Title: "3. Moteurs Technologiques",
    sec3Bullet1: "pdf-lib : Manipulation de PDF locale.",
    sec3Bullet2: "Canvas API : Conversion d'images haute vitesse.",
    sec3Bullet3: "JSZip : Décompression et compression DEFLATE.",
    sec3Bullet4: "Web Crypto API : Hachages cryptographiques matériels.",
    sec4Title: "4. Publicité Éthique",
    sec4P1: "Financement par bannières isolées sans accès à vos fichiers.",
    sec5Title: "5. Déclaration RGPD (Art. 13 & 14)",
    sec5P1: "Responsable du traitement : FileOmniTool Team (riccardo.belli00@gmail.com). Fichiers : ZÉRO stockage.",
    sec5P2: "Base légale : Consentement préalable pour les cookies tiers.",
    sec5Rights: "Droits : Accès, effacement, et retrait du consentement à tout instant.",
    sec6Title: "6. Gestion des Cookies",
    sec6P1: "Configurez vos choix de cookies à tout moment.",
    manageCookiesBtn: "Gérer vos Préférences de Cookies",
  },
  de: {
    backBtn: "Zurück zu allen Werkzeugen",
    badge: "100% Lokale Datenschutzgarantie",
    title: "Datenschutzerklärung & Zero-Upload Architektur",
    subtitle: "Vollständige Einhaltung der EU-Datenschutz-Grundverordnung (DSGVO 2016/679)",
    sec1Title: "1. Warum Ihre Dateien niemals Ihr Gerät verlassen",
    sec1P1: "Klassische Online-Tools laden Dokumente auf Server hoch. FileOmniTool verarbeitet alles lokal im Browser.",
    sec1P2: "Verarbeitung im RAM über WebAssembly und Canvas. Keine Datenübertragung an Server.",
    sec2Title: "2. Selbstständige Überprüfung",
    sec2P1: "Überprüfen Sie den Netzwerkverkehr mit F12:",
    sec2Step1: "Drücken Sie F12 für die Entwicklertools.",
    sec2Step2: "Wählen Sie den Reiter Netzwerk (Network).",
    sec2Step3: "Verarbeiten Sie eine Datei.",
    sec2Step4: "Es werden keine POST-Anfragen mit Ihren Dateien gesendet.",
    sec3Title: "3. Eingesetzte Technologien",
    sec3Bullet1: "pdf-lib: Lokale PDF-Verarbeitung in JavaScript.",
    sec3Bullet2: "Canvas API: GPU-beschleunigte Bildkonvertierung.",
    sec3Bullet3: "JSZip: Lokale DEFLATE-Kompression.",
    sec3Bullet4: "Web Crypto API: Hardwarebeschleunigte SHA-256 Hashes.",
    sec4Title: "4. Werbefinanzierung",
    sec4P1: "Isolierte Anzeigen ohne Datenzugriff.",
    sec5Title: "5. DSGVO-Erklärung (Art. 13 & 14)",
    sec5P1: "Verantwortlicher: FileOmniTool Team (riccardo.belli00@gmail.com). Dateien: NULL Speicherungen.",
    sec5P2: "Rechtsgrundlage: Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.",
    sec5Rights: "Rechte: Auskunft, Löschung und jederzeitiger Widerruf der Einwilligung.",
    sec6Title: "6. Cookie-Einstellungen",
    sec6P1: "Sie können Ihre Cookie-Einstellungen jederzeit anpassen.",
    manageCookiesBtn: "Cookie-Einstellungen Verwalten",
  },
  pt: {
    backBtn: "Voltar para as ferramentas",
    badge: "Garantia de Privacidade 100% no Navegador",
    title: "Política de Privacidade & Arquitetura Zero-Upload",
    subtitle: "Em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD UE 2016/679)",
    sec1Title: "1. Por que seus arquivos nunca saem do seu dispositivo",
    sec1P1: "Conversores comuns enviam arquivos para servidores externos. O FileOmniTool processa 100% no seu navegador.",
    sec1P2: "Execução na RAM via WebAssembly e Canvas. Zero bytes enviados para servidores.",
    sec2Title: "2. Como comprovar você mesmo",
    sec2P1: "Inspecione a aba Network com F12:",
    sec2Step1: "Abra as DevTools com F12.",
    sec2Step2: "Acesse a aba Network (Rede).",
    sec2Step3: "Processe um arquivo.",
    sec2Step4: "Nenhuma requisição POST com arquivos é enviada.",
    sec3Title: "3. Motores Tecnológicos",
    sec3Bullet1: "pdf-lib: Manipulação local de PDFs.",
    sec3Bullet2: "Canvas API: Conversão gráfica veloz.",
    sec3Bullet3: "JSZip: Compressão local DEFLATE.",
    sec3Bullet4: "Web Crypto: Cálculo nativo de SHA-256.",
    sec4Title: "4. Publicidade Ética",
    sec4P1: "Anúncios isolados sem acesso aos seus dados.",
    sec5Title: "5. Declaração RGPD (Arts. 13 e 14)",
    sec5P1: "Controlador: FileOmniTool Team (riccardo.belli00@gmail.com). Arquivos: ZERO armazenamento.",
    sec5P2: "Base jurídica: Consentimento prévio para cookies de terceiros.",
    sec5Rights: "Direitos: Acesso, eliminação e revogação de consentimento a qualquer momento.",
    sec6Title: "6. Gestão de Cookies",
    sec6P1: "Gerencie suas preferências de privacidade quando desejar.",
    manageCookiesBtn: "Gerenciar Preferências de Cookies",
  },
};

export const PrivacyContent: React.FC = () => {
  const { language } = useLanguage();
  const t = PRIVACY_TEXTS[language] || PRIVACY_TEXTS.en;

  const openCookiePreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open_cookie_preferences"));
    }
  };

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
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {t.title}
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {/* Sezione 1 - Architettura Locale */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <Lock className="h-5 w-5 text-emerald-600" />
              {t.sec1Title}
            </h2>
            <p className="mt-3">{t.sec1P1}</p>
            <p className="mt-3 font-medium text-emerald-700 dark:text-emerald-400">
              <strong>FileOmniTool:</strong> {t.sec1P2}
            </p>
          </section>

          {/* Sezione 2 - Verifica Tecnica */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <Terminal className="h-5 w-5 text-blue-600" />
              {t.sec2Title}
            </h2>
            <p className="mt-3">{t.sec2P1}</p>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>{t.sec2Step1}</li>
              <li>{t.sec2Step2}</li>
              <li>{t.sec2Step3}</li>
              <li><strong>{t.sec2Step4}</strong></li>
            </ol>
          </section>

          {/* Sezione 3 - Tecnologie impiegate */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <Cpu className="h-5 w-5 text-teal-600" />
              {t.sec3Title}
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                <span>{t.sec3Bullet1}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                <span>{t.sec3Bullet2}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                <span>{t.sec3Bullet3}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                <span>{t.sec3Bullet4}</span>
              </li>
            </ul>
          </section>

          {/* Sezione 4 - Pubblicità e Finanziamento */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              {t.sec4Title}
            </h2>
            <p className="mt-3">{t.sec4P1}</p>
          </section>

          {/* Sezione 5 - Conformità GDPR UE 2016/679 */}
          <section className="rounded-2xl border border-emerald-200/80 bg-emerald-50/30 p-6 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/20">
            <h2 className="flex items-center gap-2 text-base font-bold text-emerald-900 dark:text-emerald-300">
              <UserCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              {t.sec5Title}
            </h2>
            <p className="mt-3 text-zinc-800 dark:text-zinc-200">{t.sec5P1}</p>
            <p className="mt-3 text-zinc-800 dark:text-zinc-200">{t.sec5P2}</p>
            <div className="mt-4 rounded-xl border border-emerald-200/70 bg-white p-4 text-xs dark:border-emerald-800 dark:bg-zinc-900">
              <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                Diritti Garantiti:
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">{t.sec5Rights}</p>
            </div>
          </section>

          {/* Sezione 6 - Cookie Policy & Tasto Preferenze */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <Cookie className="h-5 w-5 text-amber-500" />
              {t.sec6Title}
            </h2>
            <p className="mt-3">{t.sec6P1}</p>
            <div className="mt-5">
              <button
                onClick={openCookiePreferences}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300"
              >
                <Sliders className="h-4 w-4" />
                <span>{t.manageCookiesBtn}</span>
              </button>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};
