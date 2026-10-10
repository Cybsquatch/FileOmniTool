"use client";

import React from "react";
import Link from "next/link";
import { GuideArticle } from "@/lib/guides-registry";
import { useLanguage } from "@/lib/i18n/context";
import { BookOpen, Clock, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

interface GuidesIndexClientProps {
  guides: GuideArticle[];
}

export const GuidesIndexClient: React.FC<GuidesIndexClientProps> = ({ guides }) => {
  const { language } = useLanguage();

  const categoryLabels: Record<string, Record<string, string>> = {
    pdf: { en: "PDF Suite", it: "Suite PDF" },
    image: { en: "Image Suite", it: "Suite Immagini" },
    audio: { en: "Audio & Video", it: "Audio e Video" },
    document: { en: "Document & Office", it: "Documenti & Office" },
    text: { en: "Text & Dev", it: "Testo & Dev" },
    privacy: { en: "Privacy & Security", it: "Privacy & Sicurezza" },
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            {language === "it" ? "Guide e Tutorial" : "Guides & Tutorials"}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 pt-8 pb-10 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
          <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{language === "it" ? "Padroneggia i tuoi file digitali" : "Master Your Digital Files"}</span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-900 dark:text-white">
          {language === "it" ? "Guide, Tutorial & " : "Guides, Tutorials & "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            {language === "it" ? "Best Practice per la Privacy" : "Privacy Best Practices"}
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          {language === "it"
            ? "Istruzioni pratiche per modificare PDF, ottimizzare foto, convertire file multimediali e proteggere i tuoi documenti direttamente nel browser senza caricare nulla online."
            : "Practical walkthroughs for manipulating PDFs, optimizing photos, converting media, and securing your documents directly in your browser."}
        </p>
      </section>

      {/* Guides Grid */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {guides.map((guide) => {
            const title = guide.title[language] || guide.title.en;
            const excerpt = guide.excerpt[language] || guide.excerpt.en;
            const categoryName = categoryLabels[guide.category]?.[language] || categoryLabels[guide.category]?.en || guide.category;

            return (
              <article
                key={guide.slug}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-800"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {categoryName}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-zinc-400" />
                      {guide.readTime} {language === "it" ? "lettura" : ""}
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg font-bold text-zinc-900 group-hover:text-emerald-600 transition dark:text-white dark:group-hover:text-emerald-400">
                    <Link href={`/guides/${guide.slug}`}>{title}</Link>
                  </h2>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-3 dark:text-zinc-400">
                    {excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{language === "it" ? "Zero Upload su Server" : "Zero Uploads"}</span>
                  </div>

                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform dark:text-emerald-400"
                  >
                    <span>{language === "it" ? "Leggi Guida" : "Read Guide"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Explore All Tools Callout */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50/60 via-teal-50/30 to-white p-8 text-center dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            {language === "it" ? "Pronto a elaborare i tuoi file?" : "Ready to work with your files?"}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-xs text-zinc-600 dark:text-zinc-400">
            {language === "it"
              ? "Esplora la nostra suite completa di 32 strumenti gratuiti. 100% privati, gratuiti per sempre, senza registrazione."
              : "Browse our complete suite of 32 in-browser utilities. 100% private, free forever, no installation required."}
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-500"
            >
              <span>{language === "it" ? "Esplora tutti i 32 strumenti gratuiti" : "Browse All 32 Free Tools"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
