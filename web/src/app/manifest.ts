import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FileOmniTool - Free & Private In-Browser File Tools",
    short_name: "FileOmniTool",
    description: "Merge PDFs, convert images, compress files, and extract ZIPs directly in your browser with zero cloud uploads.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#059669",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
