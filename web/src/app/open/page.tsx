import type { Metadata } from "next";
import { TOOLS_REGISTRY } from "@/lib/tools-registry";
import { OpenWithClient, type ChooserTool } from "@/components/pwa/OpenWithClient";

export const metadata: Metadata = {
  title: "FileOmniTool",
  robots: { index: false, follow: false },
};

// Tools whose component takes files through <Dropzone>, so a shared/opened
// file can be handed over with ?shared=1.
const FILE_INPUT_TOOL_IDS = new Set([
  "pdf-merge", "pdf-split", "pdf-rotate", "image-convert", "image-compress", "svg-to-png",
  "audio-convert", "audio-trim", "video-to-audio", "zip-create", "zip-extract", "excel-convert",
  "docx-convert", "exif-remover", "image-resize", "image-watermark", "color-picker", "audio-booster",
  "image-to-pdf", "favicon-generator", "pdf-page-number", "pdf-to-text", "pdf-grayscale",
  "pdf-metadata", "pdf-organize", "image-crop", "image-blur", "image-invert", "image-flip",
  "image-grayscale", "image-to-base64", "audio-speed", "audio-reverse", "audio-stereo-to-mono",
  "file-checksum", "hex-viewer", "srt-to-vtt", "srt-to-txt", "gif-frame-extractor", "image-to-ascii",
  "png-to-ico", "svg-cleaner", "pdf-encrypt", "pdf-flatten", "html-to-markdown", "css-minifier",
  "file-to-base64", "file-magic-detector",
]);

export default function OpenPage() {
  const tools: ChooserTool[] = TOOLS_REGISTRY.filter((tool) => FILE_INPUT_TOOL_IDS.has(tool.id) && tool.acceptedMime).map((tool) => ({
    id: tool.id,
    category: tool.category,
    acceptedMime: tool.acceptedMime as string,
    popular: !!tool.popular,
    title: {
      it: tool.title.it,
      en: tool.title.en,
      es: tool.title.es,
      fr: tool.title.fr,
      de: tool.title.de,
      pt: tool.title.pt,
    },
  }));

  return <OpenWithClient tools={tools} />;
}
