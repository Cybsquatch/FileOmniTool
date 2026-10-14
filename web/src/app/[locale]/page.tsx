import React from "react";
import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";
import { NON_DEFAULT_LOCALES, getHomeMetadata, getLocalizedUrl, SAME_AS_LINKS } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";

interface LocalizedHomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  return getHomeMetadata(validLocale);
}

export default async function LocalizedHomePage({ params }: LocalizedHomePageProps) {
  const { locale } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${getLocalizedUrl("/", validLocale)}#website`,
        "name": "FileOmniTool",
        "url": getLocalizedUrl("/", validLocale),
        "inLanguage": validLocale,
        "publisher": {
          "@id": "https://www.fileomnitool.com/#organization",
        },
        "creator": {
          "@id": "https://www.fileomnitool.com/#author",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${getLocalizedUrl("/", validLocale)}?q={search_term_string}`,
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
        "name": `FileOmniTool (${validLocale.toUpperCase()}) Tools Directory`,
        "numberOfItems": TOOLS_REGISTRY.length,
        "itemListElement": TOOLS_REGISTRY.map((tool, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": tool.title[validLocale] || tool.title.en,
          "description": tool.description[validLocale] || tool.description.en,
          "url": getLocalizedUrl(`/tools/${tool.id}`, validLocale),
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
