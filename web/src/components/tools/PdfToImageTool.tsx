"use client";

import React, { useEffect, useRef, useState } from "react";
import { Dropzone } from "./Dropzone";
import { formatBytes, sanitizeFileName } from "@/lib/security-guard";
import { useLanguage, type Language } from "@/lib/i18n/context";
import { AdBanner } from "../ads/AdBanner";
import { Download, Loader2, RefreshCw, ShieldCheck, Images, AlertCircle, FileText, Lock } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import type { PageImageFormat, RenderedPage } from "@/lib/client-engines/pdf-render-engine";

const STRINGS: Record<Language, Record<string, string>> = {
  it: {
    drop: "Trascina qui un PDF da convertire in immagini",
    privacy: "Conversione 100% locale: il PDF viene disegnato pagina per pagina dentro il browser e non viene mai caricato online.",
    pages: "pagine",
    format: "Formato",
    resolution: "Risoluzione",
    screen: "Schermo",
    print: "Stampa",
    high: "Alta",
    quality: "Qualità",
    selection: "Pagine da convertire",
    selectionHint: "Lascia vuoto per tutte. Esempi: 1-3, 5, 8-",
    convert: "Converti in immagini",
    rendering: "Pagina {n} di {t}...",
    password: "Questo PDF è protetto da password",
    passwordPlaceholder: "Password del PDF",
    unlock: "Apri",
    wrongPassword: "Password errata, riprova.",
    error: "Impossibile leggere questo PDF. Il file potrebbe essere danneggiato.",
    noPages: "Nessuna pagina valida nella selezione.",
    done: "{n} immagini pronte",
    downloadAll: "Scarica tutte (ZIP)",
    downloadOne: "Scarica",
    again: "Converti un altro PDF",
    page: "Pagina",
    zero: "0 byte inviati online",
  },
  en: {
    drop: "Drop a PDF here to convert it to images",
    privacy: "100% local conversion: the PDF is drawn page by page inside your browser and is never uploaded.",
    pages: "pages",
    format: "Format",
    resolution: "Resolution",
    screen: "Screen",
    print: "Print",
    high: "High",
    quality: "Quality",
    selection: "Pages to convert",
    selectionHint: "Leave empty for all. Examples: 1-3, 5, 8-",
    convert: "Convert to images",
    rendering: "Page {n} of {t}...",
    password: "This PDF is password protected",
    passwordPlaceholder: "PDF password",
    unlock: "Open",
    wrongPassword: "Wrong password, try again.",
    error: "This PDF can't be read. The file may be damaged.",
    noPages: "No valid pages in the selection.",
    done: "{n} images ready",
    downloadAll: "Download all (ZIP)",
    downloadOne: "Download",
    again: "Convert another PDF",
    page: "Page",
    zero: "0 bytes sent online",
  },
  es: {
    drop: "Arrastra aquí un PDF para convertirlo en imágenes",
    privacy: "Conversión 100% local: el PDF se dibuja página a página dentro del navegador y nunca se sube a internet.",
    pages: "páginas",
    format: "Formato",
    resolution: "Resolución",
    screen: "Pantalla",
    print: "Impresión",
    high: "Alta",
    quality: "Calidad",
    selection: "Páginas a convertir",
    selectionHint: "Déjalo vacío para todas. Ejemplos: 1-3, 5, 8-",
    convert: "Convertir en imágenes",
    rendering: "Página {n} de {t}...",
    password: "Este PDF está protegido con contraseña",
    passwordPlaceholder: "Contraseña del PDF",
    unlock: "Abrir",
    wrongPassword: "Contraseña incorrecta, inténtalo de nuevo.",
    error: "No se puede leer este PDF. Puede que el archivo esté dañado.",
    noPages: "No hay páginas válidas en la selección.",
    done: "{n} imágenes listas",
    downloadAll: "Descargar todas (ZIP)",
    downloadOne: "Descargar",
    again: "Convertir otro PDF",
    page: "Página",
    zero: "0 bytes enviados a internet",
  },
  fr: {
    drop: "Déposez ici un PDF à convertir en images",
    privacy: "Conversion 100 % locale : le PDF est dessiné page par page dans votre navigateur et n'est jamais envoyé en ligne.",
    pages: "pages",
    format: "Format",
    resolution: "Résolution",
    screen: "Écran",
    print: "Impression",
    high: "Haute",
    quality: "Qualité",
    selection: "Pages à convertir",
    selectionHint: "Laissez vide pour toutes. Exemples : 1-3, 5, 8-",
    convert: "Convertir en images",
    rendering: "Page {n} sur {t}...",
    password: "Ce PDF est protégé par un mot de passe",
    passwordPlaceholder: "Mot de passe du PDF",
    unlock: "Ouvrir",
    wrongPassword: "Mot de passe incorrect, réessayez.",
    error: "Impossible de lire ce PDF. Le fichier est peut-être endommagé.",
    noPages: "Aucune page valide dans la sélection.",
    done: "{n} images prêtes",
    downloadAll: "Tout télécharger (ZIP)",
    downloadOne: "Télécharger",
    again: "Convertir un autre PDF",
    page: "Page",
    zero: "0 octet envoyé en ligne",
  },
  de: {
    drop: "PDF hier ablegen, um es in Bilder umzuwandeln",
    privacy: "100 % lokale Umwandlung: Das PDF wird Seite für Seite in Ihrem Browser gezeichnet und nie hochgeladen.",
    pages: "Seiten",
    format: "Format",
    resolution: "Auflösung",
    screen: "Bildschirm",
    print: "Druck",
    high: "Hoch",
    quality: "Qualität",
    selection: "Zu konvertierende Seiten",
    selectionHint: "Leer lassen für alle. Beispiele: 1-3, 5, 8-",
    convert: "In Bilder umwandeln",
    rendering: "Seite {n} von {t}...",
    password: "Dieses PDF ist passwortgeschützt",
    passwordPlaceholder: "PDF-Passwort",
    unlock: "Öffnen",
    wrongPassword: "Falsches Passwort, bitte erneut versuchen.",
    error: "Dieses PDF kann nicht gelesen werden. Die Datei ist möglicherweise beschädigt.",
    noPages: "Keine gültigen Seiten in der Auswahl.",
    done: "{n} Bilder fertig",
    downloadAll: "Alle herunterladen (ZIP)",
    downloadOne: "Herunterladen",
    again: "Weiteres PDF umwandeln",
    page: "Seite",
    zero: "0 Byte online übertragen",
  },
  pt: {
    drop: "Arraste aqui um PDF para converter em imagens",
    privacy: "Conversão 100% local: o PDF é desenhado página por página dentro do navegador e nunca é enviado online.",
    pages: "páginas",
    format: "Formato",
    resolution: "Resolução",
    screen: "Tela",
    print: "Impressão",
    high: "Alta",
    quality: "Qualidade",
    selection: "Páginas a converter",
    selectionHint: "Deixe vazio para todas. Exemplos: 1-3, 5, 8-",
    convert: "Converter em imagens",
    rendering: "Página {n} de {t}...",
    password: "Este PDF é protegido por senha",
    passwordPlaceholder: "Senha do PDF",
    unlock: "Abrir",
    wrongPassword: "Senha incorreta, tente novamente.",
    error: "Não é possível ler este PDF. O arquivo pode estar danificado.",
    noPages: "Nenhuma página válida na seleção.",
    done: "{n} imagens prontas",
    downloadAll: "Baixar todas (ZIP)",
    downloadOne: "Baixar",
    again: "Converter outro PDF",
    page: "Página",
    zero: "0 bytes enviados online",
  },
};

