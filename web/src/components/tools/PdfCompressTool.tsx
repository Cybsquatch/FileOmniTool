"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { useLanguage, type Language } from "@/lib/i18n/context";
import { AdBanner } from "../ads/AdBanner";
import { FileText, Download, CheckCircle2, Loader2, RefreshCw, Minimize2, ShieldCheck, AlertTriangle } from "lucide-react";

type Preset = "target" | "light" | "medium" | "strong";

const STRINGS: Record<Language, Record<string, string>> = {
  it: {
    drop: "Trascina qui il PDF da comprimere (resta sul tuo dispositivo)",
    privacy: "Compressione 100% locale: il PDF viene elaborato nella memoria del tuo browser e non viene mai caricato su alcun server.",
    level: "Livello di compressione",
    target: "Sotto un limite di peso",
    targetDesc: "Ideale per PEC, portali PA, INPS, concorsi e moduli online",
    light: "Leggera",
    lightDesc: "Qualità quasi identica, riduzione moderata",
    medium: "Media (consigliata)",
    mediumDesc: "Ottimo equilibrio tra qualità e peso",
    strong: "Forte",
    strongDesc: "Peso minimo, immagini più sgranate",
    limit: "Limite (MB)",
    compress: "Comprimi PDF",
    working: "Compressione in corso nel browser...",
    step: "Tentativo",
    images: "Immagini",
    done: "PDF compresso con successo!",
    noGain: "Il PDF è già ottimizzato",
    noGainDesc: "Non contiene immagini ricomprimibili (es. solo testo/vettoriale): il file originale è già la versione più leggera.",
    before: "Prima",
    after: "Dopo",
    saved: "risparmiato",
    targetOk: "Obiettivo raggiunto: il file è sotto",
    targetKo: "Non è stato possibile scendere sotto",
    targetKoHint: "Prova a dividere il PDF in più parti con lo strumento Dividi PDF.",
    recompressed: "immagini ricompresse su",
    download: "Scarica PDF compresso",
    again: "Comprimi un altro PDF",
    zero: "Zero dati trasferiti online",
    error: "Impossibile comprimere questo PDF (potrebbe essere protetto da password o danneggiato).",
  },
  en: {
    drop: "Drop the PDF to compress here (it never leaves your device)",
    privacy: "100% local compression: the PDF is processed in your browser's memory and is never uploaded to any server.",
    level: "Compression level",
    target: "Under a size limit",
    targetDesc: "Ideal for email attachments, government portals and online forms",
    light: "Light",
    lightDesc: "Near-identical quality, moderate reduction",
    medium: "Medium (recommended)",
    mediumDesc: "Great balance between quality and size",
    strong: "Strong",
    strongDesc: "Smallest file, grainier images",
    limit: "Limit (MB)",
    compress: "Compress PDF",
    working: "Compressing in your browser...",
    step: "Attempt",
    images: "Images",
    done: "PDF compressed successfully!",
    noGain: "This PDF is already optimized",
    noGainDesc: "It has no re-compressible images (e.g. text/vector only): the original file is already the lightest version.",
    before: "Before",
    after: "After",
    saved: "saved",
    targetOk: "Target reached: the file is under",
    targetKo: "Could not get the file under",
    targetKoHint: "Try splitting the PDF into several parts with the Split PDF tool.",
    recompressed: "images recompressed out of",
    download: "Download compressed PDF",
    again: "Compress another PDF",
    zero: "Zero data sent online",
    error: "Unable to compress this PDF (it may be password-protected or corrupted).",
  },
  es: {
    drop: "Arrastra aquí el PDF a comprimir (no sale de tu dispositivo)",
    privacy: "Compresión 100% local: el PDF se procesa en la memoria de tu navegador y nunca se sube a ningún servidor.",
    level: "Nivel de compresión",
    target: "Por debajo de un límite",
    targetDesc: "Ideal para correo, portales de la administración y formularios",
    light: "Ligera",
    lightDesc: "Calidad casi idéntica, reducción moderada",
    medium: "Media (recomendada)",
    mediumDesc: "Gran equilibrio entre calidad y peso",
    strong: "Fuerte",
    strongDesc: "Peso mínimo, imágenes más granuladas",
    limit: "Límite (MB)",
    compress: "Comprimir PDF",
    working: "Comprimiendo en tu navegador...",
    step: "Intento",
    images: "Imágenes",
    done: "¡PDF comprimido con éxito!",
    noGain: "Este PDF ya está optimizado",
    noGainDesc: "No contiene imágenes recomprimibles (solo texto/vectorial): el original ya es la versión más ligera.",
    before: "Antes",
    after: "Después",
    saved: "ahorrado",
    targetOk: "Objetivo alcanzado: el archivo pesa menos de",
    targetKo: "No se pudo bajar de",
    targetKoHint: "Prueba a dividir el PDF en varias partes con la herramienta Dividir PDF.",
    recompressed: "imágenes recomprimidas de",
    download: "Descargar PDF comprimido",
    again: "Comprimir otro PDF",
    zero: "Cero datos enviados a internet",
    error: "No se pudo comprimir este PDF (puede estar protegido con contraseña o dañado).",
  },
  fr: {
    drop: "Déposez ici le PDF à compresser (il ne quitte pas votre appareil)",
    privacy: "Compression 100 % locale : le PDF est traité dans la mémoire de votre navigateur et n'est jamais envoyé sur un serveur.",
    level: "Niveau de compression",
    target: "Sous une taille limite",
    targetDesc: "Idéal pour e-mails, portails administratifs et formulaires en ligne",
    light: "Légère",
    lightDesc: "Qualité quasi identique, réduction modérée",
    medium: "Moyenne (recommandée)",
    mediumDesc: "Excellent équilibre qualité / poids",
    strong: "Forte",
    strongDesc: "Poids minimal, images plus granuleuses",
    limit: "Limite (Mo)",
    compress: "Compresser le PDF",
    working: "Compression dans votre navigateur...",
    step: "Essai",
    images: "Images",
    done: "PDF compressé avec succès !",
    noGain: "Ce PDF est déjà optimisé",
    noGainDesc: "Il ne contient pas d'images recompressibles (texte/vectoriel uniquement) : l'original est déjà la version la plus légère.",
    before: "Avant",
    after: "Après",
    saved: "économisés",
    targetOk: "Objectif atteint : le fichier fait moins de",
    targetKo: "Impossible de descendre sous",
    targetKoHint: "Essayez de diviser le PDF en plusieurs parties avec l'outil Diviser PDF.",
    recompressed: "images recompressées sur",
    download: "Télécharger le PDF compressé",
    again: "Compresser un autre PDF",
    zero: "Aucune donnée envoyée en ligne",
    error: "Impossible de compresser ce PDF (il est peut-être protégé par mot de passe ou endommagé).",
  },
  de: {
    drop: "PDF zum Komprimieren hier ablegen (verlässt Ihr Gerät nicht)",
    privacy: "100 % lokale Komprimierung: Die PDF wird im Speicher Ihres Browsers verarbeitet und nie auf einen Server hochgeladen.",
    level: "Komprimierungsstufe",
    target: "Unter einer Größengrenze",
    targetDesc: "Ideal für E-Mail-Anhänge, Behördenportale und Online-Formulare",
    light: "Leicht",
    lightDesc: "Nahezu identische Qualität, moderate Reduktion",
    medium: "Mittel (empfohlen)",
    mediumDesc: "Gute Balance zwischen Qualität und Größe",
    strong: "Stark",
    strongDesc: "Kleinste Datei, körnigere Bilder",
    limit: "Grenze (MB)",
    compress: "PDF komprimieren",
    working: "Komprimierung im Browser...",
    step: "Versuch",
    images: "Bilder",
    done: "PDF erfolgreich komprimiert!",
    noGain: "Diese PDF ist bereits optimiert",
    noGainDesc: "Sie enthält keine neu komprimierbaren Bilder (nur Text/Vektor): Das Original ist bereits die kleinste Version.",
    before: "Vorher",
    after: "Nachher",
    saved: "gespart",
    targetOk: "Ziel erreicht: Die Datei ist kleiner als",
    targetKo: "Die Datei konnte nicht unter",
    targetKoHint: "Teilen Sie die PDF mit dem Tool PDF teilen in mehrere Teile auf.",
    recompressed: "Bilder neu komprimiert von",
    download: "Komprimierte PDF herunterladen",
    again: "Weitere PDF komprimieren",
    zero: "Keine Daten online übertragen",
    error: "Diese PDF kann nicht komprimiert werden (evtl. passwortgeschützt oder beschädigt).",
  },
  pt: {
    drop: "Arraste aqui o PDF para comprimir (ele não sai do seu dispositivo)",
    privacy: "Compressão 100% local: o PDF é processado na memória do seu navegador e nunca é enviado para nenhum servidor.",
    level: "Nível de compressão",
    target: "Abaixo de um limite",
    targetDesc: "Ideal para e-mail, portais do governo e formulários online",
    light: "Leve",
    lightDesc: "Qualidade quase idêntica, redução moderada",
    medium: "Média (recomendada)",
    mediumDesc: "Ótimo equilíbrio entre qualidade e tamanho",
    strong: "Forte",
    strongDesc: "Tamanho mínimo, imagens mais granuladas",
    limit: "Limite (MB)",
    compress: "Comprimir PDF",
    working: "Comprimindo no seu navegador...",
    step: "Tentativa",
    images: "Imagens",
    done: "PDF comprimido com sucesso!",
    noGain: "Este PDF já está otimizado",
    noGainDesc: "Não contém imagens recomprimíveis (só texto/vetorial): o original já é a versão mais leve.",
    before: "Antes",
    after: "Depois",
    saved: "economizado",
    targetOk: "Meta atingida: o arquivo tem menos de",
    targetKo: "Não foi possível ficar abaixo de",
    targetKoHint: "Tente dividir o PDF em várias partes com a ferramenta Dividir PDF.",
    recompressed: "imagens recomprimidas de",
    download: "Baixar PDF comprimido",
    again: "Comprimir outro PDF",
    zero: "Zero dados enviados online",
    error: "Não foi possível comprimir este PDF (pode estar protegido por senha ou danificado).",
  },
};

