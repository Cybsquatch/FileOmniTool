"use client";

import { useEffect } from "react";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("FileOmniTool PWA ServiceWorker active with scope:", registration.scope);
          })
          .catch((error) => {
            console.warn("FileOmniTool ServiceWorker registration ignored:", error);
          });
      });
    }
  }, []);

  return null;
}
