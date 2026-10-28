"use client";

import React, { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { FileText, Image as ImageIcon, Music, FolderArchive, FileCode, ShieldCheck, ArrowRight } from "lucide-react";
import type { Language } from "@/lib/i18n/context";
import { fileMatchesAccept, peekPendingFiles, savePendingFiles } from "@/lib/pwa/shared-files";
import { PWA_STRINGS } from "@/lib/pwa/strings";
import { LAST_LOCALE_KEY } from "@/lib/pwa/install";

export interface ChooserTool {
  id: string;
  category: string;
  acceptedMime: string;
  popular: boolean;
  title: Partial<Record<Language, string>>;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  pdf: FileText,
  image: ImageIcon,
  audio: Music,
  archive: FolderArchive,
  text: FileCode,
};

const LANGS: Language[] = ["it", "en", "es", "fr", "de", "pt"];

interface LaunchParams {
  files: Array<{ kind: string; getFile: () => Promise<File> }>;
}

declare global {
  interface Window {
    launchQueue?: { setConsumer: (consumer: (params: LaunchParams) => void) => void };
  }
}

function detectLanguage(): Language {
  try {
    for (const key of [LAST_LOCALE_KEY, "fileomnitool_lang"]) {
      const stored = localStorage.getItem(key) as Language | null;
      if (stored && LANGS.includes(stored)) return stored;
    }
  } catch {
    // Storage unavailable
  }
  const nav = (navigator.language || "it").slice(0, 2) as Language;
  return LANGS.includes(nav) ? nav : "en";
}

const subscribeNoop = () => () => {};

// A tool is a dedicated match when the files fit its accept list without its "*/*" catch-all.
function isDedicated(tool: ChooserTool, files: File[]) {
  const specific = tool.acceptedMime
    .split(",")
    .filter((t) => t.trim() !== "*/*")
    .join(",");
  return specific !== "" && files.every((file) => fileMatchesAccept(file, specific));
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function OpenWithClient({ tools }: { tools: ChooserTool[] }) {
  const language = useSyncExternalStore<Language>(subscribeNoop, detectLanguage, () => "it");
  const [files, setFiles] = useState<File[] | null>(null);

  useEffect(() => {
    let launched = false;
    if (window.launchQueue) {
      // Desktop "Open with": files come straight from the OS via launchQueue.
      window.launchQueue.setConsumer(async (params) => {
        const handles = (params.files || []).filter((h) => h.kind === "file");
        if (handles.length === 0) return;
        launched = true;
        const opened = await Promise.all(handles.map((h) => h.getFile()));
        await savePendingFiles(opened);
        setFiles(opened);
      });
    }

    // Share target: the service worker already stored the files in IndexedDB.
    peekPendingFiles().then((pending) => {
      if (!launched) setFiles((current) => current ?? pending);
    });
  }, []);

  const s = PWA_STRINGS[language];
  const prefix = language === "it" ? "" : `/${language}`;

  const { matching, generic } = useMemo(() => {
    if (!files || files.length === 0) return { matching: [], generic: [] };
    const fits = tools.filter((tool) => files.every((file) => fileMatchesAccept(file, tool.acceptedMime)));
    return {
      matching: fits.filter((t) => isDedicated(t, files)).sort((a, b) => Number(b.popular) - Number(a.popular)),
      generic: fits.filter((t) => !isDedicated(t, files)),
    };
  }, [files, tools]);

  const renderTool = (tool: ChooserTool) => {
    const Icon = CATEGORY_ICONS[tool.category] || FileCode;
    return (
      <li key={tool.id}>
        <Link
          href={`${prefix}/tools/${tool.id}?shared=1`}
          className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-medium text-zinc-900 transition hover:border-emerald-400 hover:bg-emerald-50/50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-emerald-500 dark:hover:bg-emerald-950/30"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            <Icon className="h-4 w-4" />
          </span>
          <span className="flex-1">{tool.title[language] || tool.title.en}</span>
          <ArrowRight className="h-4 w-4 text-zinc-400" />
        </Link>
      </li>
    );
  };

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
      <Link href={prefix || "/"} className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
        FileOmniTool
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">{s.openTitle}</h1>

      {files === null && <p className="mt-4 text-sm text-zinc-500">{s.openLoading}</p>}

      {files !== null && files.length === 0 && (
        <div className="mt-6 rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
          <p>{s.openEmpty}</p>
          <Link href={prefix || "/"} className="mt-4 inline-flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400">
            {s.openBackHome} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {files !== null && files.length > 0 && (
        <>
          <ul className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            {files.map((file, i) => (
              <li key={i} className="truncate">
                <span className="font-semibold">{file.name}</span> <span className="text-zinc-400">· {formatSize(file.size)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" /> {s.openPrivacy}
          </p>

          <h2 className="mt-8 text-sm font-semibold text-zinc-500 dark:text-zinc-400">{s.openSubtitle}</h2>
          {matching.length > 0 ? (
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">{matching.map(renderTool)}</ul>
          ) : (
            <p className="mt-3 text-sm text-zinc-500">{s.openNoMatch}</p>
          )}

          {generic.length > 0 && (
            <>
              <h2 className="mt-8 text-sm font-semibold text-zinc-500 dark:text-zinc-400">{s.openOtherTools}</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">{generic.map(renderTool)}</ul>
            </>
          )}
        </>
      )}
    </main>
  );
}
