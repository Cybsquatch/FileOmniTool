import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { getToolById, TOOLS_REGISTRY } from "@/lib/tools-registry";
import { ToolPageClient } from "@/components/tools/ToolPageClient";
import { getToolMetadata } from "@/lib/seo-helpers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS_REGISTRY.map((tool) => ({
    slug: tool.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolById(slug);

  if (!tool) {
    return { title: "Strumento non trovato | FileOmniTool" };
  }

  return getToolMetadata(tool, "it");
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolById(slug);

  if (!tool) {
    notFound();
  }

  const categoryNames: Record<string, string> = {
    pdf: "Strumenti PDF",
    image: "Strumenti Immagini",
    audio: "Strumenti Audio e Video",
    document: "Documenti e Office",
    text: "Utility Testo e Sviluppo",
    archive: "Gestione Archivi",
  };

  const toolTitle = tool.title.it || tool.title.en;
  const toolDesc = tool.metaDescription.it || tool.description.it;

  // FAQ 100% in italiano per la versione principale (evita penalizzazioni Google per lingua mista)
  const faqs = (tool.faq.it || tool.faq.en || []).map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  }));

  const instructions = tool.instructions.it || tool.instructions.en || [];

  // Schema JSON-LD ottimizzato per Google Rich Snippets (WebApplication + FAQPage + HowTo + BreadcrumbList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": toolTitle,
        "url": `https://www.fileomnitool.com/tools/${tool.id}`,
        "description": toolDesc,
        "inLanguage": "it",
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
          "Compatibile con tutti i moderni browser",
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
            "name": toolTitle,
            "item": `https://www.fileomnitool.com/tools/${tool.id}`,
          },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": faqs,
            },
          ]
        : []),
      ...(instructions.length > 0
        ? [
            {
              "@type": "HowTo",
              "name": `Come usare ${toolTitle}`,
              "description": `Istruzioni passo-passo per usare ${toolTitle} direttamente nel tuo browser.`,
              "step": instructions.map((stepText, idx) => ({
                "@type": "HowToStep",
                "position": idx + 1,
                "name": `Passaggio ${idx + 1}`,
                "text": stepText,
              })),
            },
          ]
        : []),
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

        <ToolPageClient tool={tool} />
      </main>

      <Footer />
    </div>
  );
}
