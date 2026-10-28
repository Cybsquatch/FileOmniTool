"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PrivacyBadge } from "@/components/common/PrivacyBadge";
import { ToolCard } from "@/components/tools/ToolCard";
import { AdBanner } from "@/components/ads/AdBanner";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { useLanguage, Language } from "@/lib/i18n/context";
import { Search, Sparkles, Shield, Cpu, Zap, Lock, ArrowRight } from "lucide-react";

export function HomePageClient() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getToolUrl = (toolId: string) => {
    return language === "it" ? `/tools/${toolId}` : `/${language}/tools/${toolId}`;
  };

  const filteredTools = TOOLS_REGISTRY.filter((tool) => {
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const title = tool.title[language] || tool.title.en;
    const desc = tool.description[language] || tool.description.en;
    const keyword = tool.seoKeyword[language] || tool.seoKeyword.en;

    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      keyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl px-4 pt-10 pb-12 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t("hero.pill")}</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {t("hero.title1")}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            {t("hero.subtitle")}
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative flex items-center">
              <Search className="pointer-events-none absolute left-4 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("hero.searchPlaceholder")}
                className="w-full rounded-2xl border border-zinc-200 bg-white py-3.5 pr-4 pl-12 text-sm shadow-sm transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: t("hero.all") },
              { id: "pdf", label: t("hero.pdfCategory") },
              { id: "image", label: t("hero.imageCategory") },
              { id: "audio", label: t("hero.audioCategory") },
              { id: "archive", label: t("hero.archiveCategory") },
              { id: "text", label: t("hero.textCategory") },
            ].map((cat) => (
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

        {/* Privacy Highlight Banner */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PrivacyBadge />
        </section>

        {/* Tools Grid Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("tools.sectionTitle")} ({filteredTools.length})
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {t("tools.sectionSubtitle")}
              </p>
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-800">
              <p className="text-sm text-zinc-500">{t("tools.noResults")} &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-3 text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
              >
                {t("tools.resetFilters")}
              </button>
            </div>
          )}
        </section>

        {/* Mid-Page Ad Slot */}
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </section>

        {/* Why FileOmniTool Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
              {t("why.title")}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
              {t("why.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">{t("why.card1.title")}</h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed dark:text-zinc-400">
                {t("why.card1.desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">{t("why.card2.title")}</h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed dark:text-zinc-400">
                {t("why.card2.desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">{t("why.card3.title")}</h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed dark:text-zinc-400">
                {t("why.card3.desc")}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white">{t("why.card4.title")}</h3>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed dark:text-zinc-400">
                {t("why.card4.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Pre-Directory Native Recommendations (Non-Invasive, High Viewability) */}
        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <AdBanner slot="native" />
        </section>

        {/* SEO Crawl Hub: Direct static links with high-intent keywords for Googlebot indexing */}
        <section className="border-t border-zinc-200/80 bg-white py-14 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-8">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {t("home.allToolsTitle")}
                </h2>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {t("home.allToolsSubtitle")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TOOLS_REGISTRY.map((tool) => (
                <Link
                  key={tool.id}
                  href={getToolUrl(tool.id)}
                  className="group flex flex-col justify-between rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 transition hover:border-emerald-300 hover:bg-white hover:shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:hover:border-emerald-800 dark:hover:bg-zinc-900"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {tool.category}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                      {tool.title[language] || tool.title.en}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 line-clamp-2 dark:text-zinc-400">
                      {tool.description[language] || tool.description.en}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform dark:text-emerald-400">
                    <span>{t("tools.useTool")}</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
