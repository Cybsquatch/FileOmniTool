import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { TermsContent } from "@/components/terms/TermsContent";
import { getHreflangAlternates } from "@/lib/seo-helpers";

export const metadata: Metadata = {
  title: "Termini e Condizioni di Servizio | Terms of Service | FileOmniTool",
  description: "Termini e condizioni generali d'uso per FileOmniTool: esclusione di garanzie, limitazione di responsabilità e regolamento del servizio gratuito 100% in-browser.",
  alternates: getHreflangAlternates("/terms", "it"),
  other: {
    "content-language": "it-IT",
  },
  keywords: [
    "termini di servizio",
    "condizioni d'uso",
    "termini legali",
    "disclaimer",
    "responsabilità",
    "terms of service",
    "terms and conditions",
    "términos de servicio",
    "conditions d'utilisation",
    "nutzungsbedingungen"
  ],
  openGraph: {
    title: "Termini e Condizioni di Servizio | FileOmniTool",
    description: "Termini e condizioni generali d'uso per la piattaforma di strumenti file gratuiti nel browser FileOmniTool.",
    url: "https://www.fileomnitool.com/terms",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Termini e Condizioni di Servizio | FileOmniTool",
    description: "Condizioni d'uso e limitazione di responsabilità per FileOmniTool.",
  },
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <TermsContent />
      <Footer />
    </div>
  );
}
