"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  variant?: "pill" | "banner" | "compact";
  className?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  description,
  url,
  variant = "pill",
  className = "",
}) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getShareUrl = () => {
    if (url) return url;
    if (typeof window !== "undefined") return window.location.href;
    return "https://www.fileomnitool.com";
  };

  const shareTitle = title || (language === "it" ? "FileOmniTool - Strumenti File 100% Privati nel Browser" : "FileOmniTool - 100% Private In-Browser File Tools");
  const shareText = description || (language === "it" 
    ? "Usa questo strumento gratuito e privato: elabora i file direttamente nel tuo browser senza caricare nulla sul cloud!" 
    : "Free, private in-browser tool: process your files locally with zero cloud uploads!");

  const labels: Record<string, { share: string; copied: string; copy: string; bannerTitle: string; bannerSub: string }> = {
    it: {
      share: "Condividi",
      copied: "Copiato!",
      copy: "Copia link",
      bannerTitle: "Ti è stato utile questo strumento?",
      bannerSub: "Condividilo con un collega o amico: zero registrazioni e 100% gratuito.",
    },
    en: {
      share: "Share",
      copied: "Copied!",
      copy: "Copy link",
      bannerTitle: "Found this tool helpful?",
      bannerSub: "Share it with a colleague or friend: zero signup and 100% free.",
    },
    es: {
      share: "Compartir",
      copied: "¡Copiado!",
      copy: "Copiar enlace",
      bannerTitle: "¿Te ha sido útil esta herramienta?",
      bannerSub: "Compártela con un amigo o compañero: 100% gratuita y sin registros.",
    },
    fr: {
      share: "Partager",
      copied: "Copié !",
      copy: "Copier le lien",
      bannerTitle: "Cet outil vous a été utile ?",
      bannerSub: "Partagez-le avec vos proches : 100% gratuit et sans inscription.",
    },
    de: {
      share: "Teilen",
      copied: "Kopiert!",
      copy: "Link kopieren",
      bannerTitle: "War dieses Tool hilfreich?",
      bannerSub: "Teilen Sie es mit Kollegen oder Freunden: 100% kostenlos ohne Anmeldung.",
    },
    pt: {
      share: "Compartilhar",
      copied: "Copiado!",
      copy: "Copiar link",
      bannerTitle: "Achou esta ferramenta útil?",
      bannerSub: "Compartilhe com um amigo ou colega: 100% gratuito e sem cadastro.",
    },
  };

  const l = labels[language] || labels.en;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: getShareUrl(),
        });
        return;
      } catch {
        // User cancelled or unsupported, fallback to modal
      }
    }
    setIsOpen(!isOpen);
  };

  const currentUrl = getShareUrl();
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} - ${shareText} ${currentUrl}`)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareTitle}`)}&url=${encodeURIComponent(currentUrl)}&via=cybsquatch`;

  // 1. Variant: Banner at the bottom of the tool
  if (variant === "banner") {
    return (
      <div className={`rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/60 to-teal-50/30 p-5 shadow-xs dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-teal-950/10 ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <Share2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>{l.bannerTitle}</span>
            </h3>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
              {l.bannerSub}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300/80 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs transition hover:bg-emerald-50 hover:border-emerald-400 dark:border-emerald-800 dark:bg-zinc-900 dark:text-emerald-300 dark:hover:bg-zinc-800"
              title="WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-sky-300/80 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700 shadow-xs transition hover:bg-sky-50 hover:border-sky-400 dark:border-sky-800 dark:bg-zinc-900 dark:text-sky-300 dark:hover:bg-zinc-800"
              title="Telegram"
            >
              <Send className="h-3.5 w-3.5 text-sky-500" />
              <span>Telegram</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{l.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{l.copy}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Variant: Pill Button in Header with popover
  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={handleNativeShare}
        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-semibold text-zinc-700 shadow-xs transition hover:bg-zinc-100 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
      >
        <Share2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>{l.share}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-zinc-200/90 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {l.share}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-zinc-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-zinc-700 transition hover:bg-sky-50 hover:text-sky-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <Send className="h-4 w-4 text-sky-500" />
              <span>Telegram</span>
            </a>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <svg className="h-4 w-4 text-zinc-700 dark:text-zinc-300 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X (Twitter)</span>
            </a>
            <div className="my-1 border-t border-zinc-100 dark:border-zinc-800" />
            <button
              onClick={() => {
                handleCopy();
                setTimeout(() => setIsOpen(false), 800);
              }}
              className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{l.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-zinc-400" />
                  <span>{l.copy}</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
