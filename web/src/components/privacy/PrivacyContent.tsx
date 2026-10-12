"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Terminal, Cpu, CheckCircle2, ArrowLeft } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n/context";
import { AdBanner } from "@/components/ads/AdBanner";

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
}

const PRIVACY_TEXTS: Record<Language, PrivacyCopy> = {
  en: {
    backBtn: "Back to all tools",
    badge: "100% In-Browser Privacy Guarantee",
    title: "Privacy Guarantee & Zero-Upload Architecture",
    subtitle: "Cybersecurity and total data confidentiality as our highest priority",
    sec1Title: "1. Why your files never leave your device",
    sec1P1: "Traditional online converters (like ILovePDF or Smallpdf) work by uploading your documents to remote cloud servers, processing them on external workers, and sending back a download link. This exposes sensitive contracts, tax records, and personal photos to potential leaks.",
    sec1P2: "FileOmniTool follows a completely opposite philosophy: every single operation (PDF merge, image conversion, compression, ZIP extraction) runs directly inside your browser memory using WebAssembly and HTML5 Canvas. Zero bytes ever leave your device.",
    sec2Title: "2. How to verify it yourself with Browser DevTools",
    sec2P1: "Don't just take our word for it: you can independently inspect the absence of network uploads at any moment:",
    sec2Step1: "Press F12 (or right-click -> Inspect) to open your browser's Developer Tools.",
    sec2Step2: "Navigate to the Network tab.",
    sec2Step3: "Drag a file into any tool and start conversion or merging.",
    sec2Step4: "You will see that zero POST or PUT requests containing binary data are sent over the network. The file is handled exclusively as an in-memory local Blob.",
    sec3Title: "3. Technical Engines Used",
    sec3Bullet1: "pdf-lib: PDF manipulation and rendering executed entirely client-side in WebAssembly/JavaScript.",
    sec3Bullet2: "HTML5 Canvas API: High-performance raster image conversion (PNG, JPEG, WebP) with GPU acceleration.",
    sec3Bullet3: "JSZip: Local client-side DEFLATE compression and decompression with zip-bomb protection.",
    sec3Bullet4: "Web Cryptography API: Hardware-accelerated cryptographic SHA-256 and AES calculations.",
    sec4Title: "4. Ethical Monetization & Ad Transparency",
    sec4P1: "To maintain all tools 100% free with unlimited usage and no paywalls, we display non-intrusive advertisements. Ads run in isolated containers (Zero CLS) and have zero access to files processed in your browser.",
  },
  it: {
    backBtn: "Torna a tutti gli strumenti",
    badge: "Garanzia Privacy 100% In-Browser",
    title: "Garanzia di Privacy & Architettura Zero-Upload",
    subtitle: "La sicurezza informatica e la riservatezza dei tuoi dati al primo posto",
    sec1Title: "1. Perché i tuoi file non lasciano mai il tuo dispositivo",
    sec1P1: "I tradizionali convertitori online funzionano caricando il tuo file sui loro server cloud, eseguendo la modifica e rimandandoti il link di download. Questo espone contratti riservati, dati personali o documenti aziendali a potenziali violazioni o data leak.",
    sec1P2: "FileOmniTool adotta una filosofia completamente diversa: ogni singola operazione (unione PDF, conversione immagini, compressione, estrazione ZIP) è scritta in JavaScript e WebAssembly per essere eseguita direttamente all'interno del motore del tuo browser.",
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
    sec4Title: "4. Come finanziamo il sito: Pubblicità Etica",
    sec4P1: "Per mantenere tutti i nostri tool gratuiti, illimitati e senza canoni di abbonamento, ospitiamo annunci pubblicitari certificati. Gli annunci sono integrati in contenitori a dimensione fissa (zero CLS) e non hanno mai accesso ai file che manipoli nel browser.",
  },
  es: {
    backBtn: "Volver a todas las herramientas",
    badge: "Garantía de Privacidad 100% en el Navegador",
    title: "Garantía de Privacidad y Arquitectura Zero-Upload",
    subtitle: "La ciberseguridad y la confidencialidad de tus datos como máxima prioridad",
    sec1Title: "1. Por qué tus archivos nunca salen de tu dispositivo",
    sec1P1: "Los convertidores tradicionales en línea suben tus documentos confidenciales a servidores en la nube externos. Esto expone contratos, declaraciones y fotos privadas a filtraciones o riesgos de seguridad.",
    sec1P2: "FileOmniTool adopta una arquitectura radicalmente distinta: cada operación (unir PDF, convertir imágenes, comprimir, extraer ZIP) se ejecuta directamente en la memoria RAM de tu navegador mediante WebAssembly y Canvas. Cero bytes salen de tu dispositivo.",
    sec2Title: "2. Cómo comprobarlo tú mismo con las herramientas de desarrollador",
    sec2P1: "No te fíes solo de nuestras palabras: puedes verificar la ausencia total de subidas en cualquier momento:",
    sec2Step1: "Pulsa F12 (o clic derecho -> Inspeccionar) para abrir las DevTools de tu navegador.",
    sec2Step2: "Ve a la pestaña Network (Red).",
    sec2Step3: "Arrastra un archivo a cualquiera de nuestras herramientas y ejecuta la conversión.",
    sec2Step4: "Comprobarás que no se envía ninguna petición POST o PUT con datos binarios a ningún servidor. El archivo se procesa estrictamente en la memoria RAM local.",
    sec3Title: "3. Motores Tecnológicos Utilizados",
    sec3Bullet1: "pdf-lib: Manipulación y renderizado de documentos PDF ejecutados enteramente en JavaScript client-side.",
    sec3Bullet2: "HTML5 Canvas API: Conversión ultrarrápida de imágenes rasterizadas (PNG, JPEG, WebP) con aceleración por GPU.",
    sec3Bullet3: "JSZip: Compresión y descompresión con algoritmo DEFLATE local y protección anti zip-bomb.",
    sec3Bullet4: "Web Crypto API: Cálculo criptográfico nativo de hashes SHA-256 y cifrado AES.",
    sec4Title: "4. Publicidad Ética y Sostenibilidad",
    sec4P1: "Para mantener todas las herramientas 100% gratuitas y sin suscripciones, mostramos publicidad no invasiva. Los anuncios se cargan en contenedores aislados (Zero CLS) y no tienen ningún acceso a tus archivos.",
  },
  fr: {
    backBtn: "Retour à tous les outils",
    badge: "Garantie de Confidentialité 100% dans le Navigateur",
    title: "Garantie de Confidentialité & Architecture Zéro-Téléversement",
    subtitle: "La cybersécurité et la confidentialité de vos données comme priorité absolue",
    sec1Title: "1. Pourquoi vos fichiers ne quittent jamais votre appareil",
    sec1P1: "Les convertisseurs classiques en ligne envoient vos documents sensibles sur des serveurs distants pour traitement. Cela expose contrats, déclarations fiscales et photos personnelles à des risques de fuite de données.",
    sec1P2: "FileOmniTool applique une approche fondamentalement différente : chaque traitement (fusion PDF, conversion d'image, compression, extraction ZIP) s'exécute directement dans la mémoire vive de votre navigateur via WebAssembly et Canvas.",
    sec2Title: "2. Comment vérifier par vous-même avec les Outils Développeur",
    sec2P1: "Ne nous croyez pas sur parole : vous pouvez vérifier l'absence de transfert réseau à tout instant :",
    sec2Step1: "Appuyez sur F12 (ou clic droit -> Inspecter) pour ouvrir les Outils Développeur.",
    sec2Step2: "Rendez-vous sur l'onglet Réseau (Network).",
    sec2Step3: "Déposez un fichier dans un outil et lancez l'opération.",
    sec2Step4: "Vous constaterez qu'aucune requête POST ou PUT avec des données binaires n'est transmise sur internet. Le fichier reste un Blob local en RAM.",
    sec3Title: "3. Moteurs Technologiques Utilisés",
    sec3Bullet1: "pdf-lib : Manipulation et rendu de PDF exécutés intégralement côté client en JavaScript.",
    sec3Bullet2: "HTML5 Canvas API : Conversion d'images (PNG, JPEG, WebP) avec accélération matérielle GPU.",
    sec3Bullet3: "JSZip : Compression et décompression DEFLATE locale avec protection anti-bombe ZIP.",
    sec3Bullet4: "Web Crypto API : Calcul cryptographique sécurisé de hachages SHA-256 et chiffrement AES.",
    sec4Title: "4. Publicité Éthique & Financement",
    sec4P1: "Pour conserver nos outils gratuits et illimités sans aucun abonnement payant, nous diffusons des annonces publicitaires certifiées. Ces annonces sont isolées et n'ont aucun accès à vos documents.",
  },
  de: {
    backBtn: "Zurück zu allen Werkzeugen",
    badge: "100% Browserbasierte Datenschutzgarantie",
    title: "Datenschutzgarantie & Zero-Upload Architektur",
    subtitle: "IT-Sicherheit und uneingeschränkte Vertraulichkeit an erster Stelle",
    sec1Title: "1. Warum Ihre Dateien niemals Ihr Gerät verlassen",
    sec1P1: "Herkömmliche Online-Konverter laden Ihre vertraulichen Dokumente auf Cloud-Server hoch. Dies setzt Verträge, Steuerdaten und Fotos dem Risiko von Sicherheitsverletzungen und Datenlecks aus.",
    sec1P2: "FileOmniTool setzt auf eine völlig andere Architektur: Jede einzelne Operation (PDF-Zusammenführung, Bildkonvertierung, Komprimierung) läuft direkt im Arbeitsspeicher Ihres Browsers über WebAssembly und Canvas ab.",
    sec2Title: "2. So prüfen Sie es selbst mit den Entwicklertools",
    sec2P1: "Verlassen Sie sich nicht nur auf unser Wort: Sie können das Fehlen von Server-Uploads jederzeit selbst überprüfen:",
    sec2Step1: "Drücken Sie F12 (oder Rechtsklick -> Untersuchen), um die Browser-Entwicklertools zu öffnen.",
    sec2Step2: "Öffnen Sie den Reiter Netzwerk (Network).",
    sec2Step3: "Ziehen Sie eine Datei in eines unserer Tools und starten Sie die Verarbeitung.",
    sec2Step4: "Sie werden sehen, dass keine POST- oder PUT-Anfragen mit Binärdaten gesendet werden. Die Datei verbleibt als lokales Blob im RAM.",
    sec3Title: "3. Eingesetzte Technologien",
    sec3Bullet1: "pdf-lib: PDF-Bearbeitung und Rendering vollständig clientseitig in JavaScript.",
    sec3Bullet2: "HTML5 Canvas API: Schnelle Rasterbild-Konvertierung (PNG, JPEG, WebP) mit GPU-Beschleunigung.",
    sec3Bullet3: "JSZip: Lokale DEFLATE-Kompression mit integriertem Schutz vor ZIP-Bomben.",
    sec3Bullet4: "Web Crypto API: Hardwarebeschleunigte SHA-256- und AES-Kryptographie.",
    sec4Title: "4. Ethische Werbefinanzierung",
    sec4P1: "Um alle Werkzeuge dauerhaft kostenlos ohne Abonnements anzubieten, finanzieren wir uns durch unaufdringliche Werbung. Anzeigen laufen isoliert (Zero CLS) und haben keinerlei Zugriff auf Ihre Daten.",
  },
  pt: {
    backBtn: "Voltar para todas as ferramentas",
    badge: "Garantia de Privacidade 100% no Navegador",
    title: "Garantia de Privacidade e Arquitetura Zero-Upload",
    subtitle: "Segurança cibernética e confidencialidade total como prioridade máxima",
    sec1Title: "1. Por que seus arquivos nunca saem do seu dispositivo",
    sec1P1: "Conversores online convencionais enviam seus documentos confidenciais para servidores em nuvem. Isso expõe contratos, dados fiscais e fotos privadas a potenciais vazamentos de dados.",
    sec1P2: "O FileOmniTool adota uma filosofia oposta: cada operação (juntar PDF, converter imagens, comprimir, extrair ZIP) executa diretamente na memória RAM do seu navegador via WebAssembly e Canvas.",
    sec2Title: "2. Como verificar você mesmo com as Ferramentas do Desenvolvedor",
    sec2P1: "Não confie apenas na nossa palavra: você pode comprovar a ausência de uploads a qualquer momento:",
    sec2Step1: "Pressione F12 (ou clique com o botão direito -> Inspecionar) para abrir as DevTools do navegador.",
    sec2Step2: "Acesse a aba Network (Rede).",
    sec2Step3: "Arraste um arquivo para qualquer ferramenta e inicie o processamento.",
    sec2Step4: "Você verá que nenhuma requisição POST ou PUT com dados binários é enviada para qualquer servidor. O arquivo é manipulado estritamente como Blob na memória RAM local.",
    sec3Title: "3. Motores Tecnológicos Utilizados",
    sec3Bullet1: "pdf-lib: Manipulação e renderização de PDFs executadas integralmente no navegador via JavaScript.",
    sec3Bullet2: "HTML5 Canvas API: Conversão de formatos de imagem (PNG, JPEG, WebP) com aceleração gráfica local.",
    sec3Bullet3: "JSZip: Compressão e descompressão DEFLATE local com proteção contra bombas ZIP.",
    sec3Bullet4: "Web Crypto API: Geração criptográfica de hashes SHA-256 e criptografia AES pelo processador local.",
    sec4Title: "4. Publicidade Ética e Sustentabilidade",
    sec4P1: "Para manter todas as ferramentas gratuitas e sem limites de uso, exibimos anúncios certificados e não invasivos. Os anúncios ficam isolados (Zero CLS) e não possuem nenhum acesso aos seus arquivos.",
  }
};

export const PrivacyContent: React.FC = () => {
  const { language } = useLanguage();
  const t = PRIVACY_TEXTS[language] || PRIVACY_TEXTS.en;

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
          {/* Sezione 1 */}
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

          {/* Sponsor Banner (Non-Invasive, Ethical Ad Slot) */}
          <div className="pt-2">
            <AdBanner slot="leaderboard" />
          </div>
        </div>
      </div>
    </main>
  );
};
