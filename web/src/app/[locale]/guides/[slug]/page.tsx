import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { GUIDES_REGISTRY, getGuideBySlug } from "@/lib/guides-registry";
import { getToolById } from "@/lib/tools-registry";
import { GuidePageClient } from "@/components/guides/GuidePageClient";
import { NON_DEFAULT_LOCALES, getGuideMetadata, getLocalizedUrl, SAME_AS_LINKS } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

interface LocalizedGuidePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of NON_DEFAULT_LOCALES) {
    for (const guide of GUIDES_REGISTRY) {
      params.push({ locale, slug: guide.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: LocalizedGuidePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found | FileOmniTool" };
  }

  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  return getGuideMetadata(guide, validLocale);
}

export default async function LocalizedGuidePage({ params }: LocalizedGuidePageProps) {
  const { locale, slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  const tool = getToolById(guide.toolId);
  const otherGuides = GUIDES_REGISTRY.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const guideTitle = guide.title[validLocale] || guide.title.en;
  const guideExcerpt = guide.excerpt[validLocale] || guide.excerpt.en;

  // Schema.org multi-graph (HowTo + Article + BreadcrumbList + FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": guideTitle,
        "description": guideExcerpt,
        "inLanguage": validLocale,
        "tool": tool
          ? [
              {
                "@type": "HowToTool",
                "name": tool.title[validLocale] || tool.title.en,
                "url": getLocalizedUrl(`/tools/${tool.id}`, validLocale),
              },
            ]
          : [],
        "step": guide.steps.map((s, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": s.title[validLocale] || s.title.en,
          "text": s.description[validLocale] || s.description.en,
          "url": `${getLocalizedUrl(`/guides/${guide.slug}`, validLocale)}#step-${idx + 1}`,
        })),
      },
      {
        "@type": "Article",
        "headline": guideTitle,
        "description": guideExcerpt,
        "datePublished": guide.datePublished,
        "inLanguage": validLocale,
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
            "item": getLocalizedUrl("/", validLocale),
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Guides",
            "item": getLocalizedUrl("/guides", validLocale),
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": guideTitle,
            "item": getLocalizedUrl(`/guides/${guide.slug}`, validLocale),
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": guide.faq.map((item) => ({
          "@type": "Question",
          "name": item.question[validLocale] || item.question.en,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer[validLocale] || item.answer.en,
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

        <GuidePageClient guide={guide} otherGuides={otherGuides} />
      </main>

      <Footer />
    </div>
  );
}
