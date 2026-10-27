"use client";

import React, { useState, useRef, useEffect } from "react";
import { PDFDocument } from "pdf-lib";
import { FileUp, Download, Trash2, CheckCircle2, ShieldCheck, PenTool, Type, Image as ImageIcon, Move } from "lucide-react";

export const PdfSignTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number>(1);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [signMode, setSignMode] = useState<"draw" | "type" | "upload">("draw");
  const [typedName, setTypedName] = useState("");
  const [penColor, setPenColor] = useState("#000000");
  const [penWidth, setPenWidth] = useState(3);
  const [position, setPosition] = useState<"bottom-right" | "bottom-left" | "bottom-center" | "top-right">("bottom-right");
  const [signatureScale, setSignatureScale] = useState(100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);

  const drawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);

  // Inizializza canvas di disegno
  useEffect(() => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [signMode]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      try {
        const buffer = await selected.arrayBuffer();
        const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
        setNumPages(pdfDoc.getPageCount());
        setSelectedPage(pdfDoc.getPageCount()); // default ultima pagina per contratti
      } catch (err) {
        console.error("Errore lettura PDF:", err);
      }
    }
  };

  // Funzioni disegno mouse/touch
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = ("touches" in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.strokeStyle = penColor;
    ctx.lineWidth = penWidth;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = ("touches" in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const canvas = drawCanvasRef.current;
    if (canvas) {
      setSignatureDataUrl(canvas.toDataURL("image/png"));
    }
  };

  const clearCanvas = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureDataUrl(null);
  };

  // Genera firma digitata come immagine
  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setTypedName(text);

    if (!text.trim()) {
      setSignatureDataUrl(null);
      return;
    }

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = 400;
    tempCanvas.height = 150;
    const ctx = tempCanvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
      ctx.font = "italic 48px 'Brush Script MT', 'Caveat', 'Dancing Script', cursive, sans-serif";
      ctx.fillStyle = penColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 200, 75);
      setSignatureDataUrl(tempCanvas.toDataURL("image/png"));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0];
    if (imgFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSignatureDataUrl(event.target?.result as string);
      };
      reader.readAsDataURL(imgFile);
    }
  };

  // Applica la firma e salva il PDF
  const applySignature = async () => {
    if (!file || !signatureDataUrl) return;
    setIsProcessing(true);

    try {
      const fileBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileBytes);
      const pages = pdfDoc.getPages();
      const pageIndex = Math.min(Math.max(selectedPage - 1, 0), pages.length - 1);
      const targetPage = pages[pageIndex];

      const { width: pageWidth, height: pageHeight } = targetPage.getSize();

      const pngImage = await pdfDoc.embedPng(signatureDataUrl);
      const originalDims = pngImage.scale(1);

      // Dimensioni target firma (proporzionate)
      const baseWidth = 160 * (signatureScale / 100);
      const ratio = baseWidth / originalDims.width;
      const finalWidth = baseWidth;
      const finalHeight = originalDims.height * ratio;

      // Coordinate PDF (origine in basso a sinistra)
      let x = 40;
      let y = 40;

      if (position === "bottom-right") {
        x = pageWidth - finalWidth - 50;
        y = 50;
      } else if (position === "bottom-left") {
        x = 50;
        y = 50;
      } else if (position === "bottom-center") {
        x = (pageWidth - finalWidth) / 2;
        y = 50;
      } else if (position === "top-right") {
        x = pageWidth - finalWidth - 50;
        y = pageHeight - finalHeight - 50;
      }

      targetPage.drawImage(pngImage, {
        x,
        y,
        width: finalWidth,
        height: finalHeight,
      });

      const signedPdfBytes = await pdfDoc.save();
      const blob = new Blob([signedPdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `firmato_${file.name}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Errore durante l'applicazione della firma:", err);
      alert("Si è verificato un errore durante la firma del file PDF.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Banner Privacy In-Browser */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <div className="text-sm">
          <strong>Privacy al 100% Garantita:</strong> Il tuo documento e la tua firma non lasciano mai questo dispositivo. L&apos;incorporamento della firma avviene in locale nella memoria RAM del tuo browser.
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Colonna Sinistra: Caricamento PDF & Configurazione Pagina */}
        <div className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">1. Seleziona Documento PDF</h2>

          {!file ? (
            <label className="flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:border-emerald-500 hover:bg-emerald-50/20 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:border-emerald-500">
              <FileUp className="h-10 w-10 text-zinc-400" />
              <span className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Trascina qui il tuo PDF o clicca per scegliere
              </span>
              <span className="text-xs text-zinc-500">Contratti, moduli, ricevute (qualsiasi dimensione)</span>
              <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
            </label>
          ) : (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">{file.name}</div>
                  <div className="text-xs text-zinc-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB • {numPages} {numPages === 1 ? "pagina" : "pagine"}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setFile(null);
                    setNumPages(1);
                  }}
                  className="rounded-lg p-2 text-zinc-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
                  title="Rimuovi file"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              {/* Selettore pagina firma */}
              <div className="mt-4 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Applica la firma a:
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <select
                    value={selectedPage}
                    onChange={(e) => setSelectedPage(Number(e.target.value))}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  >
                    {Array.from({ length: numPages }).map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        Pagina {idx + 1} {idx + 1 === numPages ? "(Ultima pagina)" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Posizione Firma */}
              <div className="mt-4 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Posizione della firma sulla pagina:
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-medium">
                  {[
                    { id: "bottom-right", label: "In basso a destra" },
                    { id: "bottom-left", label: "In basso a sinistra" },
                    { id: "bottom-center", label: "In basso al centro" },
                    { id: "top-right", label: "In alto a destra" },
                  ].map((pos) => (
                    <button
                      key={pos.id}
                      onClick={() => setPosition(pos.id as any)}
                      className={`rounded-lg border px-3 py-2 text-left transition ${
                        position === pos.id
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300"
                          : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider dimensione firma */}
              <div className="mt-4 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <span>Dimensione Firma:</span>
                  <span>{signatureScale}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="180"
                  value={signatureScale}
                  onChange={(e) => setSignatureScale(Number(e.target.value))}
                  className="mt-2 w-full accent-emerald-600"
                />
              </div>
            </div>
          )}
        </div>

        {/* Colonna Destra: Creazione Firma */}
        <div className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">2. Crea la tua Firma</h2>

          {/* Tab Modalità Firma */}
          <div className="flex rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800">
            <button
              onClick={() => setSignMode("draw")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition ${
                signMode === "draw"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <PenTool className="h-4 w-4" /> Disegna
            </button>
            <button
              onClick={() => setSignMode("type")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition ${
                signMode === "type"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <Type className="h-4 w-4" /> Digita
            </button>
            <button
              onClick={() => setSignMode("upload")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition ${
                signMode === "upload"
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <ImageIcon className="h-4 w-4" /> Immagine
            </button>
          </div>

          {/* Area Firma: DISEGNO */}
          {signMode === "draw" && (
            <div className="space-y-3">
              <div className="relative rounded-xl border border-zinc-300 bg-zinc-50 overflow-hidden dark:border-zinc-700 dark:bg-zinc-950">
                <canvas
                  ref={drawCanvasRef}
                  width={380}
                  height={180}
                  className="w-full touch-none cursor-crosshair bg-transparent"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
                {!signatureDataUrl && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs text-zinc-400">
                    Disegna qui con il mouse o con il dito
                  </div>
                )}
              </div>

              {/* Controlli penna */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500">Colore:</span>
                  {[
                    { color: "#000000", label: "Nero" },
                    { color: "#002B7F", label: "Blu" },
                    { color: "#990000", label: "Rosso" },
                  ].map((c) => (
                    <button
                      key={c.color}
                      onClick={() => setPenColor(c.color)}
                      style={{ backgroundColor: c.color }}
                      className={`h-6 w-6 rounded-full border-2 transition ${
                        penColor === c.color ? "border-emerald-500 scale-110" : "border-transparent"
                      }`}
                      title={c.label}
                    />
                  ))}
                </div>

                <button
                  onClick={clearCanvas}
                  className="text-xs font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  Cancella
                </button>
              </div>
            </div>
          )}

          {/* Area Firma: DIGITA */}
          {signMode === "type" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Scrivi il tuo nome o le tue iniziali:
                </label>
                <input
                  type="text"
                  value={typedName}
                  onChange={handleTypeChange}
                  placeholder="Es. Mario Rossi"
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                />
              </div>

              {typedName && (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                  <span
                    style={{
                      fontFamily: "'Brush Script MT', 'Caveat', cursive, sans-serif",
                      color: penColor,
                      fontSize: "32px",
                    }}
                  >
                    {typedName}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Area Firma: UPLOAD */}
          {signMode === "upload" && (
            <div className="space-y-3">
              <label className="flex h-36 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950">
                <ImageIcon className="h-8 w-8 text-zinc-400" />
                <span className="mt-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Carica immagine firma (PNG con sfondo trasparente)
                </span>
                <input type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={handleImageUpload} />
              </label>

              {signatureDataUrl && (
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-950">
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> Immagine firma caricata
                  </span>
                  <button onClick={() => setSignatureDataUrl(null)} className="text-xs text-red-600 hover:underline">
                    Rimuovi
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Pulsante Azione Finale */}
          <button
            onClick={applySignature}
            disabled={!file || !signatureDataUrl || isProcessing}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isProcessing ? (
              <span>Incorporamento firma in memoria...</span>
            ) : (
              <>
                <Download className="h-5 w-5" />
                <span>Firma e Scarica PDF</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
