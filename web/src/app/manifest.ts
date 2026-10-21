import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "FileOmniTool - Free & Private In-Browser File Tools",
    short_name: "FileOmniTool",
    description: "Merge PDFs, convert images, compress files, and extract ZIPs directly in your browser with zero cloud uploads.",
    start_url: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#ffffff",
    theme_color: "#059669",
    categories: ["productivity", "utilities"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "FileOmniTool Desktop Dashboard",
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "412x915",
        type: "image/png",
        form_factor: "narrow",
        label: "FileOmniTool Mobile Interface",
      },
    ],
    shortcuts: [
      {
        name: "Merge PDF",
        short_name: "Merge PDF",
        description: "Combine multiple PDF documents client-side",
        url: "/tools/pdf-merge",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Convert Image",
        short_name: "Convert Image",
        description: "Convert WebP, PNG, JPG, and AVIF in browser",
        url: "/tools/image-convert",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Compress Image",
        short_name: "Compress Image",
        description: "Compress images with zero server uploads",
        url: "/tools/image-compress",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
