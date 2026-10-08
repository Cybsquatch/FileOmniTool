import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { getToolById, TOOLS_REGISTRY } from "@/lib/tools-registry";
import { ToolPageClient } from "@/components/tools/ToolPageClient";

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
    return { title: "Tool Not Found | FileOmniTool" };
  }

  return {
    title: tool.metaTitle.en,
    description: tool.metaDescription.en,
    keywords: [tool.seoKeyword.en, tool.seoKeyword.it, "online", "free", "no upload", "browser", "privacy"],
    openGraph: {
      title: tool.metaTitle.en,
      description: tool.metaDescription.en,
      type: "website",
      url: `https://www.fileomnitool.com/tools/${tool.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle.en,
      description: tool.metaDescription.en,
    },
    alternates: {
      canonical: `https://www.fileomnitool.com/tools/${tool.id}`,
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

  // Schema JSON-LD per i motori di ricerca (internazionale in inglese + rich FAQ + Breadcrumbs)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": tool.title.en,
        "url": `https://www.fileomnitool.com/tools/${tool.id}`,
        "description": tool.metaDescription.en,
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
          "ratingCount": "1280"
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.fileomnitool.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": categoryNames[tool.category] || tool.category.toUpperCase(),
            "item": `https://www.fileomnitool.com/#${tool.category}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": tool.title.en,
            "item": `https://www.fileomnitool.com/tools/${tool.id}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": tool.faq.en.map((item) => ({
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
