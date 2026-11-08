"use client";

import React, { useEffect, useRef, useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { useLanguage, type Language } from "@/lib/i18n/context";
import { AdBanner } from "../ads/AdBanner";
import { Download, Loader2, RefreshCw, ShieldCheck, Wand2, AlertCircle, Cpu, Zap } from "lucide-react";
import type { BgBackend, BgMode, BgProgress, BgResult } from "@/lib/client-engines/bg-remove-engine";

type OutFormat = "image/png" | "image/webp" | "image/jpeg";

const STRINGS: Record<Language, Record<string, string>> = {
  it: {
    mode: "Soggetto",
    person: "Persone",
    personHint: "Ritratti, selfie, foto profilo",
    object: "Oggetti e prodotti",
    objectHint: "Prodotti, animali, auto, loghi",
    drop: "Trascina qui una foto (JPG, PNG o WebP) per rimuovere lo sfondo",
    privacy: "La foto non viene mai caricata: l'intelligenza artificiale gira nel tuo browser. Solo al primo utilizzo il browser scarica il modello AI (una volta, poi resta in memoria sul dispositivo).",
    firstRun: "Primo utilizzo: download del modello AI di circa {mb} MB, solo questa volta.",
    cachedRun: "Modello AI già sul dispositivo: pronto all'uso.",
    gpu: "Accelerazione GPU attiva (WebGPU): pochi secondi a foto.",
    cpu: "Il tuo browser non supporta WebGPU: l'elaborazione usa il processore e può richiedere 5-30 secondi.",
    start: "Rimuovi sfondo",
    runtime: "Avvio del motore AI...",
    download: "Download modello AI",
    init: "Preparazione del modello...",
    process: "Scontorno in corso...",
    before: "Originale",
    after: "Senza sfondo",
    background: "Sfondo",
    transparent: "Trasparente",
    white: "Bianco",
    black: "Nero",
    custom: "Colore",
    format: "Formato",
    jpgNote: "Il JPG non supporta la trasparenza: verrà usato lo sfondo bianco.",
    downloadBtn: "Scarica immagine",
    again: "Scontorna un'altra foto",
    done: "Fatto in {s} s",
    error: "Non è stato possibile elaborare l'immagine. Prova con un altro browser (Chrome o Edge aggiornati) o con una foto più piccola.",
    notImage: "Formato non supportato. Usa JPG, PNG o WebP (per le foto HEIC dell'iPhone usa prima il convertitore HEIC in JPG).",
    zero: "0 byte della tua foto inviati online",
  },
  en: {
    mode: "Subject",
    person: "People",
    personHint: "Portraits, selfies, profile photos",
    object: "Objects & products",
    objectHint: "Products, pets, cars, logos",
    drop: "Drop a photo here (JPG, PNG or WebP) to remove its background",
    privacy: "Your photo is never uploaded: the AI runs inside your browser. Only on first use does the browser download the AI model (once, then it stays on your device).",
    firstRun: "First use: one-time download of the AI model, about {mb} MB.",
    cachedRun: "AI model already on your device: ready to go.",
    gpu: "GPU acceleration on (WebGPU): a few seconds per photo.",
    cpu: "Your browser doesn't support WebGPU: processing uses the CPU and can take 5-30 seconds.",
    start: "Remove background",
    runtime: "Starting the AI engine...",
    download: "Downloading AI model",
    init: "Preparing the model...",
    process: "Removing background...",
    before: "Original",
    after: "Background removed",
    background: "Background",
    transparent: "Transparent",
    white: "White",
    black: "Black",
    custom: "Color",
    format: "Format",
    jpgNote: "JPG has no transparency: a white background will be used.",
    downloadBtn: "Download image",
    again: "Remove another background",
    done: "Done in {s} s",
    error: "The image could not be processed. Try an up-to-date Chrome or Edge, or a smaller photo.",
    notImage: "Unsupported format. Use JPG, PNG or WebP (for iPhone HEIC photos, use the HEIC to JPG converter first).",
    zero: "0 bytes of your photo sent online",
  },
  es: {
    mode: "Sujeto",
    person: "Personas",
    personHint: "Retratos, selfies, fotos de perfil",
    object: "Objetos y productos",
    objectHint: "Productos, mascotas, coches, logos",
    drop: "Arrastra aquí una foto (JPG, PNG o WebP) para quitar el fondo",
    privacy: "Tu foto nunca se sube: la IA funciona dentro de tu navegador. Solo la primera vez el navegador descarga el modelo de IA (una vez, luego queda en tu dispositivo).",
    firstRun: "Primer uso: descarga única del modelo de IA, unos {mb} MB.",
    cachedRun: "Modelo de IA ya en tu dispositivo: listo para usar.",
    gpu: "Aceleración GPU activa (WebGPU): unos segundos por foto.",
    cpu: "Tu navegador no admite WebGPU: el proceso usa la CPU y puede tardar 5-30 segundos.",
    start: "Quitar fondo",
    runtime: "Iniciando el motor de IA...",
    download: "Descargando modelo de IA",
    init: "Preparando el modelo...",
    process: "Quitando el fondo...",
    before: "Original",
    after: "Sin fondo",
    background: "Fondo",
    transparent: "Transparente",
    white: "Blanco",
    black: "Negro",
    custom: "Color",
    format: "Formato",
    jpgNote: "El JPG no admite transparencia: se usará fondo blanco.",
    downloadBtn: "Descargar imagen",
    again: "Quitar el fondo de otra foto",
    done: "Listo en {s} s",
    error: "No se pudo procesar la imagen. Prueba con Chrome o Edge actualizados, o con una foto más pequeña.",
    notImage: "Formato no compatible. Usa JPG, PNG o WebP (para fotos HEIC del iPhone, usa antes el conversor HEIC a JPG).",
    zero: "0 bytes de tu foto enviados a internet",
  },
  fr: {
    mode: "Sujet",
    person: "Personnes",
    personHint: "Portraits, selfies, photos de profil",
    object: "Objets et produits",
    objectHint: "Produits, animaux, voitures, logos",
    drop: "Déposez une photo ici (JPG, PNG ou WebP) pour supprimer l'arrière-plan",
    privacy: "Votre photo n'est jamais envoyée : l'IA fonctionne dans votre navigateur. Seulement à la première utilisation, le navigateur télécharge le modèle d'IA (une fois, ensuite il reste sur votre appareil).",
    firstRun: "Première utilisation : téléchargement unique du modèle d'IA, environ {mb} Mo.",
    cachedRun: "Modèle d'IA déjà sur votre appareil : prêt à l'emploi.",
    gpu: "Accélération GPU active (WebGPU) : quelques secondes par photo.",
    cpu: "Votre navigateur ne prend pas en charge WebGPU : le traitement utilise le processeur et peut prendre 5 à 30 secondes.",
    start: "Supprimer l'arrière-plan",
    runtime: "Démarrage du moteur d'IA...",
    download: "Téléchargement du modèle d'IA",
    init: "Préparation du modèle...",
    process: "Détourage en cours...",
    before: "Original",
    after: "Sans arrière-plan",
    background: "Arrière-plan",
    transparent: "Transparent",
    white: "Blanc",
    black: "Noir",
    custom: "Couleur",
    format: "Format",
    jpgNote: "Le JPG ne gère pas la transparence : un fond blanc sera utilisé.",
    downloadBtn: "Télécharger l'image",
    again: "Détourer une autre photo",
    done: "Terminé en {s} s",
    error: "Impossible de traiter l'image. Essayez Chrome ou Edge à jour, ou une photo plus petite.",
    notImage: "Format non pris en charge. Utilisez JPG, PNG ou WebP (pour les photos HEIC d'iPhone, utilisez d'abord le convertisseur HEIC en JPG).",
    zero: "0 octet de votre photo envoyé en ligne",
  },
  de: {
    mode: "Motiv",
    person: "Personen",
    personHint: "Porträts, Selfies, Profilfotos",
    object: "Objekte & Produkte",
    objectHint: "Produkte, Tiere, Autos, Logos",
    drop: "Foto hier ablegen (JPG, PNG oder WebP), um den Hintergrund zu entfernen",
    privacy: "Ihr Foto wird nie hochgeladen: Die KI läuft in Ihrem Browser. Nur bei der ersten Nutzung lädt der Browser das KI-Modell herunter (einmalig, danach bleibt es auf Ihrem Gerät).",
    firstRun: "Erste Nutzung: einmaliger Download des KI-Modells, ca. {mb} MB.",
    cachedRun: "KI-Modell bereits auf Ihrem Gerät: sofort einsatzbereit.",
    gpu: "GPU-Beschleunigung aktiv (WebGPU): wenige Sekunden pro Foto.",
    cpu: "Ihr Browser unterstützt kein WebGPU: Die Verarbeitung nutzt den Prozessor und kann 5–30 Sekunden dauern.",
    start: "Hintergrund entfernen",
    runtime: "KI-Engine wird gestartet...",
    download: "KI-Modell wird geladen",
    init: "Modell wird vorbereitet...",
    process: "Hintergrund wird entfernt...",
    before: "Original",
    after: "Ohne Hintergrund",
    background: "Hintergrund",
    transparent: "Transparent",
    white: "Weiß",
    black: "Schwarz",
    custom: "Farbe",
    format: "Format",
    jpgNote: "JPG unterstützt keine Transparenz: Es wird ein weißer Hintergrund verwendet.",
    downloadBtn: "Bild herunterladen",
    again: "Weiteres Foto freistellen",
    done: "Fertig in {s} s",
    error: "Das Bild konnte nicht verarbeitet werden. Versuchen Sie ein aktuelles Chrome oder Edge oder ein kleineres Foto.",
    notImage: "Format nicht unterstützt. Verwenden Sie JPG, PNG oder WebP (für iPhone-HEIC-Fotos zuerst den HEIC-in-JPG-Konverter nutzen).",
    zero: "0 Byte Ihres Fotos online übertragen",
  },
  pt: {
    mode: "Assunto",
    person: "Pessoas",
    personHint: "Retratos, selfies, fotos de perfil",
    object: "Objetos e produtos",
    objectHint: "Produtos, animais, carros, logos",
    drop: "Arraste aqui uma foto (JPG, PNG ou WebP) para remover o fundo",
    privacy: "Sua foto nunca é enviada: a IA roda dentro do seu navegador. Só no primeiro uso o navegador baixa o modelo de IA (uma vez, depois ele fica no seu dispositivo).",
    firstRun: "Primeiro uso: download único do modelo de IA, cerca de {mb} MB.",
    cachedRun: "Modelo de IA já no seu dispositivo: pronto para usar.",
    gpu: "Aceleração por GPU ativa (WebGPU): poucos segundos por foto.",
    cpu: "Seu navegador não suporta WebGPU: o processamento usa a CPU e pode levar 5 a 30 segundos.",
    start: "Remover fundo",
    runtime: "Iniciando o motor de IA...",
    download: "Baixando modelo de IA",
    init: "Preparando o modelo...",
    process: "Removendo o fundo...",
    before: "Original",
    after: "Sem fundo",
    background: "Fundo",
    transparent: "Transparente",
    white: "Branco",
    black: "Preto",
    custom: "Cor",
    format: "Formato",
    jpgNote: "O JPG não suporta transparência: será usado fundo branco.",
    downloadBtn: "Baixar imagem",
    again: "Remover o fundo de outra foto",
    done: "Pronto em {s} s",
    error: "Não foi possível processar a imagem. Tente o Chrome ou Edge atualizados, ou uma foto menor.",
    notImage: "Formato não suportado. Use JPG, PNG ou WebP (para fotos HEIC do iPhone, use antes o conversor HEIC para JPG).",
    zero: "0 bytes da sua foto enviados online",
  },
};

const CHECKER =
  "repeating-conic-gradient(#e4e4e7 0% 25%, #ffffff 0% 50%) 50% / 20px 20px";

function triggerDownload(url: string, name: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export const BackgroundRemoverTool: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState("");
  const [info, setInfo] = useState<{ mb: number; cached: boolean; backend: BgBackend } | null>(null);
  const [mode, setMode] = useState<BgMode>("person");
  const [progress, setProgress] = useState<BgProgress | null>(null);
  const [result, setResult] = useState<BgResult | null>(null);
  const [resultUrl, setResultUrl] = useState("");
  const [error, setError] = useState("");
  const [bgMode, setBgMode] = useState<"transparent" | "white" | "black" | "custom">("transparent");
  const [customColor, setCustomColor] = useState("#10b981");
  const [format, setFormat] = useState<OutFormat>("image/png");
  const [split, setSplit] = useState(50);
  const [busyExport, setBusyExport] = useState(false);
  const engineRef = useRef<typeof import("@/lib/client-engines/bg-remove-engine") | null>(null);

  const loadEngine = async () => {
    if (!engineRef.current) engineRef.current = await import("@/lib/client-engines/bg-remove-engine");
    return engineRef.current;
  };

  useEffect(() => () => {
    if (originalUrl) URL.revokeObjectURL(originalUrl);
  }, [originalUrl]);

  useEffect(() => () => {
    if (resultUrl) URL.revokeObjectURL(resultUrl);
  }, [resultUrl]);

  const handleFilesSelected = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    setError("");
    setResult(null);
    setResultUrl("");
    if (!/^image\/(jpeg|png|webp|bmp|avif|gif)$/.test(f.type)) {
      setError(s.notImage);
      return;
    }
    setFile(f);
    setOriginalUrl(URL.createObjectURL(f));
    const engine = await loadEngine();
    engine.preloadBgRuntime();
    setInfo(await engine.estimateModelDownloadMB(mode));
  };

  const changeMode = async (m: BgMode) => {
    setMode(m);
    const engine = await loadEngine();
    setInfo(await engine.estimateModelDownloadMB(m));
  };

  const handleRun = async () => {
    if (!file) return;
    setError("");
    try {
      const engine = await loadEngine();
      const r = await engine.removeBackground(file, mode, setProgress);
      const blob = await engine.exportCutout(r.cutout, { background: null, format: "image/png" });
      setResult(r);
      setResultUrl(URL.createObjectURL(blob));
      setInfo((i) => (i ? { ...i, cached: true } : i));
    } catch (err) {
      console.error(err);
      setError(s.error);
    } finally {
      setProgress(null);
    }
  };

  const bgColor = bgMode === "transparent" ? null : bgMode === "white" ? "#ffffff" : bgMode === "black" ? "#000000" : customColor;
  const effectiveBg = format === "image/jpeg" && !bgColor ? "#ffffff" : bgColor;

  const handleDownload = async () => {
    if (!result || !file) return;
    setBusyExport(true);
    try {
      const engine = await loadEngine();
      const blob = await engine.exportCutout(result.cutout, { background: effectiveBg, format, quality: 0.92 });
      const ext = format === "image/png" ? "png" : format === "image/webp" ? "webp" : "jpg";
      const base = sanitizeFileName(file.name).replace(/\.[a-z0-9]+$/i, "");
      const url = URL.createObjectURL(blob);
      triggerDownload(url, `${base}_no-bg.${ext}`);
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } finally {
      setBusyExport(false);
    }
  };

  const reset = () => {
    setFile(null);
    setOriginalUrl("");
    setResult(null);
    setResultUrl("");
    setError("");
  };

  const progressLabel = (() => {
    if (!progress) return "";
    if (progress.stage === "download") {
      const pct = progress.total ? Math.round(((progress.loaded ?? 0) / progress.total) * 100) : null;
      return `${s.download}${pct !== null ? ` ${pct}%` : ` ${formatBytes(progress.loaded ?? 0)}`}`;
    }
    return s[progress.stage];
  })();
  const pct = progress?.stage === "download" && progress.total ? ((progress.loaded ?? 0) / progress.total) * 100 : null;

  const previewBg = effectiveBg ?? CHECKER;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>{s.privacy}</span>
      </div>

      {!file && (
        <Dropzone accept="image/jpeg,image/png,image/webp,image/bmp,image/avif" multiple={false} maxSizeMB={40} onFilesSelected={handleFilesSelected} helperText={s.drop} />
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {file && !result && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-5 sm:flex-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={originalUrl} alt={s.before} className="max-h-64 w-full rounded-xl object-contain sm:w-1/2" style={{ background: CHECKER }} />
            <div className="flex flex-1 flex-col justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="space-y-2">
                <p className="truncate font-semibold text-zinc-900 dark:text-white">
                  {sanitizeFileName(file.name)} <span className="font-normal text-zinc-400">({formatBytes(file.size)})</span>
                </p>
                <div>
                  <div className="font-semibold text-zinc-700 dark:text-zinc-300">{s.mode}</div>
                  <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                    {(["person", "object"] as BgMode[]).map((m) => (
                      <button
                        key={m}
                        onClick={() => void changeMode(m)}
                        disabled={!!progress}
                        className={`rounded-lg border px-2.5 py-1.5 text-left transition ${
                          mode === m
                            ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                            : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                        }`}
                      >
                        <span className="block text-xs font-semibold">{s[m]}</span>
                        <span className="block text-[10px] opacity-75">{s[`${m}Hint`]}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {info && (
                  <>
                    <p className="flex items-start gap-1.5">
                      {info.backend === "webgpu" ? <Zap className="h-4 w-4 shrink-0 text-emerald-500" /> : <Cpu className="h-4 w-4 shrink-0 text-amber-500" />}
                      <span>{info.backend === "webgpu" ? s.gpu : s.cpu}</span>
                    </p>
                    <p>{info.cached ? s.cachedRun : s.firstRun.replace("{mb}", String(info.mb))}</p>
                  </>
                )}
              </div>

              {progress ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{progressLabel}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div className={`h-full rounded-full bg-emerald-500 transition-all ${pct === null ? "w-1/3 animate-pulse" : ""}`} style={pct !== null ? { width: `${pct}%` } : undefined} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleRun}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
                  >
                    <Wand2 className="h-4 w-4" />
                    <span>{s.start}</span>
                  </button>
                  <button onClick={reset} className="rounded-xl border border-zinc-300 px-4 py-2.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {result && file && (
        <div className="space-y-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 dark:border-emerald-900/60 dark:bg-emerald-950/20">
          {/* Before / after comparison */}
          <div className="relative mx-auto w-full max-w-2xl select-none overflow-hidden rounded-xl" style={{ aspectRatio: `${result.width} / ${result.height}`, maxHeight: 520 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={originalUrl} alt={s.before} className="absolute inset-0 h-full w-full object-contain" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${split}%)`, background: previewBg }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt={s.after} className="h-full w-full object-contain" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" style={{ left: `${split}%` }} />
            <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">{s.before}</span>
            <span className="absolute right-2 top-2 rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold text-white">{s.after}</span>
            <input
              type="range"
              min={0}
              max={100}
              value={split}
              onChange={(e) => setSplit(Number(e.target.value))}
              aria-label={`${s.before} / ${s.after}`}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          <p className="text-center text-xs text-zinc-600 dark:text-zinc-400">
            {s.done.replace("{s}", (result.ms / 1000).toFixed(1))} • {result.width}×{result.height}px • {result.backend === "webgpu" ? "WebGPU" : "WebAssembly"} • {s.zero}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.background}</div>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                {(["transparent", "white", "black", "custom"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setBgMode(m)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      bgMode === m ? "bg-emerald-600 text-white" : "border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    }`}
                  >
                    {s[m]}
                  </button>
                ))}
                {bgMode === "custom" && (
                  <input type="color" value={customColor} onChange={(e) => setCustomColor(e.target.value)} className="h-8 w-10 cursor-pointer rounded border border-zinc-200" aria-label={s.custom} />
                )}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.format}</div>
              <div className="mt-2 inline-flex rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900">
                {(["image/png", "image/webp", "image/jpeg"] as OutFormat[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition ${
                      format === f ? "bg-emerald-600 text-white" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {f === "image/png" ? "PNG" : f === "image/webp" ? "WebP" : "JPG"}
                  </button>
                ))}
              </div>
              {format === "image/jpeg" && !bgColor && <p className="mt-1.5 text-[11px] text-amber-700 dark:text-amber-400">{s.jpgNote}</p>}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              data-action="download"
              onClick={handleDownload}
              disabled={busyExport}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60"
            >
              {busyExport ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
              <span>{s.downloadBtn}</span>
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>{s.again}</span>
            </button>
          </div>

          <AdBanner slot="action-card" />
        </div>
      )}
    </div>
  );
};
