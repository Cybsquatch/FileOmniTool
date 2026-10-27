"use client";

import React, { useState, useRef, useEffect } from "react";
import jsQR from "jsqr";
import { QrCode, Camera, Upload, Copy, Check, ExternalLink, ShieldCheck, RefreshCw } from "lucide-react";

export const QrScannerTool: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upload" | "camera">("upload");
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Scansione da file immagine
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setScanError(null);
    setScanResult(null);

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (event) => {
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code && code.data) {
          setScanResult(code.data);
        } else {
          setScanError("Nessun codice QR valido rilevato nell'immagine. Prova con un'immagine più nitida o ravvicinata.");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  // Scansione live da webcam
  const startCamera = async () => {
    setScanError(null);
    setScanResult(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", "true");
        await videoRef.current.play();
        setCameraActive(true);
        scanCameraLoop();
      }
    } catch (err: any) {
      console.error("Errore accesso fotocamera:", err);
      setScanError("Impossibile accedere alla fotocamera. Verifica i permessi del browser.");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    setCameraActive(false);
  };

  const scanCameraLoop = () => {
    if (!videoRef.current || !canvasRef.current) return;

    if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code && code.data) {
          setScanResult(code.data);
          stopCamera();
          return;
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(scanCameraLoop);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const copyToClipboard = () => {
    if (!scanResult) return;
    navigator.clipboard.writeText(scanResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isUrl = scanResult && (scanResult.startsWith("http://") || scanResult.startsWith("https://"));

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Banner Privacy */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
        <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <div className="text-sm">
          <strong>Scansione 100% Locale:</strong> Le immagini e i fotogrammi della videocamera vengono decodificati direttamente dal processore del tuo dispositivo. Nessun dato video viene inviato a server esterni.
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* Selettore Tab */}
        <div className="mb-6 flex rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800">
          <button
            onClick={() => {
              stopCamera();
              setActiveTab("upload");
            }}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${
              activeTab === "upload"
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-white"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            <Upload className="h-4 w-4" /> Carica Immagine / Screenshot
          </button>
          <button
            onClick={() => {
              setActiveTab("camera");
              startCamera();
            }}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${
              activeTab === "camera"
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-white"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            <Camera className="h-4 w-4" /> Inquadra con Fotocamera
          </button>
        </div>

        {/* Tab 1: Caricamento File */}
        {activeTab === "upload" && (
          <div>
            <label className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:border-emerald-500 hover:bg-emerald-50/20 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:border-emerald-500">
              <QrCode className="h-12 w-12 text-zinc-400" />
              <span className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Trascina qui l&apos;immagine o screenshot del QR Code
              </span>
              <span className="text-xs text-zinc-500 mt-1">PNG, JPG, WebP, GIF (anche da WhatsApp o fatture)</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        )}

        {/* Tab 2: Fotocamera Live */}
        {activeTab === "camera" && (
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-black text-center dark:border-zinc-800">
            <video ref={videoRef} className="h-72 w-full object-cover" />
            <canvas ref={canvasRef} className="hidden" />

            {cameraActive && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="h-48 w-48 rounded-2xl border-2 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)] animate-pulse" />
              </div>
            )}

            <div className="p-3 bg-zinc-900/80 text-xs text-zinc-300 flex items-center justify-between">
              <span>Punta la fotocamera verso il codice QR</span>
              {cameraActive ? (
                <button onClick={stopCamera} className="text-red-400 font-semibold hover:underline">
                  Disattiva
                </button>
              ) : (
                <button onClick={startCamera} className="text-emerald-400 font-semibold hover:underline">
                  Riavvia Fotocamera
                </button>
              )}
            </div>
          </div>
        )}

        {/* Messaggio Errore */}
        {scanError && (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300">
            {scanError}
          </div>
        )}

        {/* Risultato della Scansione */}
        {scanResult && (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-900/60 dark:bg-emerald-950/20">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200 dark:border-emerald-800/60">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                Contenuto Rilevato:
              </span>
              <span className="text-xs text-zinc-500">{scanResult.length} caratteri</span>
            </div>

            <div className="mt-3 break-all font-mono text-sm text-zinc-900 dark:text-zinc-100">
              {scanResult}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-emerald-700"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "Copiato!" : "Copia Testo"}</span>
              </button>

              {isUrl && (
                <a
                  href={scanResult}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-xs font-bold text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Apri Link</span>
                </a>
              )}

              <button
                onClick={() => {
                  setScanResult(null);
                  if (activeTab === "camera") startCamera();
                }}
                className="ml-auto text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                Nuova Scansione
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
