"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { FileSearch, Download, CheckCircle2, AlertCircle, FileCode } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { formatBytes } from "@/lib/utils";

interface MagicSignature {
  name: string;
  ext: string;
  mime: string;
  description: string;
  match: (bytes: Uint8Array) => boolean;
}

const SIGNATURES: MagicSignature[] = [
  {
    name: "PNG Image",
    ext: "png",
    mime: "image/png",
    description: "Portable Network Graphics lossless bitmap",
    match: (b) => b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47,
  },
  {
    name: "JPEG Image",
    ext: "jpg",
    mime: "image/jpeg",
    description: "Joint Photographic Experts Group photo",
    match: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
  },
  {
    name: "GIF Animation/Image",
    ext: "gif",
    mime: "image/gif",
    description: "Graphics Interchange Format",
    match: (b) => b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38,
  },
  {
    name: "WebP Image",
    ext: "webp",
    mime: "image/webp",
    description: "Google WebP raster image",
    match: (b) => b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50,
  },
  {
    name: "PDF Document",
    ext: "pdf",
    mime: "application/pdf",
    description: "Adobe Portable Document Format",
    match: (b) => b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46,
  },
  {
    name: "ZIP Archive / Office Document",
    ext: "zip",
    mime: "application/zip",
    description: "ZIP archive or modern Office OpenXML container (DOCX, XLSX, PPTX)",
    match: (b) => b[0] === 0x50 && b[1] === 0x4b && (b[2] === 0x03 || b[2] === 0x05 || b[2] === 0x07),
  },
  {
    name: "7-Zip Archive",
    ext: "7z",
    mime: "application/x-7z-compressed",
    description: "7-Zip compressed archive",
    match: (b) => b[0] === 0x37 && b[1] === 0x7a && b[2] === 0xbc && b[3] === 0xaf && b[4] === 0x27 && b[5] === 0x1c,
  },
  {
    name: "RAR Archive",
    ext: "rar",
    mime: "application/vnd.rar",
    description: "Roshal Archive compressed file",
    match: (b) => b[0] === 0x52 && b[1] === 0x61 && b[2] === 0x72 && b[3] === 0x21,
  },
  {
    name: "GZIP Compressed File",
    ext: "gz",
    mime: "application/gzip",
    description: "GNU zip archive",
    match: (b) => b[0] === 0x1f && b[1] === 0x8b,
  },
  {
    name: "MP3 Audio",
    ext: "mp3",
    mime: "audio/mpeg",
    description: "MPEG-1 Audio Layer III",
    match: (b) => (b[0] === 0x49 && b[1] === 0x44 && b[2] === 0x33) || (b[0] === 0xff && (b[1] & 0xe0) === 0xe0),
  },
  {
    name: "MP4 Video",
    ext: "mp4",
    mime: "video/mp4",
    description: "MPEG-4 Part 14 video container",
    match: (b) => b[4] === 0x66 && b[5] === 0x74 && b[6] === 0x79 && b[7] === 0x70,
  },
  {
    name: "WebM / Matroska Video",
    ext: "webm",
    mime: "video/webm",
    description: "Matroska / WebM video media stream",
    match: (b) => b[0] === 0x1a && b[1] === 0x45 && b[2] === 0xdf && b[3] === 0xa3,
  },
  {
    name: "OGG Audio/Video",
    ext: "ogg",
    mime: "audio/ogg",
    description: "Ogg Vorbis multimedia container",
    match: (b) => b[0] === 0x4f && b[1] === 0x67 && b[2] === 0x67 && b[3] === 0x53,
  },
  {
    name: "WebAssembly Binary",
    ext: "wasm",
    mime: "application/wasm",
    description: "WebAssembly executable module",
    match: (b) => b[0] === 0x00 && b[1] === 0x61 && b[2] === 0x73 && b[3] === 0x6d,
  },
  {
    name: "Windows Executable / DLL",
    ext: "exe",
    mime: "application/vnd.microsoft.portable-executable",
    description: "DOS MZ / Windows PE binary",
    match: (b) => b[0] === 0x4d && b[1] === 0x5a,
  },
];

export const FileMagicDetectorTool: React.FC = () => {
  const { language } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [hexHeader, setHexHeader] = useState("");
  const [detectedSig, setDetectedSig] = useState<MagicSignature | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFilesSelected = async (files: File[]) => {
    const selected = files[0];
    if (!selected) return;

    setFile(selected);
    const slice = selected.slice(0, 32);
    const buffer = await slice.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    // Format hex
    const hex = Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0").toUpperCase())
      .join(" ");
    setHexHeader(hex);

    // Match signature
    const match = SIGNATURES.find((sig) => sig.match(bytes));
    setDetectedSig(match || null);

    const url = URL.createObjectURL(selected);
    setDownloadUrl(url);
  };

  const downloadRestoredFile = () => {
    if (!downloadUrl || !file || !detectedSig) return;
    const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = `${baseName}.${detectedSig.ext}`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <Dropzone
        onFilesSelected={handleFilesSelected}
        accept="*/*"
        helperText={language === "it" ? "Trascina qui qualsiasi file (anche senza estensione o sconosciuto) per analizzarne i Magic Bytes" : "Drag & drop any file to inspect its Magic Bytes signature"}
      />

      {file && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{file.name}</h3>
              <p className="text-xs text-zinc-500">{formatBytes(file.size)}</p>
            </div>

            {detectedSig && (
              <button
                onClick={downloadRestoredFile}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <Download className="h-3.5 w-3.5" />
                <span>{language === "it" ? `Ripristina con estensione .${detectedSig.ext}` : `Save with .${detectedSig.ext}`}</span>
              </button>
            )}
          </div>

          {/* Result Card */}
          {detectedSig ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/60 p-5 dark:border-emerald-600/30 dark:bg-emerald-950/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span>{language === "it" ? "Tipo di file identificato con successo!" : "File Type Identified!"}</span>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 text-xs">
                <div>
                  <span className="font-semibold text-zinc-500">{language === "it" ? "Formato:" : "Format:"}</span>
                  <p className="font-bold text-zinc-900 dark:text-white">{detectedSig.name}</p>
                </div>
                <div>
                  <span className="font-semibold text-zinc-500">{language === "it" ? "Estensione Reale:" : "Real Extension:"}</span>
                  <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400">.{detectedSig.ext}</p>
                </div>
                <div>
                  <span className="font-semibold text-zinc-500">MIME Type:</span>
                  <p className="font-mono text-zinc-800 dark:text-zinc-200">{detectedSig.mime}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-amber-300 bg-amber-50/60 p-4 text-xs text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
              <p>
                {language === "it"
                  ? "Nessuna firma binaria comune corrispondente nei primi 32 byte. Il file potrebbe essere testo semplice UTF-8/ASCII o un formato proprietario non standard."
                  : "No known binary signature found in first 32 bytes. File might be plain UTF-8 text or custom proprietary format."}
              </p>
            </div>
          )}

          {/* Hex Header inspection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              {language === "it" ? "Byte Intestazione Esadecimale (Primi 32 byte):" : "Header Hex Bytes (First 32 bytes):"}
            </label>
            <div className="mt-2 rounded-xl border border-zinc-900 bg-zinc-950 p-4 font-mono text-xs text-emerald-400 tracking-wider">
              {hexHeader}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
