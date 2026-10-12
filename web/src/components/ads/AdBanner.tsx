"use client";

import React, { useState, useEffect } from "react";
import { EyeOff } from "lucide-react";

export type AdSlotType = "leaderboard" | "action-card" | "sticky-footer";

interface AdBannerProps {
  slot: AdSlotType;
  className?: string;
  adClient?: string;
  adSlotId?: string;
}

const ADSTERRA_728X90_SRCDOC = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
      }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : '69e9eb2774c9d994601bc2ed1fd01ecc',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://bauval.org/22/69e9eb2774c9d994601bc2ed1fd01ecc"></script>
  </body>
</html>`;

const ADSTERRA_300X250_SRCDOC = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
      }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : 'a3caadfd2e99bd611a9461f3be906117',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://bauval.org/22/a3caadfd2e99bd611a9461f3be906117"></script>
  </body>
</html>`;

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
            <iframe
              title="Sponsor Advertisement"
              srcDoc={ADSTERRA_728X90_SRCDOC}
              width={728}
              height={90}
              scrolling="no"
              className="border-0 overflow-hidden"
              style={{ border: 0, overflow: "hidden" }}
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
          <iframe
            title="Sponsor Advertisement 300x250"
            srcDoc={ADSTERRA_300X250_SRCDOC}
            width={300}
            height={250}
            scrolling="no"
            className="border-0 overflow-hidden"
            style={{ border: 0, overflow: "hidden" }}
          />
        </div>
      </div>
    );
  }

  return null;
};
