"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShieldCheck, Layers, Menu, X, FileText, Image as ImageIcon, Archive, FileCode, Globe, BookOpen, ChevronDown, Sparkles } from "lucide-react";
import { useLanguage, AVAILABLE_LANGUAGES, Language } from "@/lib/i18n/context";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: Language) => {
    setLanguage(newLocale);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);

    let cleanPath = pathname || "/";
    for (const loc of ["en", "es", "fr", "de", "pt"] as const) {
      if (cleanPath === `/${loc}`) {
        cleanPath = "/";
        break;
      } else if (cleanPath.startsWith(`/${loc}/`)) {
        cleanPath = cleanPath.slice(loc.length + 1);
        break;
      }
    }

    const targetUrl = newLocale === "it"
      ? cleanPath
      : `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;

    router.push(targetUrl);
  };

  const getLocalizedHref = (path: string) => {
    if (language === "it") return path;
    return `/${language}${path === "/" ? "" : path}`;
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href={getLocalizedHref("/")} className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
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
            href={getLocalizedHref("/")}
            className="text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            {t("nav.allTools")}
          </Link>
          <Link
            href={getLocalizedHref("/tools/pdf-merge")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            {t("nav.pdf")}
          </Link>
          <Link
            href={getLocalizedHref("/tools/image-convert")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <ImageIcon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            {t("nav.images")}
          </Link>
          <Link
            href={getLocalizedHref("/tools/audio-convert")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <FileCode className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            {t("nav.audio")}
          </Link>
          <Link
            href={getLocalizedHref("/tools/zip-create")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <Archive className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            {t("nav.zip")}
          </Link>
          <Link
            href={getLocalizedHref("/tools/json-csv")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <FileCode className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            {t("nav.data")}
          </Link>
          <Link
            href={getLocalizedHref("/guides")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t("nav.guides")}</span>
          </Link>
          <Link
            href={getLocalizedHref("/articles")}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{language === "it" ? "Articoli" : "Articles"}</span>
          </Link>
          <Link
            href={getLocalizedHref("/privacy")}
            className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/60 px-3 py-1 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            {t("nav.privacy")}
          </Link>

          {/* Desktop Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
              title="Select Language"
              aria-label="Select Language"
            >
              <Globe className="h-3.5 w-3.5 text-emerald-600" />
              <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
              <ChevronDown className={`h-3 w-3 text-zinc-400 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl border border-zinc-200 bg-white py-1.5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                {AVAILABLE_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLanguageChange(l.code)}
                    className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-xs transition ${
                      language === l.code
                        ? "bg-emerald-50 font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {language === l.code && <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Header Right */}
        <div className="flex items-center gap-2 md:hidden">
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
            {/* Language Selector on Mobile */}
            <div className="border-b border-zinc-100 pb-3 dark:border-zinc-800">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Language</p>
              <div className="grid grid-cols-3 gap-1.5">
                {AVAILABLE_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLanguageChange(l.code)}
                    className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-semibold ${
                      language === l.code
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                        : "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link
              href={getLocalizedHref("/")}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              {t("nav.allTools")}
            </Link>
            <Link
              href={getLocalizedHref("/tools/pdf-merge")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <FileText className="h-4 w-4 text-emerald-600" /> {t("nav.pdf")} Tools
            </Link>
            <Link
              href={getLocalizedHref("/tools/image-convert")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <ImageIcon className="h-4 w-4 text-teal-600" /> {t("nav.images")}
            </Link>
            <Link
              href={getLocalizedHref("/tools/zip-create")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <Archive className="h-4 w-4 text-amber-600" /> {t("nav.zip")}
            </Link>
            <Link
              href={getLocalizedHref("/guides")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <BookOpen className="h-4 w-4 text-emerald-600" /> {t("nav.guides")}
            </Link>
            <Link
              href={getLocalizedHref("/articles")}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-zinc-800 dark:text-zinc-200"
            >
              <Sparkles className="h-4 w-4 text-emerald-600" /> {language === "it" ? "Articoli" : "Articles"}
            </Link>
            <Link
              href={getLocalizedHref("/privacy")}
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
