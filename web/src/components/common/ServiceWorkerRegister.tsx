"use client";

import { useEffect } from "react";
import {
  BeforeInstallPromptEvent,
  LAST_LOCALE_KEY,
  currentLocale,
  isLocalePrecached,
  isStandalone,
  precacheLocale,
  setDeferredInstallPrompt,
} from "@/lib/pwa/install";

export function ServiceWorkerRegister() {
  useEffect(() => {
    // Lets /open (share target / "Open with") answer in the language last browsed.
    if (!window.location.pathname.startsWith("/open")) {
      try {
        localStorage.setItem(LAST_LOCALE_KEY, currentLocale());
      } catch {
        // Storage unavailable
      }
    }

    // Keep the install prompt for InstallAppPrompt instead of Chrome's mini-infobar.
    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setDeferredInstallPrompt(event as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setDeferredInstallPrompt(null);
      precacheLocale().catch(() => {});
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);

    const register = () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("FileOmniTool PWA ServiceWorker active with scope:", registration.scope);
          // The installed app keeps every tool of its language available offline.
          if (isStandalone() && !isLocalePrecached()) {
            precacheLocale().catch(() => {});
          }
        })
        .catch((error) => {
          console.warn("FileOmniTool ServiceWorker registration ignored:", error);
        });
    };

    if ("serviceWorker" in navigator) {
      if (document.readyState === "complete") register();
      else window.addEventListener("load", register, { once: true });
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      window.removeEventListener("load", register);
    };
  }, []);

  return null;
}
