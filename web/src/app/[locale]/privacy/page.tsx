import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import { NON_DEFAULT_LOCALES, getPrivacyMetadata } from "@/lib/seo-helpers";
import { Language } from "@/lib/i18n/context";

interface LocalizedPrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedPrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  return getPrivacyMetadata(validLocale);
}

export default async function LocalizedPrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
}
