import { ARTICLES_REGISTRY, getArticleBySlug } from "@/lib/articles-registry";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "FileOmniTool article preview";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return ARTICLES_REGISTRY.map((item) => ({ slug: item.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getArticleBySlug(slug);
  return renderOgImage({ title: item?.title.it ?? "FileOmniTool", badge: "Articolo" });
}
