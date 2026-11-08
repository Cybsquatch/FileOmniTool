"use client";

import React from "react";
import Link from "next/link";
import { useLanguage, type Language } from "@/lib/i18n/context";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { Mail, Code2, ShieldCheck, Coins, Wrench, HeartHandshake } from "lucide-react";

export const CONTACT_EMAIL = "riccardo.belli00@gmail.com";
const GITHUB_URL = "https://github.com/Cybsquatch/FileOmniTool";

interface Copy {
  eyebrow: string;
  title: string;
  intro: string;
  whoTitle: string;
  who: string;
  howTitle: string;
  how: string[];
  moneyTitle: string;
  money: string;
  promiseTitle: string;
  promises: string[];
  contactTitle: string;
  contact: string;
  contactTopics: string[];
  emailLabel: string;
  githubLabel: string;
  privacyLink: string;
}

const COPY: Record<Language, Copy> = {
  it: {
    eyebrow: "Chi siamo",
    title: "Un progetto indipendente, costruito per non vedere i tuoi file",
    intro: "FileOmniTool è una raccolta di {n} strumenti gratuiti per PDF, immagini, audio, archivi e testo che funzionano interamente nel browser. È nato da una domanda semplice: perché per unire due PDF o ridurre una foto bisogna caricare documenti personali sul server di qualcun altro?",
    whoTitle: "Chi c'è dietro",
    who: "FileOmniTool è sviluppato e mantenuto da Riccardo (su GitHub: Cybsquatch), uno sviluppatore indipendente italiano. Non c'è un'azienda, non ci sono investitori e non c'è un team di marketing: c'è una persona che scrive il codice, lo pubblica su GitHub e risponde alle email.",
    howTitle: "Come funziona",
    how: [
      "Quando scegli un file, il browser lo legge dalla memoria del tuo dispositivo. Il codice dello strumento lo elabora lì, con tecnologie come WebAssembly, Canvas e Web Crypto, e ti restituisce il risultato da scaricare.",
      "Nessun file viene caricato sui nostri server: non abbiamo un server che riceve file. Puoi verificarlo aprendo gli strumenti per sviluppatori del browser, scheda Rete, mentre usi uno strumento.",
      "Per gli strumenti con intelligenza artificiale, come la rimozione dello sfondo, il browser scarica una volta il modello AI da Hugging Face e lo esegue in locale. Quella richiesta contiene solo il modello, mai le tue immagini.",
      "Il codice sorgente è pubblico su GitHub, così chiunque può controllare cosa fa davvero.",
    ],
    moneyTitle: "Come si mantiene",
    money: "Il sito è gratuito e non ha versioni a pagamento. I costi sono coperti da annunci pubblicitari, che vengono caricati solo se dai il consenso nel banner dei cookie. Se li rifiuti, gli strumenti funzionano esattamente allo stesso modo.",
    promiseTitle: "Cosa non facciamo",
    promises: [
      "Non chiediamo registrazioni né account.",
      "Non carichiamo, non leggiamo e non conserviamo i tuoi file.",
      "Non mettiamo limiti giornalieri o filigrane sui risultati.",
      "Non usiamo popup che aprono finestre pubblicitarie.",
    ],
    contactTitle: "Contatti",
    contact: "Per segnalare un problema, proporre un nuovo strumento, chiedere una licenza commerciale del codice o per qualsiasi altra domanda, scrivi a:",
    contactTopics: ["Segnalazioni di bug", "Idee per nuovi strumenti", "Licenze e collaborazioni", "Privacy e dati"],
    emailLabel: "Scrivi un'email",
    githubLabel: "Codice e segnalazioni su GitHub",
    privacyLink: "Leggi la Garanzia Privacy",
  },
  en: {
    eyebrow: "About",
    title: "An independent project, built so it never sees your files",
    intro: "FileOmniTool is a collection of {n} free tools for PDFs, images, audio, archives and text that run entirely in your browser. It started from a simple question: why should merging two PDFs or shrinking a photo mean uploading personal documents to someone else's server?",
    whoTitle: "Who's behind it",
    who: "FileOmniTool is built and maintained by Riccardo (Cybsquatch on GitHub), an independent developer from Italy. There is no company, no investors and no marketing team: just one person who writes the code, publishes it on GitHub and answers the email.",
    howTitle: "How it works",
    how: [
      "When you pick a file, your browser reads it from your device's memory. The tool's code processes it right there, using WebAssembly, Canvas and Web Crypto, and hands you the result to download.",
      "No file is uploaded to our servers: we don't have a server that receives files. You can check this by opening your browser's developer tools, Network tab, while you use any tool.",
      "For AI tools such as background removal, the browser downloads the AI model once from Hugging Face and runs it locally. That request contains only the model, never your images.",
      "The source code is public on GitHub, so anyone can check what it actually does.",
    ],
    moneyTitle: "How it's funded",
    money: "The site is free and has no paid tier. Costs are covered by ads, which load only if you accept them in the cookie banner. If you decline, every tool works exactly the same.",
    promiseTitle: "What we don't do",
    promises: [
      "No signup or accounts.",
      "We don't upload, read or store your files.",
      "No daily limits and no watermarks on your results.",
      "No pop-ups that open ad windows.",
    ],
    contactTitle: "Contact",
    contact: "To report a problem, suggest a new tool, ask for a commercial license of the code or anything else, write to:",
    contactTopics: ["Bug reports", "Ideas for new tools", "Licensing and partnerships", "Privacy and data"],
    emailLabel: "Send an email",
    githubLabel: "Code and issues on GitHub",
    privacyLink: "Read the Privacy Guarantee",
  },
  es: {
    eyebrow: "Quiénes somos",
    title: "Un proyecto independiente, creado para no ver nunca tus archivos",
    intro: "FileOmniTool es una colección de {n} herramientas gratuitas para PDF, imágenes, audio, archivos comprimidos y texto que funcionan por completo en tu navegador. Nació de una pregunta sencilla: ¿por qué para unir dos PDF o reducir una foto hay que subir documentos personales al servidor de otra persona?",
    whoTitle: "Quién está detrás",
    who: "FileOmniTool lo desarrolla y mantiene Riccardo (Cybsquatch en GitHub), un desarrollador independiente de Italia. No hay empresa, ni inversores, ni equipo de marketing: hay una persona que escribe el código, lo publica en GitHub y responde los correos.",
    howTitle: "Cómo funciona",
    how: [
      "Cuando eliges un archivo, el navegador lo lee de la memoria de tu dispositivo. El código de la herramienta lo procesa allí mismo, con WebAssembly, Canvas y Web Crypto, y te entrega el resultado para descargar.",
      "Ningún archivo se sube a nuestros servidores: no tenemos un servidor que reciba archivos. Puedes comprobarlo abriendo las herramientas de desarrollo del navegador, pestaña Red, mientras usas cualquier herramienta.",
      "En las herramientas con IA, como quitar el fondo, el navegador descarga una vez el modelo de IA desde Hugging Face y lo ejecuta en local. Esa petición solo contiene el modelo, nunca tus imágenes.",
      "El código fuente es público en GitHub, así que cualquiera puede comprobar lo que hace realmente.",
    ],
    moneyTitle: "Cómo se financia",
    money: "El sitio es gratuito y no tiene versiones de pago. Los costes se cubren con anuncios, que solo se cargan si los aceptas en el banner de cookies. Si los rechazas, todas las herramientas funcionan igual.",
    promiseTitle: "Lo que no hacemos",
    promises: [
      "No pedimos registro ni cuentas.",
      "No subimos, leemos ni guardamos tus archivos.",
      "Sin límites diarios ni marcas de agua en los resultados.",
      "Sin ventanas emergentes que abran publicidad.",
    ],
    contactTitle: "Contacto",
    contact: "Para informar de un problema, proponer una herramienta nueva, pedir una licencia comercial del código o cualquier otra consulta, escribe a:",
    contactTopics: ["Errores", "Ideas para nuevas herramientas", "Licencias y colaboraciones", "Privacidad y datos"],
    emailLabel: "Enviar un correo",
    githubLabel: "Código e incidencias en GitHub",
    privacyLink: "Leer la Garantía de Privacidad",
  },
  fr: {
    eyebrow: "À propos",
    title: "Un projet indépendant, conçu pour ne jamais voir vos fichiers",
    intro: "FileOmniTool est une collection de {n} outils gratuits pour PDF, images, audio, archives et texte qui fonctionnent entièrement dans votre navigateur. Il est né d'une question simple : pourquoi fusionner deux PDF ou réduire une photo obligerait-il à envoyer des documents personnels sur le serveur de quelqu'un d'autre ?",
    whoTitle: "Qui est derrière",
    who: "FileOmniTool est développé et maintenu par Riccardo (Cybsquatch sur GitHub), un développeur indépendant italien. Pas d'entreprise, pas d'investisseurs, pas d'équipe marketing : une personne qui écrit le code, le publie sur GitHub et répond aux e-mails.",
    howTitle: "Comment ça marche",
    how: [
      "Quand vous choisissez un fichier, le navigateur le lit dans la mémoire de votre appareil. Le code de l'outil le traite sur place, avec WebAssembly, Canvas et Web Crypto, puis vous propose le résultat à télécharger.",
      "Aucun fichier n'est envoyé sur nos serveurs : nous n'avons pas de serveur qui reçoit des fichiers. Vous pouvez le vérifier dans les outils de développement du navigateur, onglet Réseau, pendant l'utilisation d'un outil.",
      "Pour les outils d'IA, comme la suppression d'arrière-plan, le navigateur télécharge une fois le modèle depuis Hugging Face et l'exécute en local. Cette requête ne contient que le modèle, jamais vos images.",
      "Le code source est public sur GitHub : chacun peut vérifier ce qu'il fait réellement.",
    ],
    moneyTitle: "Comment il est financé",
    money: "Le site est gratuit et n'a pas de version payante. Les coûts sont couverts par des publicités, chargées uniquement si vous les acceptez dans le bandeau cookies. Si vous refusez, tous les outils fonctionnent de la même façon.",
    promiseTitle: "Ce que nous ne faisons pas",
    promises: [
      "Pas d'inscription ni de compte.",
      "Nous n'envoyons, ne lisons et ne conservons pas vos fichiers.",
      "Pas de limite quotidienne ni de filigrane sur vos résultats.",
      "Pas de pop-up qui ouvre des fenêtres publicitaires.",
    ],
    contactTitle: "Contact",
    contact: "Pour signaler un problème, proposer un nouvel outil, demander une licence commerciale du code ou pour toute autre question, écrivez à :",
    contactTopics: ["Signalement de bugs", "Idées de nouveaux outils", "Licences et partenariats", "Vie privée et données"],
    emailLabel: "Envoyer un e-mail",
    githubLabel: "Code et tickets sur GitHub",
    privacyLink: "Lire la Garantie de confidentialité",
  },
  de: {
    eyebrow: "Über uns",
    title: "Ein unabhängiges Projekt, gebaut, um Ihre Dateien nie zu sehen",
    intro: "FileOmniTool ist eine Sammlung von {n} kostenlosen Werkzeugen für PDFs, Bilder, Audio, Archive und Text, die vollständig im Browser laufen. Es entstand aus einer einfachen Frage: Warum muss man persönliche Dokumente auf den Server eines Fremden hochladen, nur um zwei PDFs zusammenzufügen oder ein Foto zu verkleinern?",
    whoTitle: "Wer dahintersteht",
    who: "FileOmniTool wird von Riccardo (auf GitHub: Cybsquatch) entwickelt und betreut, einem unabhängigen Entwickler aus Italien. Es gibt keine Firma, keine Investoren und kein Marketingteam: eine Person schreibt den Code, veröffentlicht ihn auf GitHub und beantwortet die E-Mails.",
    howTitle: "So funktioniert es",
    how: [
      "Wenn Sie eine Datei auswählen, liest der Browser sie aus dem Speicher Ihres Geräts. Der Code des Werkzeugs verarbeitet sie direkt dort, mit WebAssembly, Canvas und Web Crypto, und gibt Ihnen das Ergebnis zum Herunterladen.",
      "Keine Datei wird auf unsere Server hochgeladen: Wir haben keinen Server, der Dateien empfängt. Prüfen Sie es selbst in den Entwicklertools des Browsers, Tab Netzwerk, während Sie ein Werkzeug nutzen.",
      "Bei KI-Werkzeugen wie dem Entfernen des Hintergrunds lädt der Browser das KI-Modell einmalig von Hugging Face und führt es lokal aus. Diese Anfrage enthält nur das Modell, nie Ihre Bilder.",
      "Der Quellcode ist öffentlich auf GitHub, sodass jeder prüfen kann, was er tatsächlich tut.",
    ],
    moneyTitle: "Wie es finanziert wird",
    money: "Die Website ist kostenlos und hat keine Bezahlversion. Die Kosten werden durch Werbung gedeckt, die nur geladen wird, wenn Sie im Cookie-Banner zustimmen. Lehnen Sie ab, funktionieren alle Werkzeuge genauso.",
    promiseTitle: "Was wir nicht tun",
    promises: [
      "Keine Registrierung, keine Konten.",
      "Wir laden Ihre Dateien nicht hoch, lesen sie nicht und speichern sie nicht.",
      "Keine Tageslimits und keine Wasserzeichen auf Ihren Ergebnissen.",
      "Keine Pop-ups, die Werbefenster öffnen.",
    ],
    contactTitle: "Kontakt",
    contact: "Um ein Problem zu melden, ein neues Werkzeug vorzuschlagen, eine kommerzielle Lizenz für den Code anzufragen oder bei anderen Fragen, schreiben Sie an:",
    contactTopics: ["Fehlermeldungen", "Ideen für neue Werkzeuge", "Lizenzen und Kooperationen", "Datenschutz"],
    emailLabel: "E-Mail schreiben",
    githubLabel: "Code und Issues auf GitHub",
    privacyLink: "Datenschutzgarantie lesen",
  },
  pt: {
    eyebrow: "Quem somos",
    title: "Um projeto independente, feito para nunca ver seus arquivos",
    intro: "FileOmniTool é uma coleção de {n} ferramentas gratuitas para PDF, imagens, áudio, arquivos compactados e texto que funcionam inteiramente no navegador. Nasceu de uma pergunta simples: por que juntar dois PDFs ou reduzir uma foto exigiria enviar documentos pessoais para o servidor de outra pessoa?",
    whoTitle: "Quem está por trás",
    who: "FileOmniTool é desenvolvido e mantido por Riccardo (Cybsquatch no GitHub), um desenvolvedor independente da Itália. Não há empresa, investidores nem equipe de marketing: há uma pessoa que escreve o código, publica no GitHub e responde aos e-mails.",
    howTitle: "Como funciona",
    how: [
      "Quando você escolhe um arquivo, o navegador o lê da memória do seu dispositivo. O código da ferramenta o processa ali mesmo, com WebAssembly, Canvas e Web Crypto, e entrega o resultado para download.",
      "Nenhum arquivo é enviado aos nossos servidores: não temos um servidor que receba arquivos. Você pode conferir nas ferramentas de desenvolvedor do navegador, aba Rede, enquanto usa qualquer ferramenta.",
      "Nas ferramentas com IA, como remover o fundo, o navegador baixa uma vez o modelo de IA do Hugging Face e o executa localmente. Essa requisição contém só o modelo, nunca suas imagens.",
      "O código-fonte é público no GitHub, então qualquer pessoa pode verificar o que ele realmente faz.",
    ],
    moneyTitle: "Como se mantém",
    money: "O site é gratuito e não tem versão paga. Os custos são cobertos por anúncios, que só carregam se você aceitar no banner de cookies. Se recusar, todas as ferramentas funcionam do mesmo jeito.",
    promiseTitle: "O que não fazemos",
    promises: [
      "Sem cadastro nem contas.",
      "Não enviamos, lemos nem guardamos seus arquivos.",
      "Sem limites diários nem marcas d'água nos resultados.",
      "Sem pop-ups que abrem janelas de anúncio.",
    ],
    contactTitle: "Contato",
    contact: "Para relatar um problema, sugerir uma nova ferramenta, pedir uma licença comercial do código ou qualquer outra dúvida, escreva para:",
    contactTopics: ["Relatos de bugs", "Ideias de novas ferramentas", "Licenças e parcerias", "Privacidade e dados"],
    emailLabel: "Enviar e-mail",
    githubLabel: "Código e issues no GitHub",
    privacyLink: "Ler a Garantia de Privacidade",
  },
};

