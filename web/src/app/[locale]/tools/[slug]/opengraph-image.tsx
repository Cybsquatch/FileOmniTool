import { TOOLS_REGISTRY, getToolById } from "@/lib/tools-registry";
import { Language } from "@/lib/i18n/context";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "FileOmniTool tool preview";
export const size = OG_SIZE;
export const contentType = "image/png";

const BADGES: Record<string, string> = {
  en: "100% in your browser · no upload",
  es: "100% en tu navegador · sin subidas",
  fr: "100 % dans votre navigateur · sans envoi",
  de: "100 % im Browser · kein Upload",
  pt: "100% no navegador · sem upload",
};

export function generateStaticParams() {
  return Object.keys(BADGES).flatMap((locale) => TOOLS_REGISTRY.map((tool) => ({ locale, slug: tool.id })));
}

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const lang = (locale in BADGES ? locale : "en") as Language;
  const tool = getToolById(slug);
  return renderOgImage({
    title: tool?.title[lang] ?? tool?.title.en ?? "FileOmniTool",
    subtitle: tool?.description[lang] ?? tool?.description.en,
    badge: BADGES[lang],
  });
}
