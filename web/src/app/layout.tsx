import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-7211822056148504";
  const gscId = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "google5a4b4e98d9296d35";
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-CPS3FGZLMD";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {gscId && <meta name="google-site-verification" content={gscId} />}
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}
        {/* Adsterra Social Bar */}
        <Script
          id="adsterra-social-bar"
          strategy="afterInteractive"
          src="https://bauval.org/14/46a6710c86363dcadad3933eb0c19482"
          data-cfasync="false"
        />
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
