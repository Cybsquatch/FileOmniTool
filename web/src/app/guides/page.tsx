import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { GUIDES_REGISTRY } from "@/lib/guides-registry";
import { GuidesIndexClient } from "@/components/guides/GuidesIndexClient";

export const metadata: Metadata = {
  title: "Step-by-Step File Guides & Privacy Tutorials | FileOmniTool",
  description: "Comprehensive step-by-step guides on merging PDFs, compressing images, extracting MP3 audio, and protecting digital privacy with 100% in-browser utilities.",
  alternates: {
    canonical: "https://www.fileomnitool.com/guides",
  },
  openGraph: {
    title: "Step-by-Step File Guides & Privacy Tutorials | FileOmniTool",
    description: "Learn how to merge PDFs, compress photos, and clean metadata locally with zero server uploads.",
    url: "https://www.fileomnitool.com/guides",
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50/50 font-sans text-zinc-900 selection:bg-emerald-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <Header />

      <main className="flex-1 pb-16">
        {/* Top Ad Slot */}
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <AdBanner slot="leaderboard" />
        </div>

        <GuidesIndexClient guides={GUIDES_REGISTRY} />
      </main>

      <Footer />
    </div>
  );
}
