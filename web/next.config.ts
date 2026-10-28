import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(self), microphone=(self), display-capture=(self), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const LOCALE_LANG: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  pt: "pt-BR",
};

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // Italian is the default locale at the root; other locales live under /<locale>
      { source: "/:path*", headers: [{ key: "Content-Language", value: "it-IT" }] },
      ...Object.entries(LOCALE_LANG).flatMap(([locale, lang]) => [
        { source: `/${locale}`, headers: [{ key: "Content-Language", value: lang }] },
        { source: `/${locale}/:path*`, headers: [{ key: "Content-Language", value: lang }] },
      ]),
    ];
  },
};

export default nextConfig;
