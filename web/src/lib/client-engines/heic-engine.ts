/**
 * Conversione HEIC/HEIF → JPG/PNG 100% nel browser.
 * Il decoder WASM (libheif via heic-to, ~3 MB) viene caricato on-demand solo al primo utilizzo.
 * Le immagini generate via canvas non contengono metadati EXIF: su richiesta l'EXIF originale
 * viene estratto dal contenitore HEIF e reinserito nel JPEG (con orientamento azzerato,
 * dato che la rotazione viene già applicata in fase di decodifica).
 */

export type HeicOutputFormat = "image/jpeg" | "image/png";

export interface HeicConvertOptions {
  format: HeicOutputFormat;
  quality: number;
  keepExif: boolean;
}

type HeicModule = typeof import("heic-to/next");
let heicModulePromise: Promise<HeicModule> | null = null;

function loadHeicModule(): Promise<HeicModule> {
  if (!heicModulePromise) {
    heicModulePromise = import("heic-to/next").catch((err) => {
      heicModulePromise = null;
      throw err;
    });
  }
  return heicModulePromise;
}

const HEIF_BRANDS = ["heic", "heix", "heim", "heis", "hevc", "hevx", "mif1", "msf1", "avif"];

/** Riconosce un file HEIF leggendo il box ftyp (non si fida dell'estensione) */
export async function isHeifFile(file: File): Promise<boolean> {
  const head = new Uint8Array(await file.slice(0, 32).arrayBuffer());
  if (head.length < 12) return false;
  const type = String.fromCharCode(head[4], head[5], head[6], head[7]);
  if (type !== "ftyp") return false;
  const brand = String.fromCharCode(head[8], head[9], head[10], head[11]);
  return HEIF_BRANDS.includes(brand);
}

// ---------------------------------------------------------------------------
// Estrazione EXIF dal contenitore ISO-BMFF (HEIF)
// ---------------------------------------------------------------------------

interface Box {
  type: string;
  start: number; // inizio payload
  end: number;
}

function readBoxes(view: DataView, start: number, end: number): Box[] {
  const boxes: Box[] = [];
  let pos = start;
  while (pos + 8 <= end) {
    let size = view.getUint32(pos);
    const type = String.fromCharCode(
      view.getUint8(pos + 4), view.getUint8(pos + 5), view.getUint8(pos + 6), view.getUint8(pos + 7)
    );
    let header = 8;
    if (size === 1) {
      if (pos + 16 > end) break;
      size = Number(view.getBigUint64(pos + 8));
      header = 16;
    } else if (size === 0) {
      size = end - pos;
    }
    if (size < header || pos + size > end) break;
    boxes.push({ type, start: pos + header, end: pos + size });
    pos += size;
  }
  return boxes;
}

function readUint(view: DataView, pos: number, bytes: number): number {
  switch (bytes) {
    case 0: return 0;
    case 1: return view.getUint8(pos);
    case 2: return view.getUint16(pos);
    case 4: return view.getUint32(pos);
    case 8: return Number(view.getBigUint64(pos));
    default: throw new Error("Unsupported integer size");
  }
}

function extractHeifExif(buf: ArrayBuffer): Uint8Array | null {
  const view = new DataView(buf);
  const meta = readBoxes(view, 0, buf.byteLength).find((b) => b.type === "meta");
  if (!meta) return null;
  const children = readBoxes(view, meta.start + 4, meta.end); // meta è un FullBox

  // iinf → item_ID del blocco "Exif"
  const iinf = children.find((b) => b.type === "iinf");
  if (!iinf) return null;
  const iinfVersion = view.getUint8(iinf.start);
  const entriesStart = iinf.start + 4 + (iinfVersion === 0 ? 2 : 4);
  let exifId: number | null = null;
  for (const infe of readBoxes(view, entriesStart, iinf.end)) {
    if (infe.type !== "infe") continue;
    const v = view.getUint8(infe.start);
    if (v < 2) continue;
    let p = infe.start + 4;
    const id = v === 2 ? view.getUint16(p) : view.getUint32(p);
    p += v === 2 ? 2 : 4;
    p += 2; // item_protection_index
    const itemType = String.fromCharCode(view.getUint8(p), view.getUint8(p + 1), view.getUint8(p + 2), view.getUint8(p + 3));
    if (itemType === "Exif") {
      exifId = id;
      break;
    }
  }
  if (exifId === null) return null;

  // iloc → posizione dei byte EXIF nel file
  const iloc = children.find((b) => b.type === "iloc");
  if (!iloc) return null;
  const v = view.getUint8(iloc.start);
  let p = iloc.start + 4;
  const sizes1 = view.getUint8(p);
  const sizes2 = view.getUint8(p + 1);
  p += 2;
  const offsetSize = sizes1 >> 4;
  const lengthSize = sizes1 & 0x0f;
  const baseOffsetSize = sizes2 >> 4;
  const indexSize = v === 1 || v === 2 ? sizes2 & 0x0f : 0;
  const itemCount = v < 2 ? view.getUint16(p) : view.getUint32(p);
  p += v < 2 ? 2 : 4;

  for (let i = 0; i < itemCount; i++) {
    const id = v < 2 ? view.getUint16(p) : view.getUint32(p);
    p += v < 2 ? 2 : 4;
    let constructionMethod = 0;
    if (v === 1 || v === 2) {
      constructionMethod = view.getUint16(p) & 0x0f;
      p += 2;
    }
    p += 2; // data_reference_index
    const baseOffset = readUint(view, p, baseOffsetSize);
    p += baseOffsetSize;
    const extentCount = view.getUint16(p);
    p += 2;
    const extents: Array<[number, number]> = [];
    for (let e = 0; e < extentCount; e++) {
      p += indexSize;
      const off = readUint(view, p, offsetSize);
      p += offsetSize;
      const len = readUint(view, p, lengthSize);
      p += lengthSize;
      extents.push([off, len]);
    }
    if (id !== exifId) continue;
    if (constructionMethod !== 0) return null;

    const total = extents.reduce((s, [, len]) => s + len, 0);
    const data = new Uint8Array(total);
    let w = 0;
    for (const [off, len] of extents) {
      const from = baseOffset + off;
      if (from + len > buf.byteLength) return null;
      data.set(new Uint8Array(buf, from, len), w);
      w += len;
    }
    if (data.length < 4) return null;
    const tiffOffset = new DataView(data.buffer).getUint32(0);
    const tiff = data.subarray(4 + tiffOffset);
    // Validazione header TIFF ("II*\0" o "MM\0*")
    if (tiff.length < 8) return null;
    const bo = String.fromCharCode(tiff[0], tiff[1]);
    if (bo !== "II" && bo !== "MM") return null;
    return tiff;
  }
  return null;
}

