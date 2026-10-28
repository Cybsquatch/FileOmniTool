"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { ArticleItem } from "@/lib/articles-registry";
import { useLanguage, Language } from "@/lib/i18n/context";
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  BookOpen, 
  BadgeCheck 
} from "lucide-react";

interface ArticlesIndexClientProps {
  articles: ArticleItem[];
}

export const ArticlesIndexClient: React.FC<ArticlesIndexClientProps> = ({ articles }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: language === "it" ? "Tutti gli articoli" : "All Articles" },
    { id: "open-source", label: "Open Source" },
    { id: "privacy", label: "Privacy & Sicurezza" },
    { id: "comparisons", label: language === "it" ? "Confronti" : "Comparisons" },
    { id: "tutorials", label: "Tutorial" },
  ];

  const filteredArticles = articles.filter((art) => {
    return selectedCategory === "all" || art.category === selectedCategory;
  });

  const getArticleUrl = (slug: string) => {
    return language === "it" ? `/articles/${slug}` : `/${language}/articles/${slug}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Link href={language === "it" ? "/" : `/${language}`} className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              {language === "it" ? "Articoli & Open-Source Hub" : "Articles & Open-Source Hub"}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl px-4 pt-6 pb-10 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{language === "it" ? "Curated Tech & Open-Source Hub" : "Curated Tech & Open-Source Hub"}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-900 dark:text-white">
            {language === "it" ? "Strumenti Liberi, " : "Free Software, "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              {language === "it" ? "Privacy & Open-Source" : "Privacy & Open-Source"}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            {language === "it"
              ? "Approfondimenti tecnici, recensioni di repository GitHub e guide pratiche per liberarsi da abbonamenti predatorie e proteggere la tua riservatezza digitale."
              : "Technical investigations, GitHub open-source reviews, and actionable guides to escape subscription overload and protect your digital privacy."}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === cat.id
                    ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-900"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredArticles.map((article) => {
              const title = article.title[language] || article.title.it || article.title.en;
              const excerpt = article.excerpt[language] || article.excerpt.it || article.excerpt.en;

              return (
                <article
                  key={article.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-800"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{article.coverEmoji}</span>
                        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                          {article.category}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-zinc-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="mt-4 text-lg font-bold text-zinc-900 group-hover:text-emerald-600 transition dark:text-white dark:group-hover:text-emerald-400 leading-snug">
                      <Link href={getArticleUrl(article.slug)}>{title}</Link>
                    </h2>

                    <p className="mt-2.5 text-xs leading-relaxed text-zinc-600 line-clamp-3 dark:text-zinc-400">
                      {excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                    <div className="flex items-center gap-2 text-[11px] text-zinc-600 dark:text-zinc-400">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                        CS
                      </div>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        {article.author}
                      </span>
                    </div>

                    <Link
                      href={getArticleUrl(article.slug)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform dark:text-emerald-400"
                    >
                      <span>{language === "it" ? "Leggi articolo" : "Read Article"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Sponsor Banner Native (Non-Invasive) */}
        <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
          <AdBanner slot="native" />
        </section>

        {/* CTA Banner */}
        <section className="mx-auto mt-8 mb-16 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50/60 via-teal-50/30 to-white p-8 text-center dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              {language === "it" ? "Vuoi provare i nostri strumenti privati nel browser?" : "Ready to Experience 100% Private In-Browser Tools?"}
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-xs text-zinc-600 dark:text-zinc-400">
              {language === "it"
                ? "Scopri tutti i 75 strumenti gratuiti per PDF, immagini, audio e archivi. Nessun caricamento su server, zero limiti."
                : "Explore all 75 free tools for PDF, images, audio, and archives. Zero server uploads, zero daily limits."}
            </p>
            <div className="mt-6">
              <Link
                href={language === "it" ? "/" : `/${language}`}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-500"
              >
                <span>{language === "it" ? "Esplora tutti i tool" : "Explore All Tools"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom AdSlot Leaderboard */}
        <section className="mx-auto -mt-6 mb-12 max-w-5xl px-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </section>
      </main>

      <Footer />
    </div>
  );
};
