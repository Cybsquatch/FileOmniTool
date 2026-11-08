import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AboutContent } from "@/components/about/AboutContent";
import { NON_DEFAULT_LOCALES, getAboutJsonLd, getAboutMetadata } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

interface LocalizedAboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

function toLocale(locale: string): Language {
  return ((NON_DEFAULT_LOCALES as readonly string[]).includes(locale) ? locale : "en") as Language;
}

export async function generateMetadata({ params }: LocalizedAboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  return getAboutMetadata(toLocale(locale));
}

export default async function LocalizedAboutPage({ params }: LocalizedAboutPageProps) {
  const { locale } = await params;
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutJsonLd(toLocale(locale))) }} />
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}