const DPI_OPTIONS = [
  { dpi: 96, key: "screen" },
  { dpi: 150, key: "print" },
  { dpi: 300, key: "high" },
] as const;

interface Result extends RenderedPage {
  url: string;
  name: string;
}

function triggerDownload(url: string, name: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export const PdfToImageTool: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] ?? STRINGS.en;

  const [file, setFile] = useState<File | null>(null);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [needsPassword, setNeedsPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [format, setFormat] = useState<PageImageFormat>("image/jpeg");
  const [dpi, setDpi] = useState(150);
  const [quality, setQuality] = useState(0.9);
  const [selection, setSelection] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<Result[] | null>(null);
  const engineRef = useRef<typeof import("@/lib/client-engines/pdf-render-engine") | null>(null);

  const engine = async () => {
    if (!engineRef.current) engineRef.current = await import("@/lib/client-engines/pdf-render-engine");
    return engineRef.current;
  };

  useEffect(() => () => {
    results?.forEach((r) => URL.revokeObjectURL(r.url));
  }, [results]);

  useEffect(() => () => {
    void doc?.destroy();
  }, [doc]);

  const open = async (f: File, pw?: string) => {
    setError("");
    const e = await engine();
    try {
      const d = await e.openPdf(f, pw);
      setDoc(d);
      setNeedsPassword(false);
    } catch (err) {
      if (err instanceof e.PdfPasswordError) {
        if (pw) setError(s.wrongPassword);
        setNeedsPassword(true);
      } else {
        console.error(err);
        setError(s.error);
      }
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    setFile(f);
    setResults(null);
    setDoc(null);
    setPassword("");
    await open(f);
  };

  const handleConvert = async () => {
    if (!doc || !file) return;
    const e = await engine();
    const pages = e.parsePageSelection(selection, doc.numPages);
    if (pages.length === 0) {
      setError(s.noPages);
      return;
    }
    setError("");
    setBusy(true);
    const base = sanitizeFileName(file.name).replace(/\.pdf$/i, "");
    const ext = format === "image/png" ? "png" : format === "image/webp" ? "webp" : "jpg";
    const pad = String(doc.numPages).length;
    const out: Result[] = [];
    try {
      for (let i = 0; i < pages.length; i++) {
        setStatus(s.rendering.replace("{n}", String(i + 1)).replace("{t}", String(pages.length)));
        const r = await e.renderPage(doc, pages[i], { dpi, format, quality });
        out.push({ ...r, url: URL.createObjectURL(r.blob), name: `${base}_${s.page.toLowerCase()}-${String(r.page).padStart(pad, "0")}.${ext}` });
      }
      setResults(out);
    } catch (err) {
      console.error(err);
      out.forEach((r) => URL.revokeObjectURL(r.url));
      setError(s.error);
    } finally {
      setBusy(false);
      setStatus("");
    }
  };

  const handleDownloadAll = async () => {
    if (!results || !file) return;
    if (results.length === 1) {
      triggerDownload(results[0].url, results[0].name);
      return;
    }
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    for (const r of results) zip.file(r.name, r.blob);
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `${sanitizeFileName(file.name).replace(/\.pdf$/i, "")}_images.zip`);
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const reset = () => {
    setFile(null);
    setDoc(null);
    setResults(null);
    setError("");
    setNeedsPassword(false);
    setSelection("");
  };

  const btn = (active: boolean) =>
    `rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${active ? "bg-emerald-600 text-white" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"}`;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>{s.privacy}</span>
      </div>

      {!file && <Dropzone accept=".pdf,application/pdf" multiple={false} maxSizeMB={200} onFilesSelected={handleFilesSelected} helperText={s.drop} />}

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {file && !results && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
            <div className="flex min-w-0 items-center gap-2 text-sm">
              <FileText className="h-4 w-4 shrink-0 text-red-500" />
              <span className="truncate font-semibold text-zinc-900 dark:text-white">{sanitizeFileName(file.name)}</span>
              <span className="shrink-0 text-xs text-zinc-400">
                {formatBytes(file.size)}
                {doc && ` • ${doc.numPages} ${s.pages}`}
              </span>
            </div>
            <button onClick={reset} disabled={busy} className="rounded p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label={s.again}>
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          {needsPassword && (
            <form
              className="mt-4 flex flex-wrap items-center gap-2"
              onSubmit={(ev) => {
                ev.preventDefault();
                void open(file, password);
              }}
            >
              <Lock className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.password}</span>
              <input
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder={s.passwordPlaceholder}
                autoComplete="off"
                className="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs dark:border-zinc-700 dark:bg-zinc-800"
              />
              <button type="submit" className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
                {s.unlock}
              </button>
            </form>
          )}

          {doc && (
            <>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.format}</div>
                  <div className="mt-2 inline-flex rounded-xl border border-zinc-200 p-1 dark:border-zinc-700">
                    {(["image/jpeg", "image/png", "image/webp"] as PageImageFormat[]).map((f) => (
                      <button key={f} onClick={() => setFormat(f)} className={btn(format === f)}>
                        {f === "image/jpeg" ? "JPG" : f === "image/png" ? "PNG" : "WebP"}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{s.resolution}</div>
                  <div className="mt-2 inline-flex rounded-xl border border-zinc-200 p-1 dark:border-zinc-700">
                    {DPI_OPTIONS.map((o) => (
                      <button key={o.dpi} onClick={() => setDpi(o.dpi)} className={btn(dpi === o.dpi)}>
                        {s[o.key]} <span className="opacity-70">{o.dpi} DPI</span>
                      </button>
                    ))}
                  </div>
                </div>
                {format !== "image/png" && (
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      {s.quality}: {Math.round(quality * 100)}%
                    </label>
                    <input type="range" min={0.5} max={1} step={0.01} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="mt-3 w-full accent-emerald-600" />
                  </div>
                )}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300" htmlFor="pdf-pages">
                    {s.selection}
                  </label>
                  <input
                    id="pdf-pages"
                    value={selection}
                    onChange={(e) => setSelection(e.target.value)}
                    placeholder={`1-${doc.numPages}`}
                    className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-1.5 text-xs dark:border-zinc-700 dark:bg-zinc-800"
                  />
                  <p className="mt-1 text-[11px] text-zinc-500">{s.selectionHint}</p>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleConvert}
                  disabled={busy}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Images className="h-4 w-4" />}
                  <span>{busy ? status : s.convert}</span>
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {results && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <p className="text-center text-sm font-bold text-zinc-900 dark:text-white">{s.done.replace("{n}", String(results.length))}</p>
          <p className="text-center text-xs text-zinc-500">{s.zero}</p>

          <div className="mt-4 grid max-h-[28rem] grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 md:grid-cols-4">
            {results.map((r) => (
              <div key={r.page} className="rounded-xl border border-zinc-200 bg-white p-2 text-center dark:border-zinc-800 dark:bg-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.url} alt={`${s.page} ${r.page}`} className="mx-auto h-32 w-full object-contain" loading="lazy" />
                <div className="mt-1.5 text-[11px] text-zinc-500">
                  {s.page} {r.page} • {formatBytes(r.blob.size)}
                </div>
                <button
                  type="button"
                  data-action="download"
                  onClick={() => triggerDownload(r.url, r.name)}
                  className="mt-1 inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
                >
                  <Download className="h-3 w-3" /> {s.downloadOne}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              data-action="download"
              onClick={handleDownloadAll}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>{results.length === 1 ? s.downloadOne : s.downloadAll}</span>
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
