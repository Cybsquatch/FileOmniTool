"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/70 pt-12 pb-16 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Privacy Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                File<span className="text-emerald-600 dark:text-emerald-400">OmniTool</span>
              </span>
              <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Client-Side
              </span>
            </div>
            <p className="max-w-md text-sm text-zinc-500 dark:text-zinc-400">
              {t("footer.desc")}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <Lock className="h-4 w-4" />
              <span>{t("footer.privacyNote")}</span>
            </div>
          </div>

          {/* Quick Tools Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider dark:text-white">
              {t("footer.popular")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/tools/pdf-merge" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t("nav.pdf")} Merge
                </Link>
              </li>
              <li>
                <Link href="/tools/pdf-split" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t("nav.pdf")} Split
                </Link>
              </li>
              <li>
                <Link href="/tools/image-convert" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t("nav.images")} Convert
                </Link>
              </li>
              <li>
                <Link href="/tools/image-compress" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t("nav.images")} Compress
                </Link>
              </li>
              <li>
                <Link href="/tools/zip-create" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t("nav.zip")} Create
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & AdSense Compliance */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider dark:text-white">
              {t("footer.info")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  {t("footer.privacyGuarantee")}
                </Link>
              </li>
              <li>
                <span className="text-zinc-400 dark:text-zinc-500">{t("footer.cookiePolicy")}</span>
              </li>
              <li>
                <span className="text-zinc-400 dark:text-zinc-500">{t("footer.terms")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-200 pt-8 sm:flex-row dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} FileOmniTool. {t("footer.rights")}
          </p>
          <p className="mt-4 flex items-center gap-1 text-xs text-zinc-400 sm:mt-0">
            {t("footer.builtWith")} <Heart className="h-3.5 w-3.5 text-red-500 fill-current inline ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};
