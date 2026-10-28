// FileOmniTool PWA Service Worker
//
// - Share target: the POST from the Android share sheet is answered here and
//   never forwarded to the network. Shared files go into this device's
//   IndexedDB (same DB as src/lib/pwa/shared-files.ts) and the user lands on
//   /open to pick a tool.
// - Offline: pages are network-first with a cache fallback, hashed Next.js
//   assets (/_next/static, incl. JS/CSS/fonts/WASM) are cache-first, and the
//   page can ask us to precache every tool page of a locale with its assets.

const VERSION = "v2";
const PAGES_CACHE = `fileomnitool-pages-${VERSION}`;
const STATIC_CACHE = `fileomnitool-static-${VERSION}`;
const RUNTIME_CACHE = `fileomnitool-runtime-${VERSION}`;
const KNOWN_CACHES = [PAGES_CACHE, STATIC_CACHE, RUNTIME_CACHE];

const SHARE_TARGET_PATH = "/share-target";
const OPEN_PATH = "/open";
const MAX_STATIC_ENTRIES = 800;

const PRECACHE_URLS = [
  "/",
  OPEN_PATH,
  "/manifest.webmanifest",
  "/favicon.ico",
  "/icon-192.png",
  "/icon-512.png",
];

const DB_NAME = "fileomnitool-pwa";
const DB_STORE = "shared";
const DB_KEY = "pending";

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(DB_STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function savePendingFiles(files) {
  const db = await openDb();
  try {
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      tx.objectStore(DB_STORE).put({ files, createdAt: Date.now() }, DB_KEY);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  } finally {
    db.close();
  }
}

// A response that followed a redirect cannot answer a navigation request,
// so store a clean copy instead.
async function storable(response) {
  if (!response.redirected) return response;
  const body = await response.blob();
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

function isCacheable(response) {
  return response && response.ok && response.type === "basic";
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - maxEntries; i++) {
    await cache.delete(keys[i]);
  }
}

function pageKey(url) {
  // Query strings such as ?shared=1 or ?q= do not change the static HTML.
  const u = new URL(url);
  return u.origin + (u.pathname.length > 1 ? u.pathname.replace(/\/$/, "") : u.pathname);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PAGES_CACHE);
      await Promise.all(
        PRECACHE_URLS.map(async (url) => {
          try {
            const res = await fetch(url, { cache: "reload" });
            if (isCacheable(res)) await cache.put(pageKey(new URL(url, self.location.origin)), await storable(res));
          } catch {
            // Precache is best effort; runtime caching fills the gaps.
          }
        })
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.filter((n) => !KNOWN_CACHES.includes(n)).map((n) => caches.delete(n)));
      await self.clients.claim();
    })()
  );
});

async function handleShareTarget(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files").filter((f) => f && typeof f === "object" && f.size > 0);
    if (files.length > 0) await savePendingFiles(files);
  } catch {
    // Fall through to the chooser, which shows the "no file received" state.
  }
  return Response.redirect(`${OPEN_PATH}?source=share`, 303);
}

async function handleNavigation(event) {
  const { request } = event;
  const key = pageKey(request.url);
  try {
    const preload = await event.preloadResponse;
    const response = preload || (await fetch(request));
    if (isCacheable(response)) {
      const copy = await storable(response.clone());
      event.waitUntil(caches.open(PAGES_CACHE).then((cache) => cache.put(key, copy)));
    }
    return response;
  } catch {
    const cache = await caches.open(PAGES_CACHE);
    const cached = await cache.match(key);
    if (cached) return cached;
    // Offline and never visited: fall back to the locale home, then the root.
    const locale = new URL(request.url).pathname.match(/^\/(en|es|fr|de|pt)(\/|$)/);
    const fallback = (locale && (await cache.match(pageKey(new URL(`/${locale[1]}`, self.location.origin))))) || (await cache.match(pageKey(new URL("/", self.location.origin))));
    return fallback || Response.error();
  }
}

async function handleStatic(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (isCacheable(response)) {
    await cache.put(request, response.clone());
  }
  return response;
}

async function handleRuntime(event) {
  const { request } = event;
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then(async (response) => {
      if (isCacheable(response)) await cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  if (cached) {
    event.waitUntil(network);
    return cached;
  }
  return network;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname === SHARE_TARGET_PATH) {
    // POST from the share sheet: handled entirely on-device, never sent to the server.
    event.respondWith(request.method === "POST" ? handleShareTarget(request) : Response.redirect(OPEN_PATH, 303));
    return;
  }

  if (request.method !== "GET") return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/_vercel/")) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(event));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(handleStatic(request));
    return;
  }

  // RSC payloads for client-side navigation: leave them to the network. When
  // offline the fetch fails and Next falls back to a full navigation, which
  // is answered from the page cache above.
  if (request.headers.get("RSC") || url.searchParams.has("_rsc") || url.pathname.startsWith("/_next/")) return;

  event.respondWith(handleRuntime(event));
});

// Precache a set of pages plus every /_next/static asset their HTML references.
async function precachePages(paths) {
  const pages = await caches.open(PAGES_CACHE);
  const statics = await caches.open(STATIC_CACHE);
  const assets = new Set();
  let done = 0;

  const queue = [...new Set(paths)];
  const worker = async () => {
    while (queue.length) {
      const path = queue.shift();
      try {
        const res = await fetch(path, { credentials: "same-origin" });
        if (!isCacheable(res)) continue;
        const html = await res.clone().text();
        await pages.put(pageKey(new URL(path, self.location.origin)), await storable(res));
        for (const m of html.matchAll(/\/_next\/static\/[^"'\s)\\]+/g)) assets.add(m[0]);
        done++;
      } catch {
        // Skip pages that fail; they are cached on the next visit instead.
      }
    }
  };
  await Promise.all([worker(), worker(), worker(), worker()]);

  const assetQueue = [...assets];
  const assetWorker = async () => {
    while (assetQueue.length) {
      const asset = assetQueue.shift();
      try {
        if (await statics.match(asset)) continue;
        const res = await fetch(asset);
        if (isCacheable(res)) await statics.put(asset, res);
      } catch {
        // Ignore individual asset failures
      }
    }
  };
  await Promise.all([assetWorker(), assetWorker(), assetWorker(), assetWorker()]);
  await trimCache(STATIC_CACHE, MAX_STATIC_ENTRIES);
  return done;
}

async function toolPathsForLocale(locale) {
  const prefix = locale && locale !== "it" ? `/${locale}` : "";
  const res = await fetch("/sitemap.xml");
  const xml = await res.text();
  const paths = new Set([prefix || "/", OPEN_PATH]);
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    try {
      const { pathname } = new URL(m[1].trim());
      if (pathname.startsWith(`${prefix}/tools/`)) paths.add(pathname);
    } catch {
      // Ignore malformed entries
    }
  }
  return [...paths];
}

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type !== "PRECACHE_LOCALE") return;
  const reply = (msg) => event.source && event.source.postMessage(msg);
  event.waitUntil(
    (async () => {
      try {
        const paths = await toolPathsForLocale(data.locale);
        const count = await precachePages(paths);
        reply({ type: "PRECACHE_DONE", count, total: paths.length });
      } catch (error) {
        reply({ type: "PRECACHE_FAILED", error: String(error) });
      }
    })()
  );
});
