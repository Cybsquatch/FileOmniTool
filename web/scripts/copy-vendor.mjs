// Copies runtime files that must be served as plain static assets (workers, fonts,
// WASM decoders) from node_modules into public/vendor. Runs before dev and build,
// so they come from our own domain and never from a third-party CDN.
import fs from "node:fs";
import path from "node:path";

const root = path.dirname(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")));
const out = path.join(root, "public", "vendor");

const copies = [
  ["node_modules/pdfjs-dist/build/pdf.worker.min.mjs", "pdfjs/pdf.worker.min.mjs"],
  ["node_modules/pdfjs-dist/standard_fonts", "pdfjs/standard_fonts"],
  ["node_modules/pdfjs-dist/wasm", "pdfjs/wasm"],
];

for (const [from, to] of copies) {
  const src = path.join(root, from);
  const dest = path.join(out, to);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}
console.log("vendor files copied to public/vendor");
