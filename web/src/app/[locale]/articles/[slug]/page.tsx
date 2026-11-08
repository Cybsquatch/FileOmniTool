import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES_REGISTRY, getArticleBySlug, getArticleLocales } from "@/lib/articles-registry";
import { ArticlePageClient } from "@/components/articles/ArticlePageClient";
import { NON_DEFAULT_LOCALES, getHreflangAlternates, SAME_AS_LINKS, LOCALE_CONTENT_LANG_MAP, completeDescription } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

interface LocalizedArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of NON_DEFAULT_LOCALES) {
    for (const article of ARTICLES_REGISTRY) {
      params.push({
        locale,
        slug: article.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: LocalizedArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | FileOmniTool" };
  }

  const title = article.metaTitle[validLocale] || article.metaTitle.en;
  const description = completeDescription(article.metaDescription[validLocale] || article.metaDescription.en, validLocale, "article");

  return {
    title: title.includes("FileOmniTool") ? title : `${title} | FileOmniTool`,
    description,
    keywords: [
      article.seoKeyword[validLocale] || article.seoKeyword.en,
      article.category,
      "privacy",
      "cybsquatch",
      "fileomnitool",
    ],
    alternates: getHreflangAlternates(`/articles/${slug}`, validLocale, getArticleLocales(article)),
    ...(getArticleLocales(article).includes(validLocale) ? {} : { robots: { index: false, follow: true } }),
    other: {
      "content-language": LOCALE_CONTENT_LANG_MAP[validLocale],
    },
    openGraph: {
      title,
      description,
      url: `https://www.fileomnitool.com/${validLocale}/articles/${slug}`,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified || article.datePublished,
      authors: ["Cybsquatch"],
      locale: validLocale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocalizedArticlePage({ params }: LocalizedArticlePageProps) {
  const { locale, slug } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = ARTICLES_REGISTRY.filter((a) => a.slug !== slug)
    // Same category first, then the rest; only the fields the "read next" box shows
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 2)
    .map(({ slug: s, coverEmoji, category, title }) => ({ slug: s, coverEmoji, category, title }));

  const articleTitle = article.title[validLocale] || article.title.en;
  const articleExcerpt = article.excerpt[validLocale] || article.excerpt.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleTitle,
    "description": articleExcerpt,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
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
