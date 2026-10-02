"use client";

import React from "react";
import { ShieldCheck, Zap, Lock, Cpu } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export const PrivacyBadge: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent p-6 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/20">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              {t("privacyBanner.title")}
            </h3>
          </div>
          <p className="max-w-2xl text-xs text-zinc-600 dark:text-zinc-300">
            {t("privacyBanner.desc")}
          </p>
        </div>

        <Link
          href="/privacy"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-95"
        >
          <span>{t("privacyBanner.btn")}</span>
          <ShieldCheck className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 border-t border-emerald-200/60 pt-4 sm:grid-cols-3 dark:border-emerald-900/50">
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
          <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>{t("privacyBanner.bullet1")}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
          <Zap className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <span>{t("privacyBanner.bullet2")}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
          <Cpu className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>{t("privacyBanner.bullet3")}</span>
        </div>
      </div>
    </div>
  );
};
