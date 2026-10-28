"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { useLanguage, type Language } from "@/lib/i18n/context";
import { convertHeicFile, isHeifFile, preloadHeicDecoder, type HeicOutputFormat } from "@/lib/client-engines/heic-engine";
import { AdBanner } from "../ads/AdBanner";
import { ImageIcon, Download, CheckCircle2, Loader2, RefreshCw, Trash2, ShieldCheck, AlertCircle } from "lucide-react";

const STRINGS: Record<Language, Record<string, string>> = {
  it: {
    drop: "Trascina qui le foto HEIC/HEIF dell'iPhone (anche più di una)",
    privacy: "Conversione 100% locale: le tue foto vengono decodificate nel browser con un decoder WebAssembly e non vengono mai caricate online.",
    selected: "Foto selezionate",
    removeAll: "Rimuovi tutte",
    format: "Formato di uscita",
    quality: "Qualità JPG",
    keepExif: "Mantieni i metadati EXIF (data, fotocamera, posizione GPS)",
    stripHint: "Disattivato = metadati e posizione GPS rimossi per proteggere la privacy.",
    convert: "Converti",
    photos: "foto",
    loadingDecoder: "Caricamento decoder HEIC...",
    converting: "Conversione",
    done: "Conversione completata!",
    failed: "non convertibile",
    notHeic: "Non è un file HEIC/HEIF valido",
    downloadOne: "Scarica",
    downloadAll: "Scarica tutte (ZIP)",
    again: "Converti altre foto",
    zero: "Zero dati trasferiti online",
    exifKept: "EXIF mantenuto",
    exifStripped: "EXIF rimosso",
  },
  en: {
    drop: "Drop your iPhone HEIC/HEIF photos here (multiple allowed)",
    privacy: "100% local conversion: your photos are decoded in the browser by a WebAssembly decoder and are never uploaded.",
    selected: "Selected photos",
    removeAll: "Remove all",
    format: "Output format",
    quality: "JPG quality",
    keepExif: "Keep EXIF metadata (date, camera, GPS location)",
    stripHint: "Off = metadata and GPS location removed to protect your privacy.",
    convert: "Convert",
    photos: "photos",
    loadingDecoder: "Loading HEIC decoder...",
    converting: "Converting",
    done: "Conversion complete!",
    failed: "could not be converted",
    notHeic: "Not a valid HEIC/HEIF file",
    downloadOne: "Download",
    downloadAll: "Download all (ZIP)",
    again: "Convert more photos",
    zero: "Zero data sent online",
    exifKept: "EXIF kept",
    exifStripped: "EXIF removed",
  },
  es: {
    drop: "Arrastra aquí las fotos HEIC/HEIF del iPhone (varias a la vez)",
    privacy: "Conversión 100% local: tus fotos se decodifican en el navegador con WebAssembly y nunca se suben a internet.",
    selected: "Fotos seleccionadas",
    removeAll: "Quitar todas",
    format: "Formato de salida",
    quality: "Calidad JPG",
    keepExif: "Mantener metadatos EXIF (fecha, cámara, ubicación GPS)",
    stripHint: "Desactivado = metadatos y ubicación GPS eliminados para proteger tu privacidad.",
    convert: "Convertir",
    photos: "fotos",
    loadingDecoder: "Cargando decodificador HEIC...",
    converting: "Convirtiendo",
    done: "¡Conversión completada!",
    failed: "no se pudo convertir",
    notHeic: "No es un archivo HEIC/HEIF válido",
    downloadOne: "Descargar",
    downloadAll: "Descargar todas (ZIP)",
    again: "Convertir más fotos",
    zero: "Cero datos enviados a internet",
    exifKept: "EXIF conservado",
    exifStripped: "EXIF eliminado",
  },
  fr: {
    drop: "Déposez ici vos photos HEIC/HEIF d'iPhone (plusieurs possibles)",
    privacy: "Conversion 100 % locale : vos photos sont décodées dans le navigateur par un décodeur WebAssembly et ne sont jamais envoyées en ligne.",
    selected: "Photos sélectionnées",
    removeAll: "Tout retirer",
    format: "Format de sortie",
    quality: "Qualité JPG",
    keepExif: "Conserver les métadonnées EXIF (date, appareil, position GPS)",
    stripHint: "Désactivé = métadonnées et position GPS supprimées pour protéger votre vie privée.",
    convert: "Convertir",
    photos: "photos",
    loadingDecoder: "Chargement du décodeur HEIC...",
    converting: "Conversion",
    done: "Conversion terminée !",
    failed: "conversion impossible",
    notHeic: "Fichier HEIC/HEIF non valide",
    downloadOne: "Télécharger",
    downloadAll: "Tout télécharger (ZIP)",
    again: "Convertir d'autres photos",
    zero: "Aucune donnée envoyée en ligne",
    exifKept: "EXIF conservé",
    exifStripped: "EXIF supprimé",
  },
  de: {
    drop: "iPhone-Fotos im HEIC/HEIF-Format hier ablegen (mehrere möglich)",
    privacy: "100 % lokale Konvertierung: Ihre Fotos werden im Browser per WebAssembly dekodiert und nie hochgeladen.",
    selected: "Ausgewählte Fotos",
    removeAll: "Alle entfernen",
    format: "Ausgabeformat",
    quality: "JPG-Qualität",
    keepExif: "EXIF-Metadaten behalten (Datum, Kamera, GPS-Standort)",
    stripHint: "Aus = Metadaten und GPS-Standort werden zum Schutz Ihrer Privatsphäre entfernt.",
    convert: "Konvertieren",
    photos: "Fotos",
    loadingDecoder: "HEIC-Decoder wird geladen...",
    converting: "Konvertiere",
    done: "Konvertierung abgeschlossen!",
    failed: "konnte nicht konvertiert werden",
    notHeic: "Keine gültige HEIC/HEIF-Datei",
    downloadOne: "Herunterladen",
    downloadAll: "Alle herunterladen (ZIP)",
    again: "Weitere Fotos konvertieren",
    zero: "Keine Daten online übertragen",
    exifKept: "EXIF behalten",
    exifStripped: "EXIF entfernt",
  },
  pt: {
    drop: "Arraste aqui as fotos HEIC/HEIF do iPhone (várias de uma vez)",
    privacy: "Conversão 100% local: suas fotos são decodificadas no navegador com WebAssembly e nunca são enviadas online.",
    selected: "Fotos selecionadas",
    removeAll: "Remover todas",
    format: "Formato de saída",
    quality: "Qualidade JPG",
    keepExif: "Manter metadados EXIF (data, câmera, localização GPS)",
    stripHint: "Desativado = metadados e localização GPS removidos para proteger sua privacidade.",
    convert: "Converter",
    photos: "fotos",
    loadingDecoder: "Carregando decodificador HEIC...",
    converting: "Convertendo",
    done: "Conversão concluída!",
    failed: "não pôde ser convertida",
    notHeic: "Não é um arquivo HEIC/HEIF válido",
    downloadOne: "Baixar",
    downloadAll: "Baixar todas (ZIP)",
    again: "Converter mais fotos",
    zero: "Zero dados enviados online",
    exifKept: "EXIF mantido",
    exifStripped: "EXIF removido",
  },
};

