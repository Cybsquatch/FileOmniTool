import React from "react";
import type { Metadata } from "next";
import { ARTICLES_REGISTRY } from "@/lib/articles-registry";
import { ArticlesIndexClient } from "@/components/articles/ArticlesIndexClient";
import { NON_DEFAULT_LOCALES, getArticlesIndexMetadata } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

interface LocalizedArticlesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedArticlesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  return getArticlesIndexMetadata(validLocale);
}

export default async function LocalizedArticlesPage() {
  return <ArticlesIndexClient articles={ARTICLES_REGISTRY} />;
}
