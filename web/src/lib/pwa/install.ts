// Install / offline helpers shared by ServiceWorkerRegister and InstallAppPrompt.

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export const INSTALL_AVAILABLE_EVENT = "fileomnitool:install-available";
const PRECACHE_KEY = "fileomnitool_offline_precache";
const PRECACHE_REFRESH_MS = 7 * 24 * 60 * 60 * 1000;

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export function setDeferredInstallPrompt(event: BeforeInstallPromptEvent | null) {
  deferredPrompt = event;
  window.dispatchEvent(new Event(INSTALL_AVAILABLE_EVENT));
}

export function getDeferredInstallPrompt() {
  return deferredPrompt;
}

export function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
}

export const LAST_LOCALE_KEY = "fileomnitool_last_locale";

export function currentLocale(): string {
  const match = window.location.pathname.match(/^\/(en|es|fr|de|pt)(\/|$)/);
  return match ? match[1] : "it";
}

// Asks the service worker to cache every tool page of the locale with its JS/CSS.
// Resolves true once the worker reports success.
export async function precacheLocale(locale = currentLocale()): Promise<boolean> {
  if (!("serviceWorker" in navigator)) return false;
  const registration = await navigator.serviceWorker.ready;
  const worker = registration.active;
  if (!worker) return false;

  return new Promise<boolean>((resolve) => {
    const onMessage = (event: MessageEvent) => {
      const type = event.data?.type;
      if (type !== "PRECACHE_DONE" && type !== "PRECACHE_FAILED") return;
      navigator.serviceWorker.removeEventListener("message", onMessage);
      const ok = type === "PRECACHE_DONE";
      if (ok) {
        try {
          localStorage.setItem(`${PRECACHE_KEY}_${locale}`, String(Date.now()));
        } catch {
          // Storage unavailable
        }
      }
      resolve(ok);
    };
    navigator.serviceWorker.addEventListener("message", onMessage);
    worker.postMessage({ type: "PRECACHE_LOCALE", locale });
  });
}

export function isLocalePrecached(locale = currentLocale()): boolean {
  try {
    const at = Number(localStorage.getItem(`${PRECACHE_KEY}_${locale}`) || 0);
    return Date.now() - at < PRECACHE_REFRESH_MS;
  } catch {
    return false;
  }
}
