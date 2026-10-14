"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, Sparkles, Share2, Check, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { AdBanner } from "@/components/ads/AdBanner";
import { SocialLinks } from "@/components/common/SocialLinks";

const COOKIE_NAME = "fot_support_prompt";
const LOCAL_STORAGE_KEY = "fot_support_prompt_ts";
const ONE_WEEK_SECONDS = 7 * 24 * 60 * 60; // 604,800s
const ONE_WEEK_MS = ONE_WEEK_SECONDS * 1000;

const TEXTS = {
  it: {
    title: "File elaborato con successo! 🎉",
    subtitle: "100% In-Browser & Senza Server",
    desc: "FileOmniTool è un software indipendente e completamente gratuito. Tutti i file vengono manipolati nella memoria del tuo browser senza mai essere caricati online, proteggendo la tua riservatezza.",
    supportNotice: "Per aiutarci a mantenere i tool gratuiti e senza abbonamenti, puoi supportare il progetto condividendolo con un collega o supportando il nostro lavoro!",
    sponsorTitle: "SPONSOR",
    shareBtn: "Condividi FileOmniTool",
    shareCopied: "Link copiato negli appunti!",
    continueBtn: "Continua a usare i tool",
  },
  en: {
    title: "File processed successfully! 🎉",
    subtitle: "100% In-Browser & Zero Server Uploads",
    desc: "FileOmniTool is an independent, 100% free software suite with no paid subscriptions. Your files are processed entirely in your device's memory to ensure total privacy.",
    supportNotice: "To help us keep all tools free with zero subscriptions, you can support our project by sharing it with a colleague or supporting our work!",
    sponsorTitle: "SPONSORED",
    shareBtn: "Share FileOmniTool",
    shareCopied: "Link copied to clipboard!",
    continueBtn: "Continue using tools",
  },
  es: {
    title: "¡Archivo procesado con éxito! 🎉",
    subtitle: "100% En el Navegador y Sin Servidores",
    desc: "FileOmniTool es un software independiente y completamente gratuito. Todos tus archivos se procesan en la memoria local de tu navegador con privacidad absoluta.",
    supportNotice: "Para ayudarnos a mantener los servicios gratuitos, ¡puedes apoyar el proyecto compartiendo el enlace con un colega o apoyando nuestro trabajo!",
    sponsorTitle: "PATROCINADO",
    shareBtn: "Compartir FileOmniTool",
    shareCopied: "¡Enlace copiado!",
    continueBtn: "Continuar",
  },
  fr: {
    title: "Fichier traité avec succès ! 🎉",
    subtitle: "100% Dans le Navigateur & Sans Serveur",
    desc: "FileOmniTool est une suite d'outils indépendante et gratuite. Vos fichiers sont manipulés localement dans votre navigateur pour une confidentialité totale.",
    supportNotice: "Pour nous aider à maintenir ces outils gratuits, vous pouvez soutenir notre projet en le partageant avec un collègue !",
    sponsorTitle: "SPONSORISÉ",
    shareBtn: "Partager FileOmniTool",
    shareCopied: "Lien copié !",
    continueBtn: "Continuer",
  },
  de: {
    title: "Datei erfolgreich verarbeitet! 🎉",
    subtitle: "100% Im Browser & Ohne Server-Uploads",
    desc: "FileOmniTool ist eine unabhängige, 100% kostenlose Suite ohne Abonnements. Ihre Dateien werden lokal im Browser verarbeitet, um höchste Privatsphäre zu garantieren.",
    supportNotice: "Damit diese Tools kostenlos bleiben, unterstützen Sie unser Projekt gerne, indem Sie es mit Kollegen teilen!",
    sponsorTitle: "GESPONSERT",
    shareBtn: "FileOmniTool teilen",
    shareCopied: "Link kopiert!",
    continueBtn: "Weiter",
  },
  pt: {
    title: "Arquivo processado com sucesso! 🎉",
    subtitle: "100% No Navegador & Sem Servidores",
    desc: "FileOmniTool é um software independente e 100% gratuito. Todos os arquivos são processados na memória local do seu navegador para garantir privacidade total.",
    supportNotice: "Para nos ajudar a manter as ferramentas gratuitas, você pode apoiar nosso projeto compartilhando com um amigo ou colega!",
    sponsorTitle: "PATROCINADO",
    shareBtn: "Compartilhar FileOmniTool",
    shareCopied: "Link copiado!",
    continueBtn: "Continuar",
  },
};

