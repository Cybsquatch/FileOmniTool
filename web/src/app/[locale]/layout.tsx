import React from "react";
import { NON_DEFAULT_LOCALES, LOCALE_CONTENT_LANG_MAP } from "@/lib/seo-helpers";
import { LanguageProvider, Language } from "@/lib/i18n/context";

export async function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({
    locale,
  }));
}

// Unknown first segments (e.g. /about) must 404, not render the home page as a soft duplicate
export const dynamicParams = false;

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const validLocale = (NON_DEFAULT_LOCALES.includes(locale as any) ? locale : "en") as Language;
  const contentLang = LOCALE_CONTENT_LANG_MAP[validLocale] || validLocale;

  return (
    <LanguageProvider initialLanguage={validLocale}>
      {/* The root layout hardcodes lang="it"; fix it for this locale before paint (Content-Language header is set in next.config.ts) */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(contentLang)}` }} />
      {children}
    </LanguageProvider>
  );
}
