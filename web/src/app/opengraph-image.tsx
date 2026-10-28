import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "FileOmniTool - Free, private in-browser file tools";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Free file tools that never upload your files",
    subtitle: "PDF, images, audio, ZIP & developer tools running 100% in your browser.",
    badge: "77+ tools · 6 languages",
  });
}
