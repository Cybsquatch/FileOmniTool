import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES_REGISTRY, getArticleBySlug } from "@/lib/articles-registry";
import { ArticlePageClient } from "@/components/articles/ArticlePageClient";
import { getHreflangAlternates, SAME_AS_LINKS } from "@/lib/seo-helpers";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES_REGISTRY.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | FileOmniTool" };
  }

  const title = article.metaTitle.it || article.metaTitle.en;
  const description = article.metaDescription.it || article.metaDescription.en;

  return {
    title: `${title} | FileOmniTool`,
    description,
    keywords: [
      article.seoKeyword.it,
      article.seoKeyword.en,
      article.category,
      "open source",
      "privacy",
      "cybsquatch",
      "fileomnitool",
    ],
    alternates: getHreflangAlternates(`/articles/${slug}`, "it"),
    openGraph: {
      title,
      description,
      url: `https://www.fileomnitool.com/articles/${slug}`,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified || article.datePublished,
      authors: ["Cybsquatch"],
      locale: "it_IT",
      alternateLocale: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = ARTICLES_REGISTRY.filter((a) => a.slug !== slug);

  // Article Schema.org JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title.it,
    "description": article.excerpt.it,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "inLanguage": ["it", "en", "es", "fr", "de", "pt"],
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticlePageClient article={article} otherArticles={otherArticles} />
    </>
  );
}
