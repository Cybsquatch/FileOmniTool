"use client";

import React, { useEffect, useRef, useState } from "react";
import { UploadCloud, File, AlertCircle } from "lucide-react";
import { validateFileSize } from "@/lib/security-guard";
import { useLanguage } from "@/lib/i18n/context";
import { fileMatchesAccept, takePendingFilesOnce } from "@/lib/pwa/shared-files";

interface DropzoneProps {
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  onFilesSelected: (files: File[]) => void;
  helperText?: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  accept,
  multiple = false,
  maxSizeMB = 100,
  onFilesSelected,
  helperText,
}) => {
  const { t } = useLanguage();
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const displayHelperText = helperText || t("dropzone.default");

  const handleFiles = (fileList: FileList | File[] | null) => {
    setErrorMessage(null);
    if (!fileList || fileList.length === 0) return;

    const validFiles: File[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const check = validateFileSize(file, maxSizeMB);
      if (!check.valid) {
        setErrorMessage(check.error || "Invalid file.");
        return;
      }
      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  // Files shared to the installed app (share sheet / "Open with") arrive via
  // /open, which links here with ?shared=1. They are read from IndexedDB on
  // this device and handed to the tool as if the user had picked them.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("shared")) return;
    let cancelled = false;
    takePendingFilesOnce().then((files) => {
      if (cancelled) return;
      params.delete("shared");
      const query = params.toString();
      window.history.replaceState(window.history.state, "", window.location.pathname + (query ? `?${query}` : "") + window.location.hash);
      const accepted = files.filter((file) => fileMatchesAccept(file, accept));
      if (accepted.length > 0) handleFiles(multiple ? accepted : accepted.slice(0, 1));
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = () => {
    setIsDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="w-full">
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
          isDragOver
            ? "border-emerald-500 bg-emerald-50/50 scale-[1.01] dark:border-emerald-400 dark:bg-emerald-950/30"
            : "border-zinc-300 bg-white hover:border-emerald-400 hover:bg-zinc-50/80 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:border-emerald-500 dark:hover:bg-zinc-900"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:scale-110 group-hover:bg-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:group-hover:bg-emerald-900">
          <UploadCloud className="h-7 w-7" />
        </div>

        <h4 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">
          {displayHelperText}
        </h4>
        <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          {t("dropzone.maxSize")}: {maxSizeMB}MB {t("dropzone.perFile")}
        </p>

        <button
          type="button"
          className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
        >
          <File className="h-3.5 w-3.5" />
          <span>{t("dropzone.browseBtn")}</span>
        </button>
      </div>

      {errorMessage && (
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
