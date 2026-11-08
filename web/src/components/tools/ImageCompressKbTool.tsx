"use client";

import React, { useEffect, useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { useLanguage, type Language } from "@/lib/i18n/context";
import { AdBanner } from "../ads/AdBanner";
import { Download, Loader2, RefreshCw, ShieldCheck, Scale, AlertCircle, CheckCircle2, ImageIcon, Trash2 } from "lucide-react";
import { compressToTarget, type TargetFormat } from "@/lib/client-engines/image-target-engine";

const PRESETS_KB = [20, 50, 100, 200, 300, 500, 1024];

const STRINGS: Record<Language, Record<string, string>> = {
  it: {
    drop: "Trascina qui una o più foto (JPG, PNG, WebP) da ridurre",
    privacy: "Compressione 100% locale: le foto restano sul tuo dispositivo. Utile per moduli online, concorsi, INPS, passaporto, CV e PEC.",
    target: "Dimensione massima per foto",
    custom: "Personalizzata (KB)",
    format: "Formato",
    maxSide: "Lato massimo (opzionale)",
    noLimit: "Nessun limite",
    compress: "Comprimi sotto {kb}",
    working: "Compressione {n} di {t}...",
    selected: "Foto selezionate",
    removeAll: "Rimuovi tutte",
    done: "Compressione completata",
    reached: "sotto il limite",
    notReached: "limite non raggiunto",
    downloadOne: "Scarica",
    downloadAll: "Scarica tutte (ZIP)",
    again: "Comprimi altre foto",
    error: "file non leggibile",
    exifNote: "I metadati EXIF e la posizione GPS vengono rimossi automaticamente.",
  },
  en: {
    drop: "Drop one or more photos (JPG, PNG, WebP) to shrink",
    privacy: "100% local compression: your photos stay on your device. Handy for online forms, job and visa applications, passports and CV portals.",
    target: "Maximum size per photo",
    custom: "Custom (KB)",
    format: "Format",
    maxSide: "Maximum side (optional)",
    noLimit: "No limit",
    compress: "Compress under {kb}",
    working: "Compressing {n} of {t}...",
    selected: "Selected photos",
    removeAll: "Remove all",
    done: "Compression complete",
    reached: "under the limit",
    notReached: "limit not reached",
    downloadOne: "Download",
    downloadAll: "Download all (ZIP)",
    again: "Compress more photos",
    error: "unreadable file",
    exifNote: "EXIF metadata and GPS location are removed automatically.",
  },
  es: {
    drop: "Arrastra aquí una o varias fotos (JPG, PNG, WebP) para reducirlas",
    privacy: "Compresión 100% local: tus fotos se quedan en tu dispositivo. Útil para formularios online, oposiciones, visados, pasaporte y portales de empleo.",
    target: "Tamaño máximo por foto",
    custom: "Personalizado (KB)",
    format: "Formato",
    maxSide: "Lado máximo (opcional)",
    noLimit: "Sin límite",
    compress: "Comprimir por debajo de {kb}",
    working: "Comprimiendo {n} de {t}...",
    selected: "Fotos seleccionadas",
    removeAll: "Quitar todas",
    done: "Compresión completada",
    reached: "por debajo del límite",
    notReached: "límite no alcanzado",
    downloadOne: "Descargar",
    downloadAll: "Descargar todas (ZIP)",
    again: "Comprimir más fotos",
    error: "archivo ilegible",
    exifNote: "Los metadatos EXIF y la ubicación GPS se eliminan automáticamente.",
  },
  fr: {
    drop: "Déposez une ou plusieurs photos (JPG, PNG, WebP) à réduire",
    privacy: "Compression 100 % locale : vos photos restent sur votre appareil. Pratique pour les formulaires en ligne, concours, visas, passeport et CV.",
    target: "Taille maximale par photo",
    custom: "Personnalisée (Ko)",
    format: "Format",
    maxSide: "Côté maximal (optionnel)",
    noLimit: "Aucune limite",
    compress: "Compresser sous {kb}",
    working: "Compression {n} sur {t}...",
    selected: "Photos sélectionnées",
    removeAll: "Tout retirer",
    done: "Compression terminée",
    reached: "sous la limite",
    notReached: "limite non atteinte",
    downloadOne: "Télécharger",
    downloadAll: "Tout télécharger (ZIP)",
    again: "Compresser d'autres photos",
    error: "fichier illisible",
    exifNote: "Les métadonnées EXIF et la position GPS sont supprimées automatiquement.",
  },
  de: {
    drop: "Ein oder mehrere Fotos (JPG, PNG, WebP) zum Verkleinern ablegen",
    privacy: "100 % lokale Komprimierung: Ihre Fotos bleiben auf Ihrem Gerät. Praktisch für Online-Formulare, Bewerbungen, Visa, Reisepass und Behördenportale.",
    target: "Maximale Größe pro Foto",
    custom: "Eigene (KB)",
    format: "Format",
    maxSide: "Maximale Seitenlänge (optional)",
    noLimit: "Keine Grenze",
    compress: "Unter {kb} komprimieren",
    working: "Komprimiere {n} von {t}...",
    selected: "Ausgewählte Fotos",
    removeAll: "Alle entfernen",
    done: "Komprimierung abgeschlossen",
    reached: "unter dem Limit",
    notReached: "Limit nicht erreicht",
    downloadOne: "Herunterladen",
    downloadAll: "Alle herunterladen (ZIP)",
    again: "Weitere Fotos komprimieren",
    error: "Datei nicht lesbar",
    exifNote: "EXIF-Metadaten und GPS-Standort werden automatisch entfernt.",
  },
  pt: {
    drop: "Arraste aqui uma ou mais fotos (JPG, PNG, WebP) para reduzir",
    privacy: "Compressão 100% local: suas fotos ficam no seu dispositivo. Útil para formulários online, concursos, vistos, passaporte e portais de emprego.",
    target: "Tamanho máximo por foto",
    custom: "Personalizado (KB)",
    format: "Formato",
    maxSide: "Lado máximo (opcional)",
    noLimit: "Sem limite",
    compress: "Comprimir abaixo de {kb}",
    working: "Comprimindo {n} de {t}...",
    selected: "Fotos selecionadas",
    removeAll: "Remover todas",
    done: "Compressão concluída",
    reached: "abaixo do limite",
    notReached: "limite não atingido",
    downloadOne: "Baixar",
    downloadAll: "Baixar todas (ZIP)",
    again: "Comprimir mais fotos",
    error: "arquivo ilegível",
    exifNote: "Os metadados EXIF e a localização GPS são removidos automaticamente.",
  },
};

interface Result {
  name: string;
  url: string;
  blob: Blob | null;
  originalSize: number;
  width: number;
  height: number;
  reached: boolean;
  error?: boolean;
}

function triggerDownload(url: string, name: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

const kbLabel = (kb: number) => (kb >= 1024 ? `${kb / 1024} MB` : `${kb} KB`);

export const ImageCompressKbTool: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  const [files, setFiles] = useState<File[]>([]);
  const [targetKb, setTargetKb] = useState(100);
  const [customKb, setCustomKb] = useState("");
  const [format, setFormat] = useState<TargetFormat>("image/jpeg");
  const [maxSide, setMaxSide] = useState(0);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [results, setResults] = useState<Result[] | null>(null);

  useEffect(() => () => {
    results?.forEach((r) => r.url && URL.revokeObjectURL(r.url));
  }, [results]);

  const effectiveKb = customKb && Number(customKb) > 0 ? Number(customKb) : targetKb;

  const handleCompress = async () => {
    setBusy(true);
    const out: Result[] = [];
    const ext = format === "image/webp" ? "webp" : "jpg";
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      setStatus(s.working.replace("{n}", String(i + 1)).replace("{t}", String(files.length)));
      const name = `${sanitizeFileName(f.name).replace(/\.[a-z0-9]+$/i, "")}_${effectiveKb}kb.${ext}`;
      try {
        const r = await compressToTarget(f, { targetBytes: effectiveKb * 1024, format, maxSide: maxSide || undefined });
        out.push({ name, url: URL.createObjectURL(r.blob), blob: r.blob, originalSize: f.size, width: r.width, height: r.height, reached: r.reachedTarget });
      } catch (err) {
        console.error(err);
        out.push({ name: sanitizeFileName(f.name), url: "", blob: null, originalSize: f.size, width: 0, height: 0, reached: false, error: true });
      }
    }
    setResults(out);
    setBusy(false);
    setStatus("");
  };

  const handleDownloadAll = async () => {
    const ok = results?.filter((r) => r.blob) ?? [];
    if (ok.length === 1) return triggerDownload(ok[0].url, ok[0].name);
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    const used = new Set<string>();
    for (const r of ok) {
      let name = r.name;
      for (let n = 2; used.has(name); n++) name = r.name.replace(/(\.\w+)$/, `_${n}$1`);
      used.add(name);
      zip.file(name, r.blob!);
    }
    const url = URL.createObjectURL(await zip.generateAsync({ type: "blob" }));
    triggerDownload(url, `photos_${effectiveKb}kb.zip`);
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const reset = () => {
    setFiles([]);
    setResults(null);
  };

  const btn = (active: boolean) =>
    `rounded-lg px-3 py-1.5 text-xs font-semibold transition ${active ? "bg-emerald-600 text-white" : "border border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"}`;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>{s.privacy}</span>
      </div>

      {!results ? (
        <>
          <Dropzone
            accept="image/jpeg,image/png,image/webp,image/bmp,image/avif"
            multiple
            maxSizeMB={60}
            onFilesSelected={(nf) => setFiles((prev) => [...prev, ...nf])}
            helperText={s.drop}
          />

          {files.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {s.selected} ({files.length})
                </h4>
                <button onClick={reset} disabled={busy} className="text-xs text-red-600 hover:underline disabled:opacity-50 dark:text-red-400">
                  {s.removeAll}
                </button>
              </div>
              <ul className="mt-3 max-h-40 divide-y divide-zinc-100 overflow-y-auto dark:divide-zinc-800/60">
                {files.map((f, idx) => (
                  <li key={idx} className="flex items-center justify-between py-2 text-xs">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <ImageIcon className="h-4 w-4 shrink-0 text-sky-500" />
                      <span className="truncate font-medium text-zinc-800 dark:text-zinc-200">{sanitizeFileName(f.name)}</span>
                      <span className="text-zinc-400">({formatBytes(f.size)})</span>
                    </div>
                    <button onClick={() => setFiles((p) => p.filter((_, i) => i !== idx))} disabled={busy} className="rounded p-1 text-zinc-400 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.target}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    {PRESETS_KB.map((kb) => (
                      <button
                        key={kb}
                        onClick={() => {
                          setTargetKb(kb);
                          setCustomKb("");
                        }}
                        className={btn(!customKb && targetKb === kb)}
                      >
                        {kbLabel(kb)}
                      </button>
                    ))}
                    <input
                      type="number"
                      min={5}
                      inputMode="numeric"
                      value={customKb}
                      onChange={(e) => setCustomKb(e.target.value)}
                      placeholder={s.custom}
                      aria-label={s.custom}
                      className="w-36 rounded-lg border border-zinc-300 px-3 py-1.5 text-xs dark:border-zinc-700 dark:bg-zinc-800"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.format}</div>
                    <div className="mt-2 flex gap-1.5">
                      {(["image/jpeg", "image/webp"] as TargetFormat[]).map((f) => (
                        <button key={f} onClick={() => setFormat(f)} className={btn(format === f)}>
                          {f === "image/jpeg" ? "JPG" : "WebP"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.maxSide}</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {[0, 2048, 1600, 1200, 800].map((px) => (
                        <button key={px} onClick={() => setMaxSide(px)} className={btn(maxSide === px)}>
                          {px === 0 ? s.noLimit : `${px}px`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-zinc-500">{s.exifNote}</p>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleCompress}
                  disabled={busy}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Scale className="h-4 w-4" />}
                  <span>{busy ? status : s.compress.replace("{kb}", kbLabel(effectiveKb))}</span>
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
          <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">{s.done}</h3>
          <ul className="mx-auto mt-5 max-w-xl divide-y divide-zinc-100 rounded-xl bg-white text-left text-xs shadow-sm dark:divide-zinc-800 dark:bg-zinc-900">
            {results.map((r, i) => (
              <li key={i} className="flex items-center justify-between gap-2 px-3 py-2.5">
                <div className="flex min-w-0 items-center gap-2">
                  {r.error || !r.reached ? <AlertCircle className="h-4 w-4 shrink-0 text-amber-500" /> : <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />}
                  <span className="truncate font-medium text-zinc-800 dark:text-zinc-200">{r.name}</span>
                  <span className="shrink-0 text-zinc-400">
                    {r.error
                      ? s.error
                      : `${formatBytes(r.originalSize)} → ${formatBytes(r.blob!.size)} • ${r.width}×${r.height} • ${r.reached ? s.reached : s.notReached}`}
                  </span>
                </div>
                {r.blob && (
                  <button type="button" data-action="download" onClick={() => triggerDownload(r.url, r.name)} className="shrink-0 rounded-lg p-1.5 text-emerald-600 hover:bg-emerald-50" title={s.downloadOne}>
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              data-action="download"
              onClick={handleDownloadAll}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>{results.filter((r) => r.blob).length === 1 ? s.downloadOne : s.downloadAll}</span>
            </button>
            <button onClick={reset} className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
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