interface Result {
  url: string;
  size: number;
  originalSize: number;
  imagesFound: number;
  imagesRecompressed: number;
  reachedTarget?: boolean;
  improved: boolean;
}

export const PdfCompressTool: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState<Preset>("target");
  const [targetMB, setTargetMB] = useState(2);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (files: File[]) => {
    const f = files[0];
    if (!f) return;
    setFile(f);
    setResult(null);
    setError(null);
  };

  const handleCompress = async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);
    setProgress("");
    try {
      const engine = await import("@/lib/client-engines/pdf-compress-engine");
      const res =
        preset === "target"
          ? await engine.compressPdfToTarget(file, Math.max(0.1, targetMB) * 1024 * 1024, (step, total) =>
              setProgress(`${s.step} ${step}/${total}`)
            )
          : await engine.compressPdf(file, engine.COMPRESS_LEVELS[preset], (done, total) =>
              setProgress(total ? `${s.images} ${done}/${total}` : "")
            );

      // Non restituiamo mai un file più pesante dell'originale
      const improved = res.bytes.length < file.size;
      const blob = improved
        ? new Blob([res.bytes as BlobPart], { type: "application/pdf" })
        : new Blob([file], { type: "application/pdf" });

      setResult({
        url: URL.createObjectURL(blob),
        size: blob.size,
        originalSize: file.size,
        imagesFound: res.imagesFound,
        imagesRecompressed: res.imagesRecompressed,
        reachedTarget: preset === "target" ? blob.size <= targetMB * 1024 * 1024 : undefined,
        improved,
      });
    } catch (err: unknown) {
      console.error(err);
      setError(s.error);
    } finally {
      setProcessing(false);
      setProgress("");
    }
  };

  const handleDownload = () => {
    if (!result || !file) return;
    const base = sanitizeFileName(file.name).replace(/\.pdf$/i, "");
    const a = document.createElement("a");
    a.href = result.url;
    a.download = `${base}-compressed.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const resetAll = () => {
    if (result) URL.revokeObjectURL(result.url);
    setFile(null);
    setResult(null);
    setError(null);
  };

  const presets: Array<{ id: Preset; label: string; desc: string }> = [
    { id: "target", label: s.target, desc: s.targetDesc },
    { id: "light", label: s.light, desc: s.lightDesc },
    { id: "medium", label: s.medium, desc: s.mediumDesc },
    { id: "strong", label: s.strong, desc: s.strongDesc },
  ];

  const savedPct = result ? Math.max(0, Math.round((1 - result.size / result.originalSize) * 100)) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>{s.privacy}</span>
      </div>

      {!result ? (
        <>
          {!file ? (
            <Dropzone accept=".pdf,application/pdf" maxSizeMB={200} onFilesSelected={handleFilesSelected} helperText={s.drop} />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800">
                <div className="flex items-center gap-2.5 truncate text-sm">
                  <FileText className="h-5 w-5 shrink-0 text-red-500" />
                  <span className="truncate font-semibold text-zinc-900 dark:text-white">{sanitizeFileName(file.name)}</span>
                  <span className="shrink-0 text-xs text-zinc-400">({formatBytes(file.size)})</span>
                </div>
                <button onClick={resetAll} disabled={processing} className="text-xs text-red-600 hover:underline disabled:opacity-50 dark:text-red-400">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>

              <h4 className="mt-4 text-sm font-semibold text-zinc-900 dark:text-white">{s.level}</h4>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {presets.map((p) => (
                  <label
                    key={p.id}
                    className={`flex cursor-pointer flex-col rounded-xl border p-3 text-left transition ${
                      preset === p.id
                        ? "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500 dark:bg-emerald-950/30"
                        : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pdf-compress-preset"
                        value={p.id}
                        checked={preset === p.id}
                        onChange={() => setPreset(p.id)}
                        className="accent-emerald-600"
                      />
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">{p.label}</span>
                    </span>
                    <span className="mt-1 pl-6 text-xs text-zinc-500 dark:text-zinc-400">{p.desc}</span>
                    {p.id === "target" && preset === "target" && (
                      <span className="mt-2 flex items-center gap-2 pl-6 text-xs text-zinc-600 dark:text-zinc-300">
                        {s.limit}
                        <input
                          type="number"
                          min={0.1}
                          step={0.5}
                          value={targetMB}
                          onChange={(e) => setTargetMB(Number(e.target.value) || 2)}
                          className="w-20 rounded-lg border border-zinc-300 bg-white px-2 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-800"
                        />
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {error && (
                <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">{error}</div>
              )}

              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleCompress}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>
                        {s.working} {progress}
                      </span>
                    </>
                  ) : (
                    <>
                      <Minimize2 className="h-4 w-4" />
                      <span>{s.compress}</span>
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
            {result.improved ? <CheckCircle2 className="h-8 w-8" /> : <AlertTriangle className="h-8 w-8" />}
          </div>

          <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">{result.improved ? s.done : s.noGain}</h3>
          {!result.improved && <p className="mx-auto mt-1 max-w-md text-xs text-zinc-600 dark:text-zinc-400">{s.noGainDesc}</p>}

          <div className="mx-auto mt-5 grid max-w-md grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-zinc-900">
              <div className="text-xs text-zinc-500">{s.before}</div>
              <div className="font-bold text-zinc-900 dark:text-white">{formatBytes(result.originalSize)}</div>
            </div>
            <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-zinc-900">
              <div className="text-xs text-zinc-500">{s.after}</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400">{formatBytes(result.size)}</div>
            </div>
            <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-zinc-900">
              <div className="text-xs text-zinc-500">{s.saved}</div>
              <div className="font-bold text-zinc-900 dark:text-white">-{savedPct}%</div>
            </div>
          </div>

          {result.reachedTarget !== undefined && (
            <p
              className={`mx-auto mt-4 max-w-md text-xs ${
                result.reachedTarget ? "text-emerald-700 dark:text-emerald-300" : "text-amber-700 dark:text-amber-300"
              }`}
            >
              {result.reachedTarget ? `${s.targetOk} ${targetMB} MB` : `${s.targetKo} ${targetMB} MB. ${s.targetKoHint}`}
            </p>
          )}
          {result.imagesFound > 0 && (
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              {result.imagesRecompressed} {s.recompressed} {result.imagesFound} • {s.zero}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              data-action="download"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>{s.download}</span>
            </button>
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
