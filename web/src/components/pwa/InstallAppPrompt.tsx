"use client";

import React, { useState, useSyncExternalStore } from "react";
import { Download, WifiOff, X, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { PWA_STRINGS } from "@/lib/pwa/strings";
import {
  INSTALL_AVAILABLE_EVENT,
  getDeferredInstallPrompt,
  isLocalePrecached,
  isStandalone,
  precacheLocale,
  setDeferredInstallPrompt,
} from "@/lib/pwa/install";

const DISMISS_KEY = "fileomnitool_install_dismissed";
const DISMISS_FOR_MS = 30 * 24 * 60 * 60 * 1000;

type OfflineState = "idle" | "saving" | "ready";

type Eligibility = "hidden" | "show" | "show-ios" | "precached" | "precached-ios";

function readEligibility(): Eligibility {
  if (isStandalone() || !("serviceWorker" in navigator)) return "hidden";
  try {
    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (Date.now() - dismissedAt < DISMISS_FOR_MS) return "hidden";
  } catch {
    // Storage unavailable: show the card
  }
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) ? "-ios" : "";
  return `${isLocalePrecached() ? "precached" : "show"}${ios}` as Eligibility;
}

const subscribeNoop = () => () => {};
const subscribeInstall = (onChange: () => void) => {
  window.addEventListener(INSTALL_AVAILABLE_EVENT, onChange);
  return () => window.removeEventListener(INSTALL_AVAILABLE_EVENT, onChange);
};

// Inline, dismissible card (never a modal) offering install + offline use.
export function InstallAppPrompt() {
  const { language } = useLanguage();
  const s = PWA_STRINGS[language] || PWA_STRINGS.en;
  const eligibility = useSyncExternalStore<Eligibility>(subscribeNoop, readEligibility, () => "hidden");
  const canInstall = useSyncExternalStore(subscribeInstall, () => !!getDeferredInstallPrompt(), () => false);
  const [dismissed, setDismissed] = useState(false);
  const [offlineAction, setOfflineAction] = useState<OfflineState | null>(null);

  const visible = eligibility !== "hidden" && !dismissed;
  const isIos = eligibility.endsWith("-ios");
  const offline: OfflineState = offlineAction ?? (eligibility.startsWith("precached") ? "ready" : "idle");

  // Already offline-ready from an earlier visit and nothing to install: stay out of the way.
  if (!visible || (offlineAction === null && offline === "ready" && !canInstall)) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // Storage unavailable
    }
    setDismissed(true);
  };

  const install = async () => {
    const prompt = getDeferredInstallPrompt();
    if (!prompt) return;
    await prompt.prompt();
    const choice = await prompt.userChoice;
    setDeferredInstallPrompt(null);
    if (choice.outcome === "accepted") setDismissed(true);
  };

  const makeOffline = async () => {
    setOfflineAction("saving");
    const ok = await precacheLocale().catch(() => false);
    setOfflineAction(ok ? "ready" : "idle");
  };

  return (
    <aside
      aria-label={s.installTitle}
      className="relative flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 pr-10 text-left sm:flex-row sm:items-center dark:border-emerald-900/60 dark:bg-emerald-950/30"
    >
      <div className="flex-1">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">{s.installTitle}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
          {s.installDesc}
          {!canInstall && isIos && <> {s.iosHint}</>}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2">
        {canInstall && (
          <button
            type="button"
            onClick={install}
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <Download className="h-3.5 w-3.5" />
            {s.installBtn}
          </button>
        )}
        {offline === "ready" ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {s.offlineReady}
          </span>
        ) : (
          <button
            type="button"
            onClick={makeOffline}
            disabled={offline === "saving"}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-800 transition hover:border-emerald-400 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <WifiOff className="h-3.5 w-3.5" />
            {offline === "saving" ? s.offlineSaving : s.offlineBtn}
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label={s.dismiss}
        title={s.dismiss}
        className="absolute right-2 top-2 rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
      >
        <X className="h-4 w-4" />
      </button>
    </aside>
  );
}
