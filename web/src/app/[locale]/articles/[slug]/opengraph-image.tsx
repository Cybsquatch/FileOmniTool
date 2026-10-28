import { ARTICLES_REGISTRY, getArticleBySlug } from "@/lib/articles-registry";
import { Language } from "@/lib/i18n/context";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "FileOmniTool article preview";
export const size = OG_SIZE;
export const contentType = "image/png";

const BADGES: Record<string, string> = {
  en: "Article",
  es: "Artículo",
  fr: "Article",
  de: "Artikel",
  pt: "Artigo"
};

export function generateStaticParams() {
  return Object.keys(BADGES).flatMap((locale) => ARTICLES_REGISTRY.map((item) => ({ locale, slug: item.slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const lang = (locale in BADGES ? locale : "en") as Language;
  const item = getArticleBySlug(slug);
  return renderOgImage({ title: item?.title[lang] ?? item?.title.en ?? "FileOmniTool", badge: BADGES[lang] });
}
