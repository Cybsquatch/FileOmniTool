import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { GUIDES_REGISTRY } from "@/lib/guides-registry";
import { GuidesIndexClient } from "@/components/guides/GuidesIndexClient";
import { getHreflangAlternates } from "@/lib/seo-helpers";

export const metadata: Metadata = {
  title: "Guide e Tutorial sui File nel Browser | FileOmniTool",
  description: "Guide passo-passo per unire PDF, convertire immagini, estrarre audio MP3 e proteggere la privacy con strumenti 100% nel browser senza upload.",
  alternates: getHreflangAlternates("/guides", "it"),
  keywords: [
    "guide file",
    "tutorial pdf",
    "convertire immagini",
    "estrarre audio",
    "privacy online",
    "file tutorials",
    "how to merge pdf",
    "in-browser tools",
    "no upload guides",
    "guías archivos",
    "guides fichiers",
    "datei anleitungen",
    "tutoriais de arquivos"
  ],
  openGraph: {
    title: "Guide e Tutorial sui File nel Browser | FileOmniTool",
    description: "Scopri come unire PDF, comprimere foto ed elaborare file localmente con zero caricamenti su server.",
    url: "https://www.fileomnitool.com/guides",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide e Tutorial sui File nel Browser | FileOmniTool",
    description: "Guide e tutorial completi per elaborare file in locale nel browser.",
  },
};

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      <main className="flex-1 pb-16">

        <GuidesIndexClient guides={GUIDES_REGISTRY} />
      </main>

      <Footer />
    </div>
  );
}
