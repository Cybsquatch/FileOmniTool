"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Layers, Menu, X, FileText, Image as ImageIcon, Archive, FileCode, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                File<span className="text-emerald-600 dark:text-emerald-400">OmniTool</span>
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                {t("badge.clientSide")}
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{t("brand.tagline")}</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            {t("nav.allTools")}
          </Link>
          <Link
            href="/tools/pdf-merge"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            {t("nav.pdf")}
          </Link>
          <Link
            href="/tools/image-convert"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <ImageIcon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            {t("nav.images")}
          </Link>
          <Link
            href="/tools/audio-convert"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <FileCode className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            {t("nav.audio")}
          </Link>
          <Link
            href="/tools/zip-create"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <Archive className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            {t("nav.zip")}
          </Link>
          <Link
            href="/tools/json-csv"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <FileCode className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            {t("nav.data")}
          </Link>
          <Link
            href="/privacy"
            className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/60 px-3 py-1 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            {t("nav.privacy")}
          </Link>

          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            title="Switch Language / Cambia Lingua"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-600" />
            <span>{language === "en" ? "🇬🇧 EN" : "🇮🇹 IT"}</span>
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-xs font-bold text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-600" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              {t("nav.allTools")}
            </Link>
            <Link
              href="/tools/pdf-merge"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <FileText className="h-4 w-4 text-emerald-600" /> {t("nav.pdf")} Tools
            </Link>
            <Link
              href="/tools/image-convert"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <ImageIcon className="h-4 w-4 text-teal-600" /> {t("nav.images")}
            </Link>
            <Link
              href="/tools/zip-create"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <Archive className="h-4 w-4 text-amber-600" /> {t("nav.zip")}
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-semibold text-emerald-600 dark:text-emerald-400"
            >
              <ShieldCheck className="h-4 w-4" /> {t("nav.privacy")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
