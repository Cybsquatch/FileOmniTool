"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check, X, Sliders, Lock, ExternalLink } from "lucide-react";
import { useLanguage, Language } from "@/lib/i18n/context";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const STORAGE_KEY = "omnitool_cookie_consent";

const COOKIE_I18N: Record<Language, {
  title: string;
  desc: string;
  acceptAll: string;
  rejectAll: string;
  customize: string;
  savePreferences: string;
  privacyLink: string;
  termsLink: string;
  categoryNecessaryTitle: string;
  categoryNecessaryDesc: string;
  categoryAnalyticsTitle: string;
  categoryAnalyticsDesc: string;
  categoryMarketingTitle: string;
  categoryMarketingDesc: string;
  alwaysActive: string;
}> = {
  it: {
    title: "Gestione del Consenso Cookie & Privacy (GDPR)",
    desc: "FileOmniTool rispetta la tua privacy: tutti i file vengono elaborati al 100% nel tuo browser (zero upload su server). Utilizziamo cookie tecnici essenziali e, previo tuo consenso, cookie di analisi (Google Analytics) e annunci (Google AdSense, Adsterra) per mantenere gli strumenti gratuiti.",
    acceptAll: "Accetta Tutti",
    rejectAll: "Solo Necessari",
    customize: "Personalizza",
    savePreferences: "Salva Preferenze",
    privacyLink: "Informativa Privacy",
    termsLink: "Termini di Servizio",
    categoryNecessaryTitle: "Cookie Tecnici (Essenziali)",
    categoryNecessaryDesc: "Indispensabili per il funzionamento del sito (lingua, preferenze e sicurezza). Non possono essere disattivati.",
    categoryAnalyticsTitle: "Cookie Analitici (Statistiche)",
    categoryAnalyticsDesc: "Ci aiutano a capire come viene usato il sito con metriche aggregate e anonime per migliorare le prestazioni.",
    categoryMarketingTitle: "Cookie Pubblicitari (Sponsor)",
    categoryMarketingDesc: "Permettono di erogare banner pubblicitari non invasivi necessari a coprire i costi di hosting e sviluppo.",
    alwaysActive: "Sempre Attivo",
  },
  en: {
    title: "Cookie Consent & Privacy Management (GDPR)",
    desc: "FileOmniTool respects your privacy: all files are processed 100% client-side in your browser (zero cloud uploads). We use essential technical cookies and, with your consent, analytics (Google Analytics) and ad cookies (Google AdSense, Adsterra) to keep all tools free.",
    acceptAll: "Accept All",
    rejectAll: "Essential Only",
    customize: "Customize",
    savePreferences: "Save Preferences",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Service",
    categoryNecessaryTitle: "Technical Cookies (Essential)",
    categoryNecessaryDesc: "Required for core website functionality (language, settings, and security). Cannot be disabled.",
    categoryAnalyticsTitle: "Analytics Cookies (Statistics)",
    categoryAnalyticsDesc: "Help us understand website usage through aggregate, anonymized metrics to improve speed and tools.",
    categoryMarketingTitle: "Advertising Cookies (Sponsors)",
    categoryMarketingDesc: "Enable non-intrusive ad banners that fund hosting and ongoing tool development.",
    alwaysActive: "Always Active",
  },
  es: {
    title: "Gestión de Consentimiento de Cookies (RGPD)",
    desc: "FileOmniTool respeta tu privacidad: todos los archivos se procesan 100% en tu navegador (cero subidas a servidores). Usamos cookies técnicas necesarias y, con tu consentimiento, cookies analíticas y publicitarias para mantener el servicio gratuito.",
    acceptAll: "Aceptar Todas",
    rejectAll: "Solo Necesarias",
    customize: "Personalizar",
    savePreferences: "Guardar Preferencias",
    privacyLink: "Política de Privacidad",
    termsLink: "Términos de Servicio",
    categoryNecessaryTitle: "Cookies Técnicas (Esenciales)",
    categoryNecessaryDesc: "Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.",
    categoryAnalyticsTitle: "Cookies Analíticas",
    categoryAnalyticsDesc: "Métricas anónimas para evaluar el rendimiento y uso de las herramientas.",
    categoryMarketingTitle: "Cookies Publicitarias",
    categoryMarketingDesc: "Permiten mostrar anuncios no invasivos que financian el servicio gratuito.",
    alwaysActive: "Siempre Activo",
  },
  fr: {
    title: "Gestion du Consentement des Cookies (RGPD)",
    desc: "FileOmniTool respecte votre vie privée : vos fichiers sont traités à 100% dans votre navigateur (zéro téléversement). Nous utilisons des cookies techniques essentiels et, avec votre accord, des cookies analytiques et publicitaires pour maintenir les outils gratuits.",
    acceptAll: "Tout Accepter",
    rejectAll: "Essentiels Uniquement",
    customize: "Personnaliser",
    savePreferences: "Enregistrer les Choix",
    privacyLink: "Politique de Confidentialité",
    termsLink: "Conditions d'Utilisation",
    categoryNecessaryTitle: "Cookies Techniques (Essentiels)",
    categoryNecessaryDesc: "Indispensables au fonctionnement du site. Ne peuvent être désactivés.",
    categoryAnalyticsTitle: "Cookies Analytiques",
    categoryAnalyticsDesc: "Statistiques anonymisées pour améliorer l'expérience utilisateur.",
    categoryMarketingTitle: "Cookies Publicitaires",
    categoryMarketingDesc: "Affichent des bannières non intrusives finançant l'hébergement gratuit.",
    alwaysActive: "Toujours Actif",
  },
  de: {
    title: "Cookie-Einwilligung & Datenschutz (DSGVO)",
    desc: "FileOmniTool respektiert Ihre Privatsphäre: Alle Dateien werden zu 100% lokal im Browser verarbeitet (kein Server-Upload). Wir verwenden essenzielle Cookies sowie mit Ihrer Einwilligung Analyse- und Werbe-Cookies, um den Dienst kostenlos anzubieten.",
    acceptAll: "Alle Akzeptieren",
    rejectAll: "Nur Essenzielle",
    customize: "Anpassen",
    savePreferences: "Einstellungen Speichern",
    privacyLink: "Datenschutzerklärung",
    termsLink: "Nutzungsbedingungen",
    categoryNecessaryTitle: "Essenzielle Cookies",
    categoryNecessaryDesc: "Erforderlich für den grundlegenden Betrieb der Webseite. Nicht deaktivierbar.",
    categoryAnalyticsTitle: "Analyse-Cookies",
    categoryAnalyticsDesc: "Anonymisierte Statistiken zur Optimierung von Geschwindigkeit und Funktionen.",
    categoryMarketingTitle: "Werbe-Cookies",
    categoryMarketingDesc: "Ermöglichen unaufdringliche Anzeigen zur Deckung der Betriebskosten.",
    alwaysActive: "Immer Aktiv",
  },
  pt: {
    title: "Gestão de Cookies e Privacidade (RGPD / LGPD)",
    desc: "O FileOmniTool respeita a sua privacidade: todos os arquivos são processados 100% no seu navegador (zero uploads). Usamos cookies essenciais e, com o seu consentimento, cookies de análise e publicidade para manter o serviço gratuito.",
    acceptAll: "Aceitar Todos",
    rejectAll: "Apenas Essenciais",
    customize: "Personalizar",
    savePreferences: "Salvar Preferências",
    privacyLink: "Política de Privacidade",
    termsLink: "Termos de Uso",
    categoryNecessaryTitle: "Cookies Técnicos (Essenciais)",
    categoryNecessaryDesc: "Necessários para o funcionamento básico. Não podem ser desativados.",
    categoryAnalyticsTitle: "Cookies Analíticos",
    categoryAnalyticsDesc: "Métricas anônimas para monitorar o desempenho e melhorar as ferramentas.",
    categoryMarketingTitle: "Cookies de Publicidade",
    categoryMarketingDesc: "Exibição de anúncios não invasivos que mantêm as ferramentas gratuitas.",
    alwaysActive: "Sempre Ativo",
  },
};

