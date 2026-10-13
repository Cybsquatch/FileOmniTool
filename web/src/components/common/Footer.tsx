"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart, Lock, FileText, Image as ImageIcon, Music, Archive, Code2, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { GUIDES_REGISTRY } from "@/lib/guides-registry";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const pdfTools = TOOLS_REGISTRY.filter((t) => t.category === "pdf");
  const imageTools = TOOLS_REGISTRY.filter((t) => t.category === "image");
  const audioTools = TOOLS_REGISTRY.filter((t) => t.category === "audio");
  const archiveTools = TOOLS_REGISTRY.filter((t) => t.category === "archive");
  const textTools = TOOLS_REGISTRY.filter((t) => t.category === "text");
  const halfText = Math.ceil(textTools.length / 2);

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/80 pt-16 pb-16 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand & Privacy Statement */}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-200/80 pb-12 sm:flex-row sm:items-center dark:border-zinc-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
                File<span className="text-emerald-600 dark:text-emerald-400">OmniTool</span>
              </span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                100% In-Browser
              </span>
            </div>
            <p className="max-w-xl text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {t("footer.desc")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              <BookOpen className="h-4 w-4 text-emerald-600" />
              <span>{language === "it" ? "Articoli & Open-Source" : "Articles & Open-Source"}</span>
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/50 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100/70 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>{t("footer.privacyGuarantee")}</span>
            </Link>
          </div>
        </div>

        {/* Complete Semantic Tool Directory (SEO Internal Links Mesh) */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* PDF Category */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              <FileText className="h-3.5 w-3.5 text-red-500" />
              <span>PDF Suite ({pdfTools.length})</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs">
              {pdfTools.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                  >
                    {tool.title[language] || tool.title.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Category */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              <ImageIcon className="h-3.5 w-3.5 text-teal-500" />
              <span>{t("hero.imageCategory")} ({imageTools.length})</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs">
              {imageTools.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                  >
                    {tool.title[language] || tool.title.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audio & Video Category */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              <Music className="h-3.5 w-3.5 text-purple-500" />
              <span>Audio & Video ({audioTools.length})</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs">
              {audioTools.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                  >
                    {tool.title[language] || tool.title.en}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              <Archive className="h-3.5 w-3.5 text-amber-500" />
              <span>Archivi ZIP ({archiveTools.length})</span>
            </div>
            <ul className="mt-3 space-y-2 text-xs">
              {archiveTools.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                  >
                    {tool.title[language] || tool.title.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Text & Dev Utilities (Column 1) */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              <Code2 className="h-3.5 w-3.5 text-blue-500" />
              <span>Testo & Documenti</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs">
              {textTools.slice(0, halfText).map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                  >
                    {tool.title[language] || tool.title.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Text & Dev Utilities (Column 2) */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              <Lock className="h-3.5 w-3.5 text-emerald-500" />
              <span>Dev & Crittografia</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs">
              {textTools.slice(halfText).map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={`/tools/${tool.id}`}
                    className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                  >
                    {tool.title[language] || tool.title.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guides & SEO Pillar Articles Crawl Block */}
        <div className="mt-12 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t("footer.guidesTitle")}</span>
            </div>
            <Link
              href="/guides"
              className="text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
            >
              {t("footer.allGuides")}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES_REGISTRY.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-lg p-2 text-xs text-zinc-600 transition hover:bg-emerald-50/50 hover:text-emerald-700 dark:text-zinc-400 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
              >
                <span className="font-semibold">{guide.title[language] || guide.title.en}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-200/80 pt-8 sm:flex-row dark:border-zinc-800/80">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} FileOmniTool.com — {t("footer.rights")}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400 sm:mt-0">
            <Link href="/privacy" className="hover:text-emerald-600">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1">
              Zero Server Uploads <Heart className="h-3.5 w-3.5 text-rose-500 fill-current" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
