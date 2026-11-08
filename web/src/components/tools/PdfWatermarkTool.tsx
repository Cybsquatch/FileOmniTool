"use client";

import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { useLanguage, type Language } from "@/lib/i18n/context";
import { AdBanner } from "../ads/AdBanner";
import { Download, Loader2, RefreshCw, ShieldCheck, Droplets, AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import type { WatermarkLayout } from "@/lib/client-engines/pdf-watermark-engine";

const STRINGS: Record<Language, Record<string, string>> = {
  it: {
    drop: "Trascina qui il PDF a cui aggiungere la filigrana",
    privacy: "Elaborazione 100% locale: il PDF non lascia mai il tuo dispositivo. Ideale per documenti d'identità, buste paga e contratti da inviare.",
    text: "Testo della filigrana",
    defaultText: "COPIA - SOLO PER USO",
    presets: "Suggerimenti",
    size: "Dimensione",
    opacity: "Trasparenza",
    rotation: "Rotazione",
    color: "Colore",
    layout: "Disposizione",
    center: "Una al centro",
    tiled: "Ripetuta su tutta la pagina",
    pages: "Pagine",
    pagesHint: "Vuoto = tutte. Esempi: 1-3, 5",
    apply: "Aggiungi filigrana",
    working: "Applicazione in corso...",
    done: "Filigrana aggiunta",
    download: "Scarica PDF",
    again: "Elabora un altro PDF",
    error: "Impossibile elaborare il PDF. Se è protetto da password, rimuovila prima.",
    chars: "Il testo contiene caratteri non supportati dai font PDF standard (es. emoji o alfabeti non latini).",
  },
  en: {
    drop: "Drop the PDF you want to watermark here",
    privacy: "100% local processing: the PDF never leaves your device. Ideal for ID scans, payslips and contracts you need to send.",
    text: "Watermark text",
    defaultText: "COPY - FOR USE ONLY",
    presets: "Suggestions",
    size: "Size",
    opacity: "Opacity",
    rotation: "Rotation",
    color: "Color",
    layout: "Layout",
    center: "Once, centered",
    tiled: "Tiled across the page",
    pages: "Pages",
    pagesHint: "Empty = all. Examples: 1-3, 5",
    apply: "Add watermark",
    working: "Applying...",
    done: "Watermark added",
    download: "Download PDF",
    again: "Process another PDF",
    error: "The PDF could not be processed. If it is password protected, remove the password first.",
    chars: "The text contains characters standard PDF fonts can't render (e.g. emoji or non-Latin scripts).",
  },
  es: {
    drop: "Arrastra aquí el PDF al que quieres añadir una marca de agua",
    privacy: "Procesamiento 100% local: el PDF nunca sale de tu dispositivo. Ideal para DNI escaneados, nóminas y contratos que debas enviar.",
    text: "Texto de la marca de agua",
    defaultText: "COPIA - SOLO PARA USO",
    presets: "Sugerencias",
    size: "Tamaño",
    opacity: "Opacidad",
    rotation: "Rotación",
    color: "Color",
    layout: "Disposición",
    center: "Una, centrada",
    tiled: "Repetida en toda la página",
    pages: "Páginas",
    pagesHint: "Vacío = todas. Ejemplos: 1-3, 5",
    apply: "Añadir marca de agua",
    working: "Aplicando...",
    done: "Marca de agua añadida",
    download: "Descargar PDF",
    again: "Procesar otro PDF",
    error: "No se pudo procesar el PDF. Si está protegido con contraseña, quítala primero.",
    chars: "El texto contiene caracteres que las fuentes PDF estándar no admiten (p. ej. emoji o alfabetos no latinos).",
  },
  fr: {
    drop: "Déposez ici le PDF à filigraner",
    privacy: "Traitement 100 % local : le PDF ne quitte jamais votre appareil. Idéal pour pièces d'identité, fiches de paie et contrats à envoyer.",
    text: "Texte du filigrane",
    defaultText: "COPIE - USAGE EXCLUSIF",
    presets: "Suggestions",
    size: "Taille",
    opacity: "Opacité",
    rotation: "Rotation",
    color: "Couleur",
    layout: "Disposition",
    center: "Une fois, centré",
    tiled: "Répété sur toute la page",
    pages: "Pages",
    pagesHint: "Vide = toutes. Exemples : 1-3, 5",
    apply: "Ajouter le filigrane",
    working: "Application...",
    done: "Filigrane ajouté",
    download: "Télécharger le PDF",
    again: "Traiter un autre PDF",
    error: "Impossible de traiter le PDF. S'il est protégé par mot de passe, retirez-le d'abord.",
    chars: "Le texte contient des caractères non pris en charge par les polices PDF standard (emoji, alphabets non latins).",
  },
  de: {
    drop: "PDF hier ablegen, das ein Wasserzeichen bekommen soll",
    privacy: "100 % lokale Verarbeitung: Das PDF verlässt nie Ihr Gerät. Ideal für Ausweiskopien, Gehaltsabrechnungen und Verträge.",
    text: "Wasserzeichen-Text",
    defaultText: "KOPIE - NUR ZUR VORLAGE",
    presets: "Vorschläge",
    size: "Größe",
    opacity: "Deckkraft",
    rotation: "Drehung",
    color: "Farbe",
    layout: "Anordnung",
    center: "Einmal, zentriert",
    tiled: "Über die ganze Seite wiederholt",
    pages: "Seiten",
    pagesHint: "Leer = alle. Beispiele: 1-3, 5",
    apply: "Wasserzeichen hinzufügen",
    working: "Wird angewendet...",
    done: "Wasserzeichen hinzugefügt",
    download: "PDF herunterladen",
    again: "Weiteres PDF bearbeiten",
    error: "Das PDF konnte nicht verarbeitet werden. Falls es passwortgeschützt ist, entfernen Sie zuerst das Passwort.",
    chars: "Der Text enthält Zeichen, die Standard-PDF-Schriften nicht darstellen können (z. B. Emojis oder nicht-lateinische Schriften).",
  },
  pt: {
    drop: "Arraste aqui o PDF que vai receber a marca d'água",
    privacy: "Processamento 100% local: o PDF nunca sai do seu dispositivo. Ideal para documentos de identidade, holerites e contratos.",
    text: "Texto da marca d'água",
    defaultText: "CÓPIA - USO EXCLUSIVO",
    presets: "Sugestões",
    size: "Tamanho",
    opacity: "Opacidade",
    rotation: "Rotação",
    color: "Cor",
    layout: "Disposição",
    center: "Uma, centralizada",
    tiled: "Repetida em toda a página",
    pages: "Páginas",
    pagesHint: "Vazio = todas. Exemplos: 1-3, 5",
    apply: "Adicionar marca d'água",
    working: "Aplicando...",
    done: "Marca d'água adicionada",
    download: "Baixar PDF",
    again: "Processar outro PDF",
    error: "Não foi possível processar o PDF. Se tiver senha, remova-a primeiro.",
    chars: "O texto contém caracteres que as fontes PDF padrão não suportam (ex.: emoji ou alfabetos não latinos).",
  },
};

const PRESETS: Record<Language, string[]> = {
  it: ["COPIA", "RISERVATO", "BOZZA", "SOLO PER USO INTERNO", "NON VALIDO PER ALTRI USI"],
  en: ["COPY", "CONFIDENTIAL", "DRAFT", "INTERNAL USE ONLY", "NOT VALID FOR OTHER USES"],
  es: ["COPIA", "CONFIDENCIAL", "BORRADOR", "SOLO USO INTERNO", "NO VÁLIDO PARA OTROS USOS"],
  fr: ["COPIE", "CONFIDENTIEL", "BROUILLON", "USAGE INTERNE", "NON VALABLE POUR D'AUTRES USAGES"],
  de: ["KOPIE", "VERTRAULICH", "ENTWURF", "NUR INTERN", "NICHT FÜR ANDERE ZWECKE"],
  pt: ["CÓPIA", "CONFIDENCIAL", "RASCUNHO", "USO INTERNO", "NÃO VÁLIDO PARA OUTROS FINS"],
};

function parsePages(input: string): number[] | null {
  if (!input.trim()) return null;
  const set = new Set<number>();
  for (const part of input.split(/[,;\s]+/).filter(Boolean)) {
    const m = part.match(/^(\d+)-(\d+)$/);
    if (m) for (let p = Number(m[1]); p <= Number(m[2]); p++) set.add(p);
    else if (/^\d+$/.test(part)) set.add(Number(part));
  }
  return [...set];
}

export const PdfWatermarkTool: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState(s.defaultText);
  const [fontSize, setFontSize] = useState(48);
  const [opacity, setOpacity] = useState(0.25);
  const [rotation, setRotation] = useState(45);
  const [color, setColor] = useState("#dc2626");
  const [layout, setLayout] = useState<WatermarkLayout>("center");
  const [pages, setPages] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [output, setOutput] = useState<{ url: string; size: number } | null>(null);

  const apply = async () => {
    if (!file || !text.trim()) return;
    setBusy(true);
    setError("");
    try {
      const engine = await import("@/lib/client-engines/pdf-watermark-engine");
      try {
        const bytes = await engine.addTextWatermark(file, { text: text.trim(), fontSize, opacity, rotation, color, layout, pages: parsePages(pages) });
        const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
        setOutput({ url: URL.createObjectURL(blob), size: blob.size });
      } catch (err) {
        console.error(err);
        setError(err instanceof engine.UnsupportedCharsError ? s.chars : s.error);
      }
    } finally {
      setBusy(false);
    }
  };

  const download = () => {
    if (!output || !file) return;
    const a = document.createElement("a");
    a.href = output.url;
    a.download = `${sanitizeFileName(file.name).replace(/\.pdf$/i, "")}_watermark.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const reset = () => {
    if (output) URL.revokeObjectURL(output.url);
    setOutput(null);
    setFile(null);
    setError("");
  };

  const btn = (active: boolean) =>
    `rounded-lg px-3 py-1.5 text-xs font-semibold transition ${active ? "bg-emerald-600 text-white" : "border border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"}`;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>{s.privacy}</span>
      </div>

      {!file && <Dropzone accept=".pdf,application/pdf" multiple={false} maxSizeMB={200} onFilesSelected={(f) => f[0] && setFile(f[0])} helperText={s.drop} />}

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {file && !output && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between gap-2 border-b border-zinc-100 pb-3 text-sm dark:border-zinc-800">
            <div className="flex min-w-0 items-center gap-2">
              <FileText className="h-4 w-4 shrink-0 text-red-500" />
              <span className="truncate font-semibold text-zinc-900 dark:text-white">{sanitizeFileName(file.name)}</span>
              <span className="shrink-0 text-xs text-zinc-400">{formatBytes(file.size)}</span>
            </div>
            <button onClick={reset} className="rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label={s.again}>
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 grid gap-5 md:grid-cols-[1fr_220px]">
            <div className="space-y-4">
              <div>
                <label htmlFor="wm-text" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {s.text}
                </label>
                <input id="wm-text" value={text} onChange={(e) => setText(e.target.value)} maxLength={80} className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800" />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {(PRESETS[language] ?? PRESETS.en).map((p) => (
                    <button key={p} onClick={() => setText(p)} className={btn(text === p)}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {s.size}: {fontSize}pt
                  <input type="range" min={12} max={120} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {s.opacity}: {Math.round(opacity * 100)}%
                  <input type="range" min={0.05} max={1} step={0.05} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {s.rotation}: {rotation}°
                  <input type="range" min={-90} max={90} step={5} value={rotation} onChange={(e) => setRotation(Number(e.target.value))} className="mt-2 w-full accent-emerald-600" />
                </label>
              </div>
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.layout}</div>
                  <div className="mt-2 flex gap-1.5">
                    {(["center", "tiled"] as WatermarkLayout[]).map((l) => (
                      <button key={l} onClick={() => setLayout(l)} className={btn(layout === l)}>
                        {s[l]}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {s.color}
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="mt-2 block h-8 w-12 cursor-pointer rounded border border-zinc-200" />
                </label>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {s.pages}
                  <input value={pages} onChange={(e) => setPages(e.target.value)} placeholder={s.pagesHint} className="mt-2 block w-44 rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-normal dark:border-zinc-700 dark:bg-zinc-800" />
                </label>
              </div>
            </div>

            {/* Live preview on an A4-shaped sheet */}
            <div className="relative mx-auto aspect-[210/297] w-full max-w-[220px] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-inner">
              <div className="space-y-1.5 p-4">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="h-1.5 rounded bg-zinc-200" style={{ width: `${60 + ((i * 37) % 40)}%` }} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 flex flex-wrap content-center items-center justify-center overflow-hidden">
                {(layout === "center" ? [0] : Array.from({ length: 12 })).map((_, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap font-bold"
                    style={{
                      color,
                      opacity,
                      fontSize: `${fontSize * 0.36}px`,
                      transform: `rotate(${-rotation}deg)`,
                      margin: layout === "center" ? 0 : "14px 10px",
                    }}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              onClick={apply}
              disabled={busy || !text.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Droplets className="h-4 w-4" />}
              <span>{busy ? s.working : s.apply}</span>
            </button>
          </div>
        </div>
      )}

      {output && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
          <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">{s.done}</h3>
          <p className="mt-1 text-xs text-zinc-500">{formatBytes(output.size)}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              data-action="download"
              onClick={download}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>{s.download}</span>
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
