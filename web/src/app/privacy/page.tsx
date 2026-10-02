import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ShieldCheck, Lock, Terminal, Cpu, CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Garanzia Privacy e Zero-Upload | FileOmniTool",
  description: "Scopri come FileOmniTool garantisce la privacy totale dei tuoi documenti elaborando ogni file al 100% nel tuo browser senza upload su server.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-emerald-600 dark:text-zinc-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Torna a tutti gli strumenti</span>
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Garanzia di Privacy & Architettura Zero-Upload
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                La sicurezza informatica e la riservatezza dei tuoi dati al primo posto
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {/* Sezione 1 */}
            <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
                <Lock className="h-5 w-5 text-emerald-600" />
                1. Perché i tuoi file non lasciano mai il tuo dispositivo
              </h2>
              <p className="mt-3">
                I tradizionali convertitori online (come ILovePDF o Smallpdf) funzionano caricando il tuo file sui loro server cloud, eseguendo la modifica e rimandandoti il link di download. Questo espone contratti riservati, dati personali o documenti aziendali a potenziali violazioni o data leak.
              </p>
              <p className="mt-3 font-medium text-emerald-700 dark:text-emerald-400">
                <strong>FileOmniTool adotta una filosofia completamente diversa:</strong> ogni singola operazione (unione PDF, conversione immagini, compressione, estrazione ZIP) è scritta in JavaScript e WebAssembly per essere eseguita direttamente all&apos;interno del motore del tuo browser.
              </p>
            </section>

            {/* Sezione 2 - Verifica Tecnica */}
            <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
                <Terminal className="h-5 w-5 text-blue-600" />
                2. Come verificare tu stesso con gli Strumenti per Sviluppatori
              </h2>
              <p className="mt-3">
                Non fidarti solo delle nostre parole: puoi certificare l&apos;assenza di upload in qualsiasi istante:
              </p>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li>Premi il tasto <strong>F12</strong> (oppure tasto destro &rarr; <em>Ispeziona</em>) per aprire i DevTools del tuo browser.</li>
                <li>Vai sulla scheda <strong>Network (Rete)</strong>.</li>
                <li>Trascina un file in uno dei nostri strumenti ed esegui la conversione o unione.</li>
                <li>Noterai che <strong>nessuna chiamata di tipo POST o PUT con dati binari viene inviata ad alcun server</strong>. Il file viene gestito esclusivamente come Blob in memoria RAM locale.</li>
              </ol>
            </section>

            {/* Sezione 3 - Tecnologie impiegate */}
            <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
                <Cpu className="h-5 w-5 text-teal-600" />
                3. Motori Tecnologici Utilizzati
              </h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong>pdf-lib & pdfjs:</strong> Manipolazione e rendering dei PDF compilati direttamente in JavaScript client-side.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong>HTML5 Canvas API:</strong> Conversione formati raster (PNG, JPEG, WebP) con accelerazione hardware della tua GPU.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong>JSZip:</strong> Compressione e decompressione con algoritmo DEFLATE locale con guardrail anti zip-bomb.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong>Web Crypto API:</strong> Generazione crittografica di hash SHA-256/512 eseguita dal processore nativo del dispositivo.</span>
                </li>
              </ul>
            </section>

            {/* Sezione 4 - Pubblicità e Finanziamento */}
            <section className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                4. Come finanziamo il sito: Pubblicità Etica
              </h2>
              <p className="mt-3">
                Per mantenere tutti i nostri tool gratuiti, illimitati e senza canoni di abbonamento, ospitiamo annunci pubblicitari (Google AdSense e network certificati). 
                Gli annunci sono integrati in contenitori a dimensione fissa (zero CLS) e <strong>non hanno mai accesso ai file che manipoli nel browser</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