export const SupportPromptModal: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = TEXTS[language] || TEXTS.en;

  // Verifica se il prompt può essere mostrato (massimo 1 volta ogni 7 giorni)
  const isEligibleToShow = useCallback((): boolean => {
    if (typeof window === "undefined") return false;

    // 1. Controllo Cookie
    const cookies = document.cookie.split("; ");
    const cookieFound = cookies.some((c) => c.startsWith(`${COOKIE_NAME}=`));
    if (cookieFound) {
      return false;
    }

    // 2. Controllo localStorage fallback
    try {
      const storedTs = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedTs) {
        const lastTimestamp = parseInt(storedTs, 10);
        if (!isNaN(lastTimestamp) && Date.now() - lastTimestamp < ONE_WEEK_MS) {
          return false;
        }
      }
    } catch {
      // Ignora errori di storage in modalità privata
    }

    return true;
  }, []);

  // Salva il cookie e il timestamp di visualizzazione per 7 giorni
  const markAsShownForOneWeek = useCallback(() => {
    if (typeof window === "undefined") return;

    try {
      // Scrivi cookie con scadenza a 7 giorni (604800 secondi)
      document.cookie = `${COOKIE_NAME}=1; max-age=${ONE_WEEK_SECONDS}; path=/; SameSite=Lax`;
    } catch {
      // ignore
    }

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, Date.now().toString());
    } catch {
      // ignore
    }
  }, []);

  const openPrompt = useCallback(() => {
    if (isEligibleToShow()) {
      markAsShownForOneWeek();
      // Piccolo ritardo per consentire al file di iniziare il download nativo
      setTimeout(() => {
        setIsOpen(true);
      }, 700);
    }
  }, [isEligibleToShow, markAsShownForOneWeek]);

  // Ascolta click globali su link di download o eventi personalizzati
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Rileva click su tag <a download="...">
      const downloadAnchor = target.closest("a[download]");
      if (downloadAnchor) {
        openPrompt();
        return;
      }

      // Rileva click su pulsanti espliciti di download/salvataggio file
      const downloadBtn = target.closest("button[data-action='download']");
      if (downloadBtn) {
        openPrompt();
        return;
      }
    };

    const handleCustomEvent = () => {
      openPrompt();
    };

    document.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("fot_show_support_prompt", handleCustomEvent);

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("fot_show_support_prompt", handleCustomEvent);
    };
  }, [openPrompt]);

  // Gestione tasto Escape per chiudere
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://www.fileomnitool.com";
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-prompt-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl transition-all sm:p-7 dark:border-zinc-800 dark:bg-zinc-900">
        {/* Pulsante Chiusura Rapida */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          aria-label="Chiudi"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Intestazione Badge */}
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-950/80 dark:text-emerald-300">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              {t.subtitle}
            </span>
            <h3
              id="support-prompt-title"
              className="text-lg font-extrabold text-zinc-900 sm:text-xl dark:text-white"
            >
              {t.title}
            </h3>
          </div>
        </div>

        {/* Testo Spiegazione Trasparente */}
        <div className="mt-4 space-y-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
          <p>{t.desc}</p>
          <p className="font-medium text-emerald-800 dark:text-emerald-300">
            {t.supportNotice}
          </p>
        </div>

        {/* Slot Pubblicitario Compliant (Nessun testo incoraggiante click, etichettato a norma) */}
        <div className="my-4 overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50 p-2.5 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            <span>{t.sponsorTitle}</span>
            <span className="rounded bg-zinc-200/60 px-1.5 py-0.5 text-[9px] dark:bg-zinc-800">
              adv
            </span>
          </div>
          <div className="flex min-h-[250px] items-center justify-center">
            <AdBanner slot="action-card" />
          </div>
        </div>

        {/* Canali Social & Autore */}
        <div className="flex items-center justify-between border-t border-zinc-100 pt-3 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Cybsquatch:</span>
            <SocialLinks size="sm" />
          </div>

          <div className="flex items-center gap-1 text-[11px] text-zinc-400">
            <span>Free Forever</span>
            <Heart className="h-3 w-3 fill-rose-500 text-rose-500" />
          </div>
        </div>

        {/* Bottoni d'Azione */}
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50 sm:w-auto dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {t.continueBtn}
          </button>
          <button
            onClick={handleShare}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-95 sm:w-auto"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>{t.shareCopied}</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" />
                <span>{t.shareBtn}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