export const CookieConsent: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  const t = COOKIE_I18N[language] || COOKIE_I18N.en;

  useEffect(() => {
    // Check existing stored consent
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setIsVisible(true);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(stored);
        setAnalyticsAllowed(parsed.analytics);
        setMarketingAllowed(parsed.marketing);
        // Dispatch consent to window
        dispatchConsentEvent(parsed);
      } catch {
        setIsVisible(true);
      }
    }

    // Listen for manual request to reopen preferences (from footer link)
    const handleReopen = () => {
      setIsVisible(true);
      setShowCustomize(true);
    };

    window.addEventListener("open_cookie_preferences", handleReopen);
    return () => window.removeEventListener("open_cookie_preferences", handleReopen);
  }, []);

  const dispatchConsentEvent = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("cookie_consent_updated", { detail: prefs })
      );
    }
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setAnalyticsAllowed(analytics);
    setMarketingAllowed(marketing);
    setIsVisible(false);
    setShowCustomize(false);
    dispatchConsentEvent(prefs);
  };

  const handleAcceptAll = () => savePreferences(true, true);
  const handleRejectAll = () => savePreferences(false, false);
  const handleSaveCustom = () => savePreferences(analyticsAllowed, marketingAllowed);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Gestione Consenso Cookie"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-200/90 bg-white/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/95">
        {!showCustomize ? (
          /* Simple Standard Banner */
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  {t.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {t.desc}
                </p>
                <div className="pt-1 flex flex-wrap gap-3 text-xs">
                  <Link
                    href={language === "it" ? "/privacy" : `/${language}/privacy`}
                    className="font-medium text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400"
                  >
                    {t.privacyLink}
                  </Link>
                  <span>•</span>
                  <Link
                    href={language === "it" ? "/terms" : `/${language}/terms`}
                    className="font-medium text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400"
                  >
                    {t.termsLink}
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => setShowCustomize(true)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-850 dark:text-zinc-200"
              >
                <Sliders className="h-3.5 w-3.5" />
                <span>{t.customize}</span>
              </button>
              <button
                onClick={handleRejectAll}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {t.rejectAll}
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-98"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          /* Customization Preferences Modal */
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  {t.title} - Preferenze Dettagliate
                </h3>
              </div>
              <button
                onClick={() => setShowCustomize(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 dark:border-zinc-800 dark:bg-zinc-850/50">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-zinc-900 dark:text-white">
                    <Lock className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{t.categoryNecessaryTitle}</span>
                  </div>
                  <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                    {t.categoryNecessaryDesc}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-bold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                  {t.alwaysActive}
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 dark:border-zinc-800 dark:bg-zinc-850/50">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {t.categoryAnalyticsTitle}
                  </span>
                  <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                    {t.categoryAnalyticsDesc}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsAllowed}
                  onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                  className="h-4 w-4 rounded accent-emerald-600 mt-1 cursor-pointer"
                  aria-label="Abilita cookie analitici"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 dark:border-zinc-800 dark:bg-zinc-850/50">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {t.categoryMarketingTitle}
                  </span>
                  <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                    {t.categoryMarketingDesc}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketingAllowed}
                  onChange={(e) => setMarketingAllowed(e.target.checked)}
                  className="h-4 w-4 rounded accent-emerald-600 mt-1 cursor-pointer"
                  aria-label="Abilita cookie pubblicitari"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={handleRejectAll}
                className="rounded-xl border border-zinc-300 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {t.rejectAll}
              </button>
              <button
                onClick={handleSaveCustom}
                className="rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300"
              >
                {t.savePreferences}
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-98"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
