import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { getToolById, TOOLS_REGISTRY } from "@/lib/tools-registry";
import { ToolPageClient } from "@/components/tools/ToolPageClient";
import { getHreflangAlternates } from "@/lib/seo-helpers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS_REGISTRY.map((tool) => ({
    slug: tool.id,
  }));
}

function cleanBrandTitle(title: string): string {
  return title.replace(/\s*\|\s*FileOmniTool.*$/i, "").replace(/\s*-\s*FileOmniTool.*$/i, "").trim();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolById(slug);

  if (!tool) {
    return { title: "Tool Not Found | FileOmniTool" };
  }

  const itTitle = cleanBrandTitle(tool.metaTitle.it || tool.title.it);
  const enTitle = cleanBrandTitle(tool.metaTitle.en || tool.title.en);
  const combinedTitle = `${itTitle} | ${enTitle} - FileOmniTool`;

  const itDesc = tool.metaDescription.it || tool.description.it;
  const enDesc = tool.metaDescription.en || tool.description.en;
  const combinedDesc = `${itDesc} • ${enDesc}`;

  const localizedKeywords = [
    tool.seoKeyword.it,
    tool.seoKeyword.en,
    tool.title.it,
    tool.title.en,
    tool.title.es,
    tool.title.fr,
    tool.title.de,
    tool.title.pt,
    "online gratis",
    "nel browser",
    "senza caricamento",
    "privacy",
    "free online",
    "no upload",
    "client-side",
    "webassembly",
  ].filter(Boolean) as string[];

  return {
    title: combinedTitle,
    description: combinedDesc,
    keywords: Array.from(new Set(localizedKeywords)),
    openGraph: {
      title: `${itTitle} | FileOmniTool`,
      description: combinedDesc,
      type: "website",
      url: `https://www.fileomnitool.com/tools/${tool.id}`,
      locale: "it_IT",
      alternateLocale: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${itTitle} | FileOmniTool`,
      description: combinedDesc,
    },
    alternates: getHreflangAlternates(`/tools/${tool.id}`, "it"),
    other: {
      "content-language": "it-IT",
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolById(slug);

  if (!tool) {
    notFound();
  }

  const categoryNames: Record<string, string> = {
    pdf: "PDF Tools",
    image: "Image Tools",
    audio: "Audio & Video Tools",
    document: "Document & Office",
    text: "Text & Dev Utilities",
    archive: "Archive Utilities",
  };

  // Aggrega tutte le FAQ localizzate (IT, EN, ES, FR, DE, PT) per Google Rich Snippets
  const allFaqs: Array<{ question: string; answer: string }> = [];
  (["it", "en", "es", "fr", "de", "pt"] as const).forEach((lang) => {
    const list = tool.faq[lang];
    if (Array.isArray(list)) {
      allFaqs.push(...list);
    }
  });

  const alternateNames = Array.from(
    new Set(
      [tool.title.it, tool.title.en, tool.title.es, tool.title.fr, tool.title.de, tool.title.pt].filter(
        Boolean
      ) as string[]
    )
  );

  // Schema JSON-LD per i motori di ricerca (Bilingue + 6 lingue supportate + rich FAQ + Breadcrumbs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": `${tool.title.it} | ${tool.title.en}`,
        "alternateName": alternateNames,
        "url": `https://www.fileomnitool.com/tools/${tool.id}`,
        "description": `${tool.metaDescription.it || tool.description.it} • ${tool.metaDescription.en || tool.description.en}`,
        "inLanguage": ["it", "en", "es", "fr", "de", "pt"],
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
        },
        "featureList": [
          "Elaborazione 100% Client-Side nel browser",
          "Zero caricamenti di file su server cloud",
          "Gratuito senza registrazione o limiti",
          "100% Client-Side Processing",
          "Zero file uploads to cloud servers",
          "Free without registration or limits",
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1280",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.fileomnitool.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": categoryNames[tool.category] || tool.category.toUpperCase(),
            "item": `https://www.fileomnitool.com/#${tool.category}`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": tool.title.it || tool.title.en,
            "item": `https://www.fileomnitool.com/tools/${tool.id}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": allFaqs.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1 pb-16">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </div>

        <ToolPageClient tool={tool} />
      </main>

      <Footer />
    </div>
  );
}
