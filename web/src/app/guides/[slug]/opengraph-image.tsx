import { GUIDES_REGISTRY, getGuideBySlug } from "@/lib/guides-registry";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "FileOmniTool guide preview";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return GUIDES_REGISTRY.map((item) => ({ slug: item.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getGuideBySlug(slug);
  return renderOgImage({ title: item?.title.it ?? "FileOmniTool", badge: "Guida passo-passo" });
}
