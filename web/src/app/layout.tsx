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
  title: "FileOmniTool - Strumenti per File Gratuiti, Privati e nel Browser | Free In-Browser File Tools",
  description: "Unisci PDF, converti immagini (WebP/PNG/JPG), comprimi file ed estrai archivi ZIP al 100% nel tuo browser senza upload su server. 100% privato e gratuito. Merge PDFs, convert images & extract ZIPs client-side.",
  keywords: [
    "unisci pdf", "converti immagini", "comprimi file", "estrai zip", "strumenti file gratis",
    "convertire webp in png", "riduci pdf", "privacy", "zero upload", "nel browser",
    "merge pdf", "split pdf", "convert image", "compress photos", "create zip", 
    "extract zip", "sha256 hash", "client-side", "free file tools", "no upload",
    "unir pdf", "convertir imagenes", "fusionner pdf", "pdf zusammenfügen", "juntar pdf"
  ],
  authors: [{ name: "FileOmniTool Team" }],
  openGraph: {
    title: "FileOmniTool - Strumenti per File Gratuiti e Privati nel Browser | Free Client-Side File Tools",
    description: "Unisci PDF, converti immagini ed estrai archivi senza caricare file su alcun server. 100% in-browser.",
    type: "website",
    siteName: "FileOmniTool",
    url: "https://www.fileomnitool.com",
    locale: "it_IT",
    alternateLocale: ["en_US", "es_ES", "fr_FR", "de_DE", "pt_BR"],
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
      lang="it"
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
