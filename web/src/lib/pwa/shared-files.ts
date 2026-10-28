// Local hand-off store for files shared to the installed PWA (Android share sheet)
// or opened with it (desktop "Open with"). Files only ever live in this
// device's IndexedDB: public/sw.js writes the same DB/store/key when it
// intercepts the share POST, and the tool Dropzone takes them from here.

const DB_NAME = "fileomnitool-pwa";
const STORE = "shared";
const KEY = "pending";
// Shared files that are never picked up are discarded after this long.
const MAX_AGE_MS = 60 * 60 * 1000;

interface PendingEntry {
  files: File[];
  createdAt: number;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function withStore<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest | void): Promise<T | undefined> {
  const db = await openDb();
  try {
    return await new Promise<T | undefined>((resolve, reject) => {
      const tx = db.transaction(STORE, mode);
      const req = fn(tx.objectStore(STORE));
      tx.oncomplete = () => resolve(req ? (req.result as T) : undefined);
      tx.onerror = () => reject(tx.error);
    });
  } finally {
    db.close();
  }
}

export async function savePendingFiles(files: File[]): Promise<void> {
  const entry: PendingEntry = { files, createdAt: Date.now() };
  await withStore("readwrite", (store) => store.put(entry, KEY));
}

export async function peekPendingFiles(): Promise<File[]> {
  if (typeof indexedDB === "undefined") return [];
  try {
    const entry = await withStore<PendingEntry>("readonly", (store) => store.get(KEY));
    if (!entry || Date.now() - entry.createdAt > MAX_AGE_MS) return [];
    return entry.files || [];
  } catch {
    return [];
  }
}

export async function clearPendingFiles(): Promise<void> {
  try {
    await withStore("readwrite", (store) => store.delete(KEY));
  } catch {
    // Nothing to clear
  }
}

let takePromise: Promise<File[]> | null = null;

// Reads and deletes the pending files exactly once per page load, so a
// double-mounted effect (React StrictMode) still receives the same files.
export function takePendingFilesOnce(): Promise<File[]> {
  if (!takePromise) {
    takePromise = peekPendingFiles().then(async (files) => {
      await clearPendingFiles();
      return files;
    });
  }
  return takePromise;
}

// Matches a file against an <input accept> style list (".pdf,image/*,application/zip").
export function fileMatchesAccept(file: File, accept?: string): boolean {
  if (!accept || accept === "none") return !accept;
  const name = file.name.toLowerCase();
  const type = (file.type || "").toLowerCase();
  return accept
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)
    .some((token) => {
      if (token === "*/*" || token === "*") return true;
      if (token.startsWith(".")) return name.endsWith(token);
      if (token.endsWith("/*")) return type.startsWith(token.slice(0, -1));
      return type === token;
    });
}
