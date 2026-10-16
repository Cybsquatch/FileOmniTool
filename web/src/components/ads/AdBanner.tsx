"use client";

import React, { useState, useEffect, useRef } from "react";
import { EyeOff } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export type AdSlotType = "leaderboard" | "action-card" | "sticky-footer" | "native";

interface AdBannerProps {
  slot: AdSlotType;
  className?: string;
  adClient?: string;
  adSlotId?: string;
}

const SandboxedAdSlot: React.FC<{
  adKey: string;
  width: number;
  height: number;
  className?: string;
}> = ({ adKey, width, height, className = "" }) => {
  const iframeHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: transparent; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${adKey}',
      'format' : 'iframe',
      'height' : ${height},
      'width' : ${width},
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://bauval.org/22/${adKey}"></script>
</body>
</html>`;

  return (
    <iframe
      srcDoc={iframeHtml}
      width={width}
      height={height}
      sandbox="allow-scripts allow-same-origin allow-popups"
      scrolling="no"
      className={`border-0 overflow-hidden ${className}`}
      title="Advertisement"
    />
  );
};

const SandboxedNativeSlot: React.FC<{
  nativeKey: string;
  className?: string;
}> = ({ nativeKey, className = "" }) => {
  const { language } = useLanguage();

  const titles: Record<string, string> = {
    it: "Contenuti e Strumenti Consigliati",
    en: "Recommended Resources & Tools",
    es: "Herramientas y Recursos Recomendados",
    fr: "Ressources et Outils Recommandés",
    de: "Empfohlene Ressourcen und Tools",
    pt: "Recursos e Ferramentas Recomendadas",
  };

  const labels: Record<string, string> = {
    it: "sponsor",
    en: "sponsored",
    es: "patrocinado",
    fr: "sponsorisé",
    de: "gesponsert",
    pt: "patrocinado",
  };

  const iframeHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { background: transparent; overflow: hidden; padding: 4px; }
  </style>
</head>
<body>
  <div id="container-${nativeKey}"></div>
  <script async="async" data-cfasync="false" src="https://bauval.org/21/${nativeKey}"></script>
</body>
</html>`;

  return (
    <div
      className={`adsterra-native-banner my-6 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 ${className}`}
      aria-label="Sponsored Recommendations"
    >
      <div className="mb-2 flex items-center justify-between border-b border-zinc-100 pb-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        <span>{titles[language] || titles.en}</span>
        <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold lowercase text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {labels[language] || labels.en}
        </span>
      </div>
      <iframe
        srcDoc={iframeHtml}
        width="100%"
        height="150"
        sandbox="allow-scripts allow-same-origin allow-popups"
        scrolling="no"
        className="w-full border-0 overflow-hidden"
        title="Sponsored Recommendations"
      />
    </div>
  );
};

export const AdBanner: React.FC<AdBannerProps> = ({
  slot,
  className = "",
  adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-7211822056148504",
  adSlotId,
}) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (adSlotId && typeof window !== "undefined") {
      try {
        // @ts-expect-error Google adsbygoogle array
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense unit initialization error", e);
      }
    }
  }, [adSlotId]);

  if (closed) return null;

  // Se è specificato uno slot ID manuale di Google AdSense, usiamo AdSense
  if (adSlotId) {
    const getDimensions = () => {
      switch (slot) {
        case "leaderboard":
          return "min-h-[90px] max-w-[728px] w-full mx-auto";
        case "action-card":
          return "min-h-[250px] max-w-[336px] w-full mx-auto";
        case "sticky-footer":
          return "h-[60px] md:h-[90px] w-full max-w-[728px] mx-auto";
        case "native":
          return "min-h-[160px] max-w-4xl w-full mx-auto";
      }
    };

    return (
      <div
        className={`relative my-4 flex items-center justify-center overflow-hidden rounded-xl bg-transparent text-center transition-all ${getDimensions()} ${className}`}
        aria-label="Advertisement"
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adClient}
          data-ad-slot={adSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        {slot === "sticky-footer" && (
          <button
            onClick={() => setClosed(true)}
            className="absolute right-2 top-2 rounded-full p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            title="Chiudi banner"
          >
            <EyeOff className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }

  // Per "leaderboard" e "sticky-footer": integrazione diretta Adsterra 728x90 (con responsive scaling per smartphone)
  if (slot === "leaderboard" || slot === "sticky-footer") {
    return (
      <div
        className={`relative my-4 flex flex-col items-center justify-center overflow-hidden rounded-xl transition-all ${className}`}
        aria-label="Sponsor Advertisement"
      >
        <div className="flex h-[52px] sm:h-[72px] md:h-[90px] w-full max-w-[728px] items-center justify-center overflow-hidden">
          <div className="flex h-[90px] w-[728px] shrink-0 origin-center scale-[0.48] sm:scale-[0.75] md:scale-100 items-center justify-center transition-transform">
            <SandboxedAdSlot
              adKey="69e9eb2774c9d994601bc2ed1fd01ecc"
              width={728}
              height={90}
            />
          </div>
        </div>

        {slot === "sticky-footer" && (
          <button
            onClick={() => setClosed(true)}
            className="absolute right-2 top-1 rounded-full p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            title="Chiudi banner"
          >
            <EyeOff className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }

  // Per "action-card": integrazione diretta Adsterra 300x250 (Medium Rectangle)
  if (slot === "action-card") {
    return (
      <div
        className={`relative my-4 flex items-center justify-center overflow-hidden rounded-xl transition-all ${className}`}
        aria-label="Sponsor Advertisement"
      >
        <div className="flex h-[250px] w-[300px] items-center justify-center overflow-hidden rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50">
          <SandboxedAdSlot
            adKey="a3caadfd2e99bd611a9461f3be906117"
            width={300}
            height={250}
          />
        </div>
      </div>
    );
  }

  // Per "native": integrazione diretta Adsterra 3x1 Native Banner
  if (slot === "native") {
    return (
      <SandboxedNativeSlot
        nativeKey="e737c482eb73c706a425df6c74d51af5"
        className={className}
      />
    );
  }

  return null;
};
