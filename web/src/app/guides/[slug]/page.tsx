import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { GUIDES_REGISTRY, getGuideBySlug } from "@/lib/guides-registry";
import { getToolById } from "@/lib/tools-registry";
import { GuidePageClient } from "@/components/guides/GuidePageClient";
import { getHreflangAlternates, SAME_AS_LINKS, getGuideMetadata } from "@/lib/seo-helpers";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES_REGISTRY.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guida non trovata | FileOmniTool" };
  }

  return getGuideMetadata(guide, "it");
}

export default async function SingleGuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const tool = getToolById(guide.toolId);
  const otherGuides = GUIDES_REGISTRY.filter((g) => g.slug !== guide.slug).slice(0, 3);

  // Schema.org multi-graph (HowTo + Article + BreadcrumbList + FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": guide.title.it,
        "description": guide.excerpt.it,
        "inLanguage": "it",
        "tool": tool
          ? [
              {
                "@type": "HowToTool",
                "name": tool.title.it,
                "url": `https://www.fileomnitool.com/tools/${tool.id}`,
              },
            ]
          : [],
        "step": guide.steps.map((s, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": s.title.it,
          "text": s.description.it,
          "url": `https://www.fileomnitool.com/guides/${guide.slug}#step-${idx + 1}`,
        })),
      },
      {
        "@type": "Article",
        "headline": guide.title.it,
        "alternativeHeadline": guide.title.en,
        "description": guide.excerpt.it,
        "datePublished": guide.datePublished,
        "inLanguage": "it",
        "author": {
          "@type": "Person",
          "name": "Cybsquatch",
          "jobTitle": "Software Developer & Digital Privacy Advocate",
          "url": "https://github.com/Cybsquatch",
          "sameAs": SAME_AS_LINKS,
        },
        "publisher": {
          "@type": "Organization",
          "name": "FileOmniTool",
          "url": "https://www.fileomnitool.com",
          "logo": "https://www.fileomnitool.com/icon-192.png",
          "sameAs": SAME_AS_LINKS,
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
            "name": "Guide",
            "item": "https://www.fileomnitool.com/guides",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": guide.title.it,
            "item": `https://www.fileomnitool.com/guides/${guide.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": guide.faq.map((item) => ({
          "@type": "Question",
          "name": item.question.it,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer.it,
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
        {/* Top Ad Banner */}
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </div>

        <GuidePageClient guide={guide} otherGuides={otherGuides} />
      </main>

      <Footer />
    </div>
  );
}