export function AboutContent() {
  const { language } = useLanguage();
  const c = COPY[language] ?? COPY.en;
  const privacyHref = language === "it" ? "/privacy" : `/${language}/privacy`;

  return (
    <main className="flex-1 pb-20">
      <section className="border-b border-zinc-200/70 bg-gradient-to-b from-emerald-50/70 to-transparent px-4 py-14 dark:border-zinc-800 dark:from-emerald-950/20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">{c.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{c.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{c.intro.replace("{n}", String(TOOLS_REGISTRY.length))}</p>
        </div>
      </section>

      <div className="mx-auto mt-10 max-w-3xl space-y-10 px-4">
        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
            <HeartHandshake className="h-5 w-5 text-emerald-600" /> {c.whoTitle}
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">{c.who}</p>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
            <Wrench className="h-5 w-5 text-emerald-600" /> {c.howTitle}
          </h2>
          <ul className="mt-3 space-y-3">
            {c.how.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link href={privacyHref} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" /> {c.privacyLink}
          </Link>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
              <Coins className="h-5 w-5 text-amber-500" /> {c.moneyTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{c.money}</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-600" /> {c.promiseTitle}
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              {c.promises.map((p) => (
                <li key={p}>✕ {p}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <h2 className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
            <Mail className="h-5 w-5 text-emerald-600" /> {c.contactTitle}
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">{c.contact}</p>
          <p className="mt-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-bold text-emerald-700 hover:underline dark:text-emerald-400">
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {c.contactTopics.map((topic) => (
              <span key={topic} className="rounded-full bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm dark:bg-zinc-900 dark:text-zinc-300">
                {topic}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=FileOmniTool`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700"
            >
              <Mail className="h-4 w-4" /> {c.emailLabel}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <Code2 className="h-4 w-4" /> {c.githubLabel}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
