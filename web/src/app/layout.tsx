import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.fileomnitool.com"),
  alternates: {
    canonical: "/",
  },
  title: "FileOmniTool - Free, Private & 100% In-Browser File Tools",
  description: "Merge PDFs, convert images (WebP/PNG/JPG), compress files, create & extract ZIPs directly in your browser. Zero cloud uploads, 100% private, free forever.",
  keywords: [
    "merge pdf", "split pdf", "convert image", "compress photos", "create zip", 
    "extract zip", "sha256 hash", "privacy", "client-side", "free file tools", "no upload"
  ],
  authors: [{ name: "FileOmniTool Team" }],
  openGraph: {
    title: "FileOmniTool - Free & 100% Client-Side File Tools",
    description: "Merge PDFs, convert images, and unpack archives without uploading files to any server. 100% in-browser.",
    type: "website",
    siteName: "FileOmniTool",
    url: "https://www.fileomnitool.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const gscId = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "google5a4b4e98d9296d35";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {gscId && <meta name="google-site-verification" content={gscId} />}
        {adsenseId && (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
