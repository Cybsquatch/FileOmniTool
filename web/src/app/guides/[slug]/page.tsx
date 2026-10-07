import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { GUIDES_REGISTRY, getGuideBySlug } from "@/lib/guides-registry";
import { getToolById } from "@/lib/tools-registry";
import { 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Wrench,
  BookOpen
} from "lucide-react";

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
    return { title: "Guide Not Found | FileOmniTool" };
  }

  return {
    title: guide.metaTitle.en,
    description: guide.metaDescription.en,
    keywords: [
      guide.seoKeyword.en,
      guide.seoKeyword.it,
      "guide",
      "tutorial",
      "how to",
      "free",
      "in browser",
      "no upload",
      "privacy"
    ],
    alternates: {
      canonical: `https://www.fileomnitool.com/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.metaTitle.en,
      description: guide.metaDescription.en,
      url: `https://www.fileomnitool.com/guides/${guide.slug}`,
      type: "article",
      publishedTime: guide.datePublished,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle.en,
      description: guide.metaDescription.en,
    },
  };
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
        "name": guide.title.en,
        "description": guide.excerpt.en,
        "tool": tool
          ? [
              {
                "@type": "HowToTool",
                "name": tool.title.en,
                "url": `https://www.fileomnitool.com/tools/${tool.id}`,
              },
            ]
          : [],
        "step": guide.steps.map((s, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": s.title.en,
          "text": s.description.en,
          "url": `https://www.fileomnitool.com/guides/${guide.slug}#step-${idx + 1}`,
        })),
      },
      {
        "@type": "Article",
        "headline": guide.title.en,
        "description": guide.excerpt.en,
        "datePublished": guide.datePublished,
        "author": {
          "@type": "Organization",
          "name": "FileOmniTool Editorial Team",
          "url": "https://www.fileomnitool.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "FileOmniTool",
          "url": "https://www.fileomnitool.com",
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
            "name": "Guides",
            "item": "https://www.fileomnitool.com/guides",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": guide.title.en,
            "item": `https://www.fileomnitool.com/guides/${guide.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": guide.faq.map((item) => ({
          "@type": "Question",
          "name": item.question.en,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer.en,
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

        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <Link href="/guides" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Guides
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-xs sm:max-w-md">
              {guide.title.en}
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
              {guide.category.toUpperCase()} GUIDE
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-zinc-400" />
              {guide.readTime} read
            </span>
            <span>•</span>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>100% Client-Side</span>
            </div>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-zinc-900 dark:text-white leading-tight">
            {guide.title.en}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed dark:text-zinc-300">
            {guide.excerpt.en}
          </p>
        </header>

        {/* Interactive Tool Launcher CTA Card */}
        {tool && (
          <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-r from-emerald-50/80 via-white to-teal-50/60 p-6 shadow-sm dark:border-emerald-600/40 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-900">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    <Wrench className="h-4 w-4" />
                    <span>Free In-Browser Tool</span>
                  </div>
                  <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
                    {tool.title.en}
                  </h2>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    {tool.description.en}
                  </p>
                </div>

                <Link
                  href={`/tools/${tool.id}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 hover:shadow-lg"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Launch Tool Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Main Content Body */}
        <article className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Introduction Paragraph */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Why In-Browser Processing Matters
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {guide.intro.en}
            </p>
          </div>

          {/* Step-by-Step Illustrated Guide */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Step-by-Step Walkthrough
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              {guide.steps.map((step, idx) => (
                <div
                  key={idx}
                  id={`step-${idx + 1}`}
                  className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-5 dark:border-zinc-800/80 dark:bg-zinc-950/40"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                      {step.title.en}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {step.description.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Technical Architecture & Security
              </h2>
            </div>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {guide.deepDive.en}
            </p>
          </div>

          {/* Mid-Article Ad Banner */}
          <div className="pt-2">
            <AdBanner slot="leaderboard" />
          </div>

          {/* Frequently Asked Questions */}
          <section className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {guide.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40"
                >
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {item.question.en}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.answer.en}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Guides Section */}
          <section className="pt-4">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                More Practical Guides
              </h2>
              <Link
                href="/guides"
                className="text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
              >
                View all guides →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {otherGuides.map((other) => (
                <Link
                  key={other.slug}
                  href={`/guides/${other.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-800"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {other.category}
                    </span>
                    <h3 className="mt-1 text-xs font-bold text-zinc-900 group-hover:text-emerald-600 transition dark:text-white dark:group-hover:text-emerald-400 line-clamp-2">
                      {other.title.en}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>Read Guide</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
