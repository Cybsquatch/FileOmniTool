"use client";

import React, { useState } from "react";
import { ShieldCheck, Copy, CheckCircle2, Clock, AlertTriangle, Key } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export const JwtDecoderTool: React.FC = () => {
  const { language } = useLanguage();
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmlvIFJvc3NpIiwiYWRtaW4iOnRydWUsImlhdCI6MTY5NjE1NjgwMCwiZXhwIjoxNzk5OTk5OTk5fQ.signature_preview_only"
  );
  const [headerJson, setHeaderJson] = useState("");
  const [payloadJson, setPayloadJson] = useState("");
  const [signaturePart, setSignaturePart] = useState("");
  const [expiryStatus, setExpiryStatus] = useState<{ expired: boolean; text: string } | null>(null);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const base64UrlDecode = (str: string): string => {
    let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }
    const decoded = atob(base64);
    return decodeURIComponent(
      Array.from(decoded)
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  };

  const decodeJwt = (jwtStr: string) => {
    setError(null);
    setExpiryStatus(null);

    const trimmed = jwtStr.trim();
    if (!trimmed) {
      setHeaderJson("");
      setPayloadJson("");
      setSignaturePart("");
      return;
    }

    const parts = trimmed.split(".");
    if (parts.length < 2) {
      setError(language === "it" ? "Formato token JWT non valido (attese almeno due parti separate da punti)." : "Invalid JWT format.");
      return;
    }

    try {
      const headerStr = base64UrlDecode(parts[0]);
      const headerObj = JSON.parse(headerStr);
      setHeaderJson(JSON.stringify(headerObj, null, 2));

      const payloadStr = base64UrlDecode(parts[1]);
      const payloadObj = JSON.parse(payloadStr);
      setPayloadJson(JSON.stringify(payloadObj, null, 2));

      setSignaturePart(parts[2] || "");

      // Check Expiration (exp)
      if (typeof payloadObj.exp === "number") {
        const expDate = new Date(payloadObj.exp * 1000);
        const now = new Date();
        const isExpired = expDate.getTime() < now.getTime();
        setExpiryStatus({
          expired: isExpired,
          text: `${expDate.toLocaleDateString(language === "it" ? "it-IT" : "en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })} (${isExpired ? (language === "it" ? "SCADUTO" : "EXPIRED") : (language === "it" ? "VALIDO" : "ACTIVE")})`,
        });
      }
    } catch (err: unknown) {
      setError(language === "it" ? "Impossibile decodificare il token JWT (codifica Base64 o JSON non valida)." : "Failed to decode JWT token.");
    }
  };

  React.useEffect(() => {
    decodeJwt(token);
  }, []);

  const handleCopyPayload = async () => {
    if (!payloadJson) return;
    await navigator.clipboard.writeText(payloadJson);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Privacy Guarantee Banner */}
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-50/70 p-4 text-xs text-emerald-800 dark:border-emerald-600/30 dark:bg-emerald-950/40 dark:text-emerald-300">
        <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <p className="leading-relaxed">
          <strong>100% Offline e Privato:</strong> Questo token non viene mai inviato ad alcun server. L&apos;ispezione e la decodifica del payload avvengono esclusivamente nella memoria locale del tuo browser.
        </p>
      </div>

      {/* Input area */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          {language === "it" ? "Incolla il Token JWT (Bearer Token):" : "Paste JWT Token:"}
        </label>
        <textarea
          value={token}
          onChange={(e) => {
            setToken(e.target.value);
            decodeJwt(e.target.value);
          }}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          rows={3}
          className="w-full rounded-2xl border border-zinc-200 bg-white p-4 font-mono text-xs leading-relaxed text-zinc-800 shadow-sm outline-none transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      {expiryStatus && (
        <div
          className={`flex items-center gap-3 rounded-2xl border p-4 text-xs font-medium ${
            expiryStatus.expired
              ? "border-red-300 bg-red-50 text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
              : "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300"
          }`}
        >
          <Clock className="h-4 w-4 shrink-0" />
          <span>
            {language === "it" ? "Data di Scadenza (exp): " : "Expiration Time (exp): "}
            <strong>{expiryStatus.text}</strong>
          </span>
        </div>
      )}

      {/* Decoded Sections */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              HEADER (Algoritmo & Tipo)
            </label>
          </div>
          <pre className="h-64 overflow-x-auto rounded-2xl border border-red-200/60 bg-red-50/30 p-4 font-mono text-xs text-zinc-800 shadow-sm dark:border-red-900/40 dark:bg-zinc-950 dark:text-red-200">
            {headerJson || "// Header vuoto"}
          </pre>
        </div>

        {/* Payload */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              PAYLOAD (Dati & Claims)
            </label>
            {payloadJson && (
              <button
                onClick={handleCopyPayload}
                className="flex items-center gap-1 text-[11px] font-semibold text-purple-600 hover:underline dark:text-purple-400"
              >
                {copiedPayload ? <CheckCircle2 className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                <span>{copiedPayload ? (language === "it" ? "Copiato!" : "Copied!") : (language === "it" ? "Copia JSON" : "Copy")}</span>
              </button>
            )}
          </div>
          <pre className="h-64 overflow-x-auto rounded-2xl border border-purple-200/60 bg-purple-50/30 p-4 font-mono text-xs text-zinc-800 shadow-sm dark:border-purple-900/40 dark:bg-zinc-950 dark:text-purple-200">
            {payloadJson || "// Payload vuoto"}
          </pre>
        </div>
      </div>
    </div>
  );
};
