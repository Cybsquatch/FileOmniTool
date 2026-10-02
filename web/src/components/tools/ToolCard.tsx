"use client";

import React from "react";
import Link from "next/link";
import { ToolDefinition } from "@/lib/tools-registry";
import { useLanguage } from "@/lib/i18n/context";
import {
  FilePlus2,
  Split,
  RefreshCw,
  Minimize2,
  FolderArchive,
  ArchiveRestore,
  ShieldCheck,
  Table,
  Volume2,
  Scissors,
  Video,
  Image as ImageIcon,
  QrCode,
  RotateCw,
  ArrowRight,
  FileSpreadsheet,
  FileText,
  EyeOff,
  Binary,
  FileCode,
  GitCompare,
  Type,
  ListFilter,
  AlignLeft,
  Scaling,
  Stamp,
  Pipette,
  Sliders,
  KeyRound,
  Fingerprint,
  FileImage,
  Sparkles
} from "lucide-react";

interface ToolCardProps {
  tool: ToolDefinition;
}

const ICON_MAP: Record<string, React.ElementType> = {
  FilePlus2,
  Split,
  RefreshCw,
  Minimize2,
  FolderArchive,
  ArchiveRestore,
  ShieldCheck,
  Table,
  Volume2,
  Scissors,
  Video,
  ImageIcon,
  QrCode,
  RotateCw,
  FileSpreadsheet,
  FileText,
  EyeOff,
  Binary,
  FileCode,
  GitCompare,
  Type,
  ListFilter,
  AlignLeft,
  Scaling,
  Stamp,
  Pipette,
  Sliders,
  KeyRound,
  Fingerprint,
  FileImage,
  Sparkles
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { language, t } = useLanguage();
  const IconComponent = ICON_MAP[tool.iconName] || FilePlus2;

  // Colore categoria
  const getCategoryTheme = () => {
    switch (tool.category) {
      case "pdf":
        return {
          bg: "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400",
          border: "hover:border-red-300 dark:hover:border-red-800"
        };
      case "image":
        return {
          bg: "bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400",
          border: "hover:border-teal-300 dark:hover:border-teal-800"
        };
      case "audio":
        return {
          bg: "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400",
          border: "hover:border-purple-300 dark:hover:border-purple-800"
        };
      case "archive":
        return {
          bg: "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
          border: "hover:border-amber-300 dark:hover:border-amber-800"
        };
      case "text":
        return {
          bg: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
          border: "hover:border-blue-300 dark:hover:border-blue-800"
        };
    }
  };

  const theme = getCategoryTheme();
  const titleText = tool.title[language] || tool.title.en;
  const descText = tool.description[language] || tool.description.en;
  const badgeText = tool.badge ? (tool.badge[language] || tool.badge.en) : null;

  return (
    <Link
      href={`/tools/${tool.id}`}
      className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70 ${theme.border}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${theme.bg}`}>
            <IconComponent className="h-6 w-6 transition group-hover:scale-110" />
          </div>
          {badgeText && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {badgeText}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-base font-bold text-zinc-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
          {titleText}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-500 line-clamp-2 dark:text-zinc-400">
          {descText}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
        <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          {t("tools.inBrowser")}
        </span>
        <div className="flex items-center gap-1 text-xs font-semibold text-zinc-400 transition group-hover:translate-x-1 group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-white">
          <span>{t("tools.useTool")}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  );
};
