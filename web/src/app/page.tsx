import React from "react";
import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";
import { getHomeMetadata, getLocalizedUrl, SAME_AS_LINKS } from "@/lib/seo-helpers";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";

export const metadata: Metadata = getHomeMetadata("it");

export default function RootHomePage() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.fileomnitool.com/#website",
        "name": "FileOmniTool",
        "url": getLocalizedUrl("/", "it"),
        "description": "Strumenti per file gratuiti, privati e nel browser | Free, Private & 100% In-Browser File Tools Suite. Zero cloud uploads.",
        "inLanguage": "it",
        "publisher": {
          "@id": "https://www.fileomnitool.com/#organization",
        },
        "creator": {
          "@id": "https://www.fileomnitool.com/#author",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.fileomnitool.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.fileomnitool.com/#organization",
        "name": "FileOmniTool",
        "url": "https://www.fileomnitool.com",
        "logo": "https://www.fileomnitool.com/icon-192.png",
        "sameAs": SAME_AS_LINKS,
      },
      {
        "@type": "Person",
        "@id": "https://www.fileomnitool.com/#author",
        "name": "Cybsquatch",
        "jobTitle": "Lead Developer & Privacy Researcher",
        "url": "https://github.com/Cybsquatch",
        "sameAs": SAME_AS_LINKS,
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
