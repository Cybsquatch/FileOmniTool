import React from "react";
import type { Metadata } from "next";
import { ARTICLES_REGISTRY } from "@/lib/articles-registry";
import { ArticlesIndexClient } from "@/components/articles/ArticlesIndexClient";
import { getHreflangAlternates } from "@/lib/seo-helpers";

export const metadata: Metadata = {
  title: "Articoli, Progetti Open-Source & Privacy Digitale | FileOmniTool",
  description: "Approfondimenti su software open source, sicurezza informatica, alternative gratuite ad Adobe e analisi sui rischi dei convertitori cloud. A cura di Cybsquatch.",
  alternates: getHreflangAlternates("/articles", "it"),
  keywords: [
    "articoli open source",
    "software libero",
    "privacy digitale",
    "alternative adobe",
    "artcraft",
    "convertitori cloud rischi",
    "gdpr file",
    "metadati exif",
    "open source tools",
    "free software guide"
  ],
  openGraph: {
    title: "Articoli & Open-Source Hub | FileOmniTool",
    description: "Approfondimenti tecnici e progetti open source per liberarsi da abbonamenti software e proteggere la privacy dei file.",
    url: "https://www.fileomnitool.com/articles",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articoli, Progetti Open-Source & Privacy Digitale | FileOmniTool",
    description: "Approfondimenti su software open source, sicurezza informatica e alternative libere ad Adobe.",
  },
};

export default function ArticlesPage() {
  return <ArticlesIndexClient articles={ARTICLES_REGISTRY} />;
}
