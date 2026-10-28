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
    // Android share sheet: the POST is intercepted by public/sw.js and the
    // files stay in IndexedDB on the device; it never reaches the server.
    share_target: {
      action: "/share-target",
      method: "POST",
      enctype: "multipart/form-data",
      params: {
        files: [
          {
            name: "files",
            accept: [
              "application/pdf", ".pdf",
              "image/*",
              "audio/*",
              "video/*",
              "application/zip", "application/x-zip-compressed", ".zip",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".docx",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".xlsx",
            ],
          },
        ],
      },
    },
    // Desktop "Open with FileOmniTool": /open reads the files from window.launchQueue.
    file_handlers: [
      {
        action: "/open",
        accept: {
          "application/pdf": [".pdf"],
          "image/png": [".png"],
          "image/jpeg": [".jpg", ".jpeg"],
          "image/webp": [".webp"],
          "image/gif": [".gif"],
          "image/avif": [".avif"],
          "image/bmp": [".bmp"],
          "image/svg+xml": [".svg"],
          "audio/mpeg": [".mp3"],
          "audio/wav": [".wav"],
          "audio/ogg": [".ogg", ".oga", ".opus"],
          "audio/flac": [".flac"],
          "audio/mp4": [".m4a"],
          "audio/aac": [".aac"],
          "application/zip": [".zip"],
        },
      },
    ],
    launch_handler: {
      client_mode: ["navigate-existing", "auto"],
    },
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
