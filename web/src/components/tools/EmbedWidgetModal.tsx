"use client";

import React, { useState } from "react";
import { Code2, Copy, Check, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

interface EmbedWidgetModalProps {
  toolId: string;
  toolTitle: string;
}

export const EmbedWidgetModal: React.FC<EmbedWidgetModalProps> = ({ toolId, toolTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const embedCode = `<iframe src="https://www.fileomnitool.com/tools/${toolId}" width="100%" height="720" frameborder="0" style="border-radius:12px;border:1px solid #e4e4e7;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);" title="${toolTitle} - FileOmniTool"></iframe>
<p style="font-size:12px;color:#71717a;text-align:center;margin-top:6px;">Free & Private tool powered by <a href="https://www.fileomnitool.com" target="_blank" rel="noopener" style="color:#059669;text-decoration:underline;font-weight:600;">FileOmniTool</a> (100% In-Browser, Zero Server Uploads)</p>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy embed code", err);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-semibold text-zinc-700 shadow-sm transition hover:border-emerald-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-700"
        title="Embed this tool on your website"
      >
        <Code2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>{t("tool.embedBtn")}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  <Code2 className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {t("tool.embedTitle")}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("tool.embedDesc")}
            </p>

            {/* Snippet display */}
            <div className="relative mt-4">
              <pre className="max-h-48 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-[11px] font-mono leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                {embedCode}
              </pre>
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Includes responsive layout and backlink attribution
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>{t("tool.embedCopied")}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>{t("tool.embedCopy")}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
