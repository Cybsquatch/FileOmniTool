import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { getToolById, TOOLS_REGISTRY } from "@/lib/tools-registry";
import { ToolPageClient } from "@/components/tools/ToolPageClient";
import { NON_DEFAULT_LOCALES, getToolMetadata, getLocalizedUrl } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

interface LocalizedToolPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of NON_DEFAULT_LOCALES) {
    for (const tool of TOOLS_REGISTRY) {
      params.push({ locale, slug: tool.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: LocalizedToolPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = getToolById(slug);

  if (!tool) {
    return { title: "Tool Not Found | FileOmniTool" };
  }

  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  return getToolMetadata(tool, validLocale);
}

export default async function LocalizedToolPage({ params }: LocalizedToolPageProps) {
  const { locale, slug } = await params;
  const tool = getToolById(slug);

  if (!tool) {
    notFound();
  }

  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;

  const toolTitle = tool.title[validLocale] || tool.title.en;
  const toolDesc = tool.description[validLocale] || tool.description.en;

  const faqs = (tool.faq[validLocale] || tool.faq.en || []).map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  }));

  const instructions = tool.instructions[validLocale] || tool.instructions.en || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": toolTitle,
        "url": getLocalizedUrl(`/tools/${tool.id}`, validLocale),
        "description": toolDesc,
        "inLanguage": validLocale,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "featureList": [
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
            "item": getLocalizedUrl("/", validLocale),
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": tool.category.toUpperCase(),
            "item": `${getLocalizedUrl("/", validLocale)}#${tool.category}`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": toolTitle,
            "item": getLocalizedUrl(`/tools/${tool.id}`, validLocale),
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
              "name": `How to use ${toolTitle}`,
              "description": `Step-by-step instructions to use ${toolTitle} client-side in your browser.`,
              "step": instructions.map((stepText, idx) => ({
                "@type": "HowToStep",
                "position": idx + 1,
                "name": `Step ${idx + 1}`,
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
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </div>

        <ToolPageClient tool={tool} />
      </main>

      <Footer />
    </div>
  );
}
