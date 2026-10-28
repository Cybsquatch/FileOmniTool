import { GUIDES_REGISTRY, getGuideBySlug } from "@/lib/guides-registry";
import { Language } from "@/lib/i18n/context";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "FileOmniTool guide preview";
export const size = OG_SIZE;
export const contentType = "image/png";

const BADGES: Record<string, string> = {
  en: "Step-by-step guide",
  es: "Guía paso a paso",
  fr: "Guide pas à pas",
  de: "Schritt-für-Schritt-Anleitung",
  pt: "Guia passo a passo"
};

export function generateStaticParams() {
  return Object.keys(BADGES).flatMap((locale) => GUIDES_REGISTRY.map((item) => ({ locale, slug: item.slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const lang = (locale in BADGES ? locale : "en") as Language;
  const item = getGuideBySlug(slug);
  return renderOgImage({ title: item?.title[lang] ?? item?.title.en ?? "FileOmniTool", badge: BADGES[lang] });
}