interface Converted {
  name: string;
  blob: Blob | null;
  url: string;
  size: number;
  originalSize: number;
  exifKept: boolean;
  error?: string;
}

function triggerDownload(url: string, name: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export const HeicToJpgTool: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  const [files, setFiles] = useState<File[]>([]);
  const [format, setFormat] = useState<HeicOutputFormat>("image/jpeg");
  const [quality, setQuality] = useState(0.92);
  const [keepExif, setKeepExif] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState("");
  const [results, setResults] = useState<Converted[] | null>(null);

  const ext = format === "image/png" ? "png" : "jpg";

  const handleFilesSelected = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    setResults(null);
    // Il decoder WASM inizia a scaricarsi (dal nostro dominio) mentre l'utente sceglie le opzioni
    preloadHeicDecoder();
  };

  const removeFile = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleConvert = async () => {
    if (files.length === 0) return;
    setProcessing(true);
    setStatus(s.loadingDecoder);
    const out: Converted[] = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const baseName = sanitizeFileName(f.name).replace(/\.(heic|heif|hif)$/i, "");
      setStatus(`${s.converting} ${i + 1}/${files.length}...`);
      try {
        if (!(await isHeifFile(f))) throw new Error(s.notHeic);
        const { blob, exifKept } = await convertHeicFile(f, { format, quality, keepExif });
        out.push({
          name: `${baseName}.${ext}`,
          blob,
          url: URL.createObjectURL(blob),
          size: blob.size,
          originalSize: f.size,
          exifKept,
        });
      } catch (err: unknown) {
        console.error(err);
        out.push({
          name: sanitizeFileName(f.name),
          blob: null,
          url: "",
          size: 0,
          originalSize: f.size,
          exifKept: false,
          error: err instanceof Error && err.message === s.notHeic ? s.notHeic : s.failed,
        });
      }
    }
    setResults(out);
    setProcessing(false);
    setStatus("");
  };

  const handleDownloadAll = async () => {
    if (!results) return;
    const ok = results.filter((r) => !r.error);
    if (ok.length === 1) {
      triggerDownload(ok[0].url, ok[0].name);
      return;
    }
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    const used = new Set<string>();
    for (const r of ok) {
      let name = r.name;
      for (let n = 2; used.has(name); n++) name = r.name.replace(/(\.\w+)$/, `_${n}$1`);
      used.add(name);
      if (r.blob) zip.file(name, r.blob);
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    triggerDownload(url, `heic_${ext}_FileOmniTool.zip`);
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const resetAll = () => {
    results?.forEach((r) => r.url && URL.revokeObjectURL(r.url));
    setFiles([]);
    setResults(null);
  };

  const okCount = results?.filter((r) => !r.error).length ?? 0;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>{s.privacy}</span>
      </div>

      {!results ? (
        <>
          <Dropzone
            accept=".heic,.heif,.hif,image/heic,image/heif"
            multiple={true}
            maxSizeMB={100}
            onFilesSelected={handleFilesSelected}
            helperText={s.drop}
          />

          {files.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {s.selected} ({files.length})
                </h4>
                <button onClick={resetAll} disabled={processing} className="text-xs text-red-600 hover:underline disabled:opacity-50 dark:text-red-400">
                  {s.removeAll}
                </button>
              </div>

              <ul className="mt-3 max-h-48 divide-y divide-zinc-100 overflow-y-auto dark:divide-zinc-800/60">
                {files.map((file, idx) => (
                  <li key={idx} className="flex items-center justify-between py-2 text-xs">
                    <div className="flex items-center gap-2.5 truncate pr-2">
                      <ImageIcon className="h-4 w-4 shrink-0 text-sky-500" />
                      <span className="truncate font-medium text-zinc-800 dark:text-zinc-200">{sanitizeFileName(file.name)}</span>
                      <span className="text-zinc-400">({formatBytes(file.size)})</span>
                    </div>
                    <button
                      onClick={() => removeFile(idx)}
                      disabled={processing}
                      className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-red-600 dark:hover:bg-zinc-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.format}</div>
                  <div className="mt-2 inline-flex rounded-xl border border-zinc-200 p-1 dark:border-zinc-700">
                    {(["image/jpeg", "image/png"] as HeicOutputFormat[]).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFormat(f)}
                        className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition ${
                          format === f ? "bg-emerald-600 text-white" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        }`}
                      >
                        {f === "image/jpeg" ? "JPG" : "PNG"}
                      </button>
                    ))}
                  </div>
                </div>
                {format === "image/jpeg" && (
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      {s.quality}: {Math.round(quality * 100)}%
                    </label>
                    <input
                      type="range"
                      min={0.5}
                      max={1}
                      step={0.01}
                      value={quality}
                      onChange={(e) => setQuality(Number(e.target.value))}
                      className="mt-3 w-full accent-emerald-600"
                    />
                  </div>
                )}
              </div>

              {format === "image/jpeg" && (
                <label className="mt-4 flex cursor-pointer items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <input type="checkbox" checked={keepExif} onChange={(e) => setKeepExif(e.target.checked)} className="mt-0.5 accent-emerald-600" />
                  <span>
                    {s.keepExif}
                    <span className="block text-zinc-500 dark:text-zinc-400">{s.stripHint}</span>
                  </span>
                </label>
              )}

              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleConvert}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{status}</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-4 w-4" />
                      <span>
                        {s.convert} {files.length} {s.photos} → {ext.toUpperCase()}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">{s.done}</h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            {okCount}/{results.length} {s.photos} • {s.zero}
          </p>

          <ul className="mx-auto mt-5 max-w-lg divide-y divide-zinc-100 rounded-xl bg-white text-left text-xs shadow-sm dark:divide-zinc-800 dark:bg-zinc-900">
            {results.map((r, i) => (
              <li key={i} className="flex items-center justify-between gap-2 px-3 py-2.5">
                <div className="flex min-w-0 items-center gap-2">
                  {r.error ? <AlertCircle className="h-4 w-4 shrink-0 text-red-500" /> : <ImageIcon className="h-4 w-4 shrink-0 text-emerald-500" />}
                  <span className="truncate font-medium text-zinc-800 dark:text-zinc-200">{r.name}</span>
                  {r.error ? (
                    <span className="shrink-0 text-red-600 dark:text-red-400">— {r.error}</span>
                  ) : (
                    <span className="shrink-0 text-zinc-400">
                      {formatBytes(r.originalSize)} → {formatBytes(r.size)}
                      {format === "image/jpeg" && ` • ${r.exifKept ? s.exifKept : s.exifStripped}`}
                    </span>
                  )}
                </div>
                {!r.error && (
                  <button
                    type="button"
                    data-action="download"
                    onClick={() => triggerDownload(r.url, r.name)}
                    className="shrink-0 rounded-lg p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                    title={s.downloadOne}
                  >
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {okCount > 0 && (
              <button
                type="button"
                data-action="download"
                onClick={handleDownloadAll}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>{okCount === 1 ? `${s.downloadOne} ${ext.toUpperCase()}` : s.downloadAll}</span>
              </button>
            )}
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>{s.again}</span>
            </button>
          </div>

          <div className="mt-6">
            <AdBanner slot="action-card" />
          </div>
        </div>
      )}
    </div>
  );
};
