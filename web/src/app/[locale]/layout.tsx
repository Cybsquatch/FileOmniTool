import React from "react";
import { NON_DEFAULT_LOCALES } from "@/lib/seo-helpers";
import { LanguageProvider, Language } from "@/lib/i18n/context";

export async function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({
    locale,
  }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;

  return (
    <LanguageProvider initialLanguage={validLocale}>
      {children}
    </LanguageProvider>
  );
}
