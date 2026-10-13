"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Sparkles, Wrench, BookOpen, Layers } from "lucide-react";
import { TOOLS_REGISTRY, ToolDefinition } from "@/lib/tools-registry";
import { ARTICLES_REGISTRY, ArticleItem } from "@/lib/articles-registry";
import { useLanguage } from "@/lib/i18n/context";

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const filteredTools = q
    ? TOOLS_REGISTRY.filter((tool) => {
        const title = (tool.title[language] || tool.title.it || tool.title.en).toLowerCase();
        const desc = (tool.description[language] || tool.description.it || tool.description.en).toLowerCase();
        const kw = (tool.seoKeyword[language] || tool.seoKeyword.it || tool.seoKeyword.en).toLowerCase();
        return title.includes(q) || desc.includes(q) || kw.includes(q) || tool.id.includes(q);
      }).slice(0, 8)
    : TOOLS_REGISTRY.filter((t) => t.popular).slice(0, 6);

  const filteredArticles = q
    ? ARTICLES_REGISTRY.filter((art) => {
        const title = (art.title[language] || art.title.it || art.title.en).toLowerCase();
        const excerpt = (art.excerpt[language] || art.excerpt.it || art.excerpt.en).toLowerCase();
        return title.includes(q) || excerpt.includes(q);
      }).slice(0, 3)
    : [];

  const handleSelectTool = (toolId: string) => {
    const url = language === "it" ? `/tools/${toolId}` : `/${language}/tools/${toolId}`;
    router.push(url);
    onClose();
  };

  const handleSelectArticle = (slug: string) => {
    const url = language === "it" ? `/articles/${slug}` : `/${language}/articles/${slug}`;
    router.push(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-zinc-200 px-4 dark:border-zinc-800">
          <Search className="h-5 w-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === "it" ? "Cerca tra 77 strumenti e articoli (es. unisci pdf, exif, schermo)..." : "Search 77 tools and articles..."}
            className="w-full bg-transparent px-3 py-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="rounded p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <span className="ml-2 hidden rounded border border-zinc-200 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-400 sm:inline-block dark:border-zinc-700">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Tools List */}
          <div>
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center justify-between">
              <span>{language === "it" ? "Strumenti Disponibili" : "Available Tools"}</span>
              <span>{filteredTools.length}</span>
            </div>

            {filteredTools.length > 0 ? (
              <div className="space-y-1">
                {filteredTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => handleSelectTool(tool.id)}
                    className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 dark:bg-zinc-800 dark:text-zinc-300 dark:group-bg-emerald-900 dark:group-text-emerald-300">
                        <Wrench className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                            {tool.title[language] || tool.title.it || tool.title.en}
                          </span>
                          <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                            {tool.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 line-clamp-1 dark:text-zinc-400">
                          {tool.description[language] || tool.description.it || tool.description.en}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:text-emerald-600 transition" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="px-3 py-4 text-center text-xs text-zinc-400">
                {language === "it" ? "Nessuno strumento trovato per questa ricerca." : "No tools found matching your query."}
              </p>
            )}
          </div>

          {/* Articles Section if query matches */}
          {filteredArticles.length > 0 && (
            <div className="border-t border-zinc-100 pt-3 dark:border-zinc-800">
              <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {language === "it" ? "Articoli & Approfondimenti" : "Articles & Deep Dives"}
              </div>
              <div className="space-y-1">
                {filteredArticles.map((art) => (
                  <button
                    key={art.slug}
                    onClick={() => handleSelectArticle(art.slug)}
                    className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{art.coverEmoji}</span>
                      <div>
                        <span className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                          {art.title[language] || art.title.it || art.title.en}
                        </span>
                        <p className="text-[11px] text-zinc-500 line-clamp-1 dark:text-zinc-400">
                          {art.excerpt[language] || art.excerpt.it || art.excerpt.en}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:text-emerald-600 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50 px-4 py-2.5 text-[11px] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center gap-2">
            <span className="font-medium text-emerald-600 dark:text-emerald-400">FileOmniTool</span>
            <span>•</span>
            <span>100% In-Browser Privacy</span>
          </div>
          <span className="text-[10px] text-zinc-400">77 Strumenti • 5 Articoli</span>
        </div>
      </div>
    </div>
  );
};
