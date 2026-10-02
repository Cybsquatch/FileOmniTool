"use client";

import React, { useState } from "react";
import { Sparkles, EyeOff } from "lucide-react";

export type AdSlotType = "leaderboard" | "action-card" | "sticky-footer";

interface AdBannerProps {
  slot: AdSlotType;
  className?: string;
  adClient?: string;
  adSlotId?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot,
  className = "",
  adClient,
  adSlotId,
}) => {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  // Stile e dimensioni fisse per prevenire CLS (Cumulative Layout Shift)
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

  // Se abbiamo chiavi AdSense reali e siamo in produzione, possiamo montare il tag ins di AdSense
  const isRealAd = !!adClient && !!adSlotId;

  return (
    <div
      className={`relative my-4 flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-zinc-300 bg-zinc-50/80 p-2 text-center transition-all dark:border-zinc-800 dark:bg-zinc-900/50 ${getDimensions()} ${className}`}
      aria-label="Spazio Pubblicitario Sponsorizzato"
    >
      {isRealAd ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adClient}
          data-ad-slot={adSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-1.5 p-3 text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Spazio Pubblicitario • {slot.replace("-", " ").toUpperCase()}</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Google AdSense / Ezoic Ready • Slot protetto a ingombro fisso (Zero CLS)
          </p>
          <span className="rounded bg-zinc-200/80 px-2 py-0.5 text-[10px] font-mono text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {slot === "leaderboard" && "728 × 90 Responsive Banner"}
            {slot === "action-card" && "300 × 250 Post-Action Card"}
            {slot === "sticky-footer" && "Sticky Footer 728 × 90 / 320 × 50"}
          </span>
        </div>
      )}

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
};
