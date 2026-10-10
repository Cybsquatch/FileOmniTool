"use client";

import React from "react";
import Link from "next/link";
import { GuideArticle } from "@/lib/guides-registry";
import { getToolById, TOOLS_REGISTRY } from "@/lib/tools-registry";
import { useLanguage } from "@/lib/i18n/context";
import { AdBanner } from "@/components/ads/AdBanner";
import { 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Wrench,
  BookOpen,
  UserCheck,
  BadgeCheck
} from "lucide-react";

interface GuidePageClientProps {
  guide: GuideArticle;
  otherGuides: GuideArticle[];
}

export const GuidePageClient: React.FC<GuidePageClientProps> = ({ guide, otherGuides }) => {
  const { language } = useLanguage();
  const tool = getToolById(guide.toolId);

  const title = guide.title[language] || guide.title.en;
  const excerpt = guide.excerpt[language] || guide.excerpt.en;
  const intro = guide.intro[language] || guide.intro.en;
  const deepDive = guide.deepDive[language] || guide.deepDive.en;

  const categoryLabels: Record<string, Record<string, string>> = {
    pdf: { en: "PDF SUITE", it: "SUITE PDF" },
    image: { en: "IMAGE SUITE", it: "SUITE IMMAGINI" },
    audio: { en: "AUDIO & VIDEO", it: "AUDIO E VIDEO" },
    document: { en: "DOCUMENT & OFFICE", it: "DOCUMENTI & OFFICE" },
    text: { en: "TEXT & DEV", it: "TESTO & DEV" },
    privacy: { en: "PRIVACY & SECURITY", it: "PRIVACY & SICUREZZA" },
  };

  const currentCategory = categoryLabels[guide.category]?.[language] || categoryLabels[guide.category]?.en || guide.category.toUpperCase();

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
          <Link href="/guides" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            {language === "it" ? "Guide" : "Guides"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-xs sm:max-w-md">
            {title}
          </span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
            {currentCategory}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-zinc-400" />
            {guide.readTime} {language === "it" ? "lettura" : "read"}
          </span>
          <span>•</span>
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{language === "it" ? "100% In-Browser Locale" : "100% Client-Side"}</span>
          </div>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-zinc-900 dark:text-white leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed dark:text-zinc-300">
          {excerpt}
        </p>
      </header>

      {/* Interactive Tool Launcher CTA Card */}
      {tool && (
        <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-r from-emerald-50/80 via-white to-teal-50/60 p-6 shadow-sm dark:border-emerald-600/40 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  <Wrench className="h-4 w-4" />
                  <span>{language === "it" ? "Strumento Gratuito nel Browser" : "Free In-Browser Tool"}</span>
                </div>
                <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                  {tool.title[language] || tool.title.en}
                </h2>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {tool.description[language] || tool.description.en}
                </p>
              </div>

              <Link
                href={`/tools/${tool.id}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 hover:shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                <span>{language === "it" ? "Avvia Strumento Ora" : "Launch Tool Now"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Body */}
      <article className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Introduction Paragraph */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
            {language === "it" ? "Perché l'elaborazione locale è fondamentale" : "Why In-Browser Processing Matters"}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {intro}
          </p>
        </div>

        {/* Step-by-Step Illustrated Guide */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              {language === "it" ? "Procedura Passo-Passo" : "Step-by-Step Walkthrough"}
            </h2>
          </div>

          <div className="mt-8 space-y-6">
            {guide.steps.map((step, idx) => (
              <div
                key={idx}
                id={`step-${idx + 1}`}
                className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-5 dark:border-zinc-800/80 dark:bg-zinc-950/40"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    {step.title[language] || step.title.en}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {step.description[language] || step.description.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              {language === "it" ? "Architettura Tecnica & Sicurezza" : "Technical Architecture & Security"}
            </h2>
          </div>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {deepDive}
          </p>
        </div>

        {/* Mid-Article Ad Banner */}
        <div className="pt-2">
          <AdBanner slot="leaderboard" />
        </div>

        {/* Frequently Asked Questions */}
        <section className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              {language === "it" ? "Domande Frequenti (FAQ)" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {guide.faq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40"
              >
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  {item.question[language] || item.question.en}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.answer[language] || item.answer.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* E-E-A-T Author & Testing Trust Box */}
        <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-50/60 via-white to-zinc-50 p-6 shadow-sm dark:border-emerald-600/30 dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-900">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-extrabold text-xl shadow-md">
              RB
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold text-zinc-900 dark:text-white">
                  Riccardo Belli
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                  <BadgeCheck className="h-3 w-3" />
                  {language === "it" ? "Autore & Sviluppatore" : "Author & Developer"}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {language === "it"
                  ? "Sviluppatore software e appassionato di privacy digitale. Ogni procedura descritta in questa guida è stata testata e verificata personalmente su Windows 11, macOS Sonoma e browser mobili (Safari iOS e Chrome Android) per confermare l'elaborazione al 100% in-browser senza caricamento su server."
                  : "Software developer and web privacy advocate. Every procedure outlined in this guide has been personally field-tested and verified across Windows 11, macOS Sonoma, and mobile browsers (Safari iOS, Chrome Android) to guarantee 100% in-browser processing with zero cloud uploads."}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  {language === "it" ? "Verifica sul campo" : "Field Verified"}
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  {language === "it" ? "Zero log, zero server" : "Zero logs, zero server"}
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  {language === "it" ? "100% Gratuito senza iscrizione" : "100% Free, no signup"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides Section */}
        <section className="pt-4">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              {language === "it" ? "Altre Guide Consigliate" : "More Practical Guides"}
            </h2>
            <Link
              href="/guides"
              className="text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
            >
              {language === "it" ? "Vedi tutte le guide →" : "View all guides →"}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherGuides.map((other) => (
              <Link
                key={other.slug}
                href={`/guides/${other.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-800"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {other.category}
                  </span>
                  <h3 className="mt-1 text-xs font-bold text-zinc-900 group-hover:text-emerald-600 transition dark:text-white dark:group-hover:text-emerald-400 line-clamp-2">
                    {other.title[language] || other.title.en}
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>{language === "it" ? "Leggi Guida" : "Read Guide"}</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};