/** Imposta il tag Orientation (0x0112) a 1 nell'IFD0: i pixel sono già ruotati dal decoder */
function resetExifOrientation(tiff: Uint8Array): Uint8Array {
  const copy = tiff.slice();
  const view = new DataView(copy.buffer);
  const le = copy[0] === 0x49;
  const ifd0 = view.getUint32(4, le);
  if (ifd0 + 2 > copy.length) return copy;
  const count = view.getUint16(ifd0, le);
  for (let i = 0; i < count; i++) {
    const entry = ifd0 + 2 + i * 12;
    if (entry + 12 > copy.length) break;
    if (view.getUint16(entry, le) === 0x0112) {
      view.setUint16(entry + 8, 1, le);
      break;
    }
  }
  return copy;
}

/** Inserisce un segmento APP1 Exif in un JPEG subito dopo SOI/APP0 */
function injectExifIntoJpeg(jpeg: Uint8Array, tiff: Uint8Array): Uint8Array {
  const segLen = 2 + 6 + tiff.length;
  if (segLen > 0xffff || jpeg[0] !== 0xff || jpeg[1] !== 0xd8) return jpeg;
  let insertAt = 2;
  if (jpeg[2] === 0xff && jpeg[3] === 0xe0) {
    insertAt = 4 + ((jpeg[4] << 8) | jpeg[5]);
  }
  const app1 = new Uint8Array(2 + segLen);
  app1[0] = 0xff;
  app1[1] = 0xe1;
  app1[2] = segLen >> 8;
  app1[3] = segLen & 0xff;
  app1.set([0x45, 0x78, 0x69, 0x66, 0x00, 0x00], 4); // "Exif\0\0"
  app1.set(tiff, 10);
  const out = new Uint8Array(jpeg.length + app1.length);
  out.set(jpeg.subarray(0, insertAt), 0);
  out.set(app1, insertAt);
  out.set(jpeg.subarray(insertAt), insertAt + app1.length);
  return out;
}

// ---------------------------------------------------------------------------

export interface HeicConvertResult {
  blob: Blob;
  exifKept: boolean;
}

export async function convertHeicFile(file: File, opts: HeicConvertOptions): Promise<HeicConvertResult> {
  const { heicTo } = await loadHeicModule();
  const quality = opts.format === "image/jpeg" ? opts.quality : undefined;
  const out = await heicTo({ blob: file, type: opts.format, quality });

  if (!opts.keepExif || opts.format !== "image/jpeg") {
    return { blob: out, exifKept: false };
  }

  let tiff: Uint8Array | null = null;
  try {
    tiff = extractHeifExif(await file.arrayBuffer());
  } catch {
    tiff = null;
  }
  if (!tiff) return { blob: out, exifKept: false };

  const jpeg = new Uint8Array(await out.arrayBuffer());
  const withExif = injectExifIntoJpeg(jpeg, resetExifOrientation(tiff));
  return {
    blob: new Blob([withExif as BlobPart], { type: "image/jpeg" }),
    exifKept: withExif.length !== jpeg.length,
  };
}

/** Pre-carica il decoder (es. al primo file selezionato) per ridurre l'attesa percepita */
export function preloadHeicDecoder(): void {
  void loadHeicModule().catch(() => undefined);
}
