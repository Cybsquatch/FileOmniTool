import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { getHreflangAlternates } from "@/lib/seo-helpers";

export const metadata: Metadata = {
  title: "Garanzia di Privacy & Architettura Zero-Upload | Privacy Guarantee | FileOmniTool",
  description: "Scopri come FileOmniTool garantisce la privacy al 100% elaborando ogni file nel tuo browser tramite WebAssembly e Canvas. Zero cloud upload. Learn how FileOmniTool guarantees 100% in-browser privacy.",
  alternates: getHreflangAlternates("/privacy", "it"),
  keywords: [
    "garanzia privacy",
    "zero upload",
    "sicurezza file",
    "privacy convertitore",
    "privacy guarantee",
    "zero server uploads",
    "client-side privacy",
    "garantía de privacidad",
    "garantie de confidentialité",
    "datenschutzgarantie",
    "garantia de privacidade"
  ],
  openGraph: {
    title: "Garanzia di Privacy & Architettura Zero-Upload | FileOmniTool",
    description: "Sicurezza e riservatezza totale: elaborazione 100% nel browser senza alcun caricamento su server cloud.",
    url: "https://www.fileomnitool.com/privacy",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garanzia di Privacy & Architettura Zero-Upload | FileOmniTool",
    description: "I tuoi documenti non lasciano mai il tuo dispositivo. Elaborazione 100% client-side.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
}
