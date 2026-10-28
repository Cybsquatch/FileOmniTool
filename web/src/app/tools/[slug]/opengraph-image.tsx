import { TOOLS_REGISTRY, getToolById } from "@/lib/tools-registry";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "FileOmniTool tool preview";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return TOOLS_REGISTRY.map((tool) => ({ slug: tool.id }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolById(slug);
  return renderOgImage({
    title: tool?.title.it ?? "FileOmniTool",
    subtitle: tool?.description.it,
    badge: "100% nel browser · nessun upload",
  });
}
