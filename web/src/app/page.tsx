import React from "react";
import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";
import { getHomeMetadata, getLocalizedUrl } from "@/lib/seo-helpers";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";

export const metadata: Metadata = getHomeMetadata("it");

export default function RootHomePage() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "FileOmniTool",
        "url": getLocalizedUrl("/", "it"),
        "description": "Strumenti per file gratuiti, privati e nel browser | Free, Private & 100% In-Browser File Tools Suite. Zero cloud uploads.",
        "inLanguage": "it",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.fileomnitool.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "name": "FileOmniTool Directory Completa Strumenti | In-Browser Tools Directory",
        "description": `${TOOLS_REGISTRY.length} strumenti di elaborazione file client-side nel browser`,
        "numberOfItems": TOOLS_REGISTRY.length,
        "itemListElement": TOOLS_REGISTRY.map((tool, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": tool.title.it || tool.title.en,
          "description": tool.description.it || tool.description.en,
          "url": getLocalizedUrl(`/tools/${tool.id}`, "it"),
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
