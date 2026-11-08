// Honest Editorial Freshness Tracker for FileOmniTool
//
// - dateModified is bumped ONLY when an article's content actually changed
//   (detected via a SHA-256 hash of the article block, stored in content-hashes.json).
// - Articles not updated for more than STALE_DAYS are reported so they can be
//   genuinely refreshed (GitHub Actions job summary + output for the stale issue).
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HASHES_PATH = path.resolve(__dirname, "content-hashes.json");
const STALE_DAYS = Number(process.env.STALE_DAYS || 120);
const filesToInspect = [
  path.resolve(__dirname, "../src/lib/articles-registry.ts"),
  path.resolve(__dirname, "../src/lib/articles-wave2.ts"),
  path.resolve(__dirname, "../src/lib/articles-wave3.ts"),
  path.resolve(__dirname, "../src/lib/articles-wave4.ts"),
];

function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function hashBlock(block) {
  // Ignore the dateModified line itself, otherwise our own bump would change the hash
  // Strip every CR first: on CRLF checkouts block boundaries leave a lone "\r" behind
  const normalized = block.replace(/\r/g, "").replace(/^[ \t]*dateModified:.*$/m, "");
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

// Splits a registry file into one block per article, starting at each top-level `slug:` key
function splitArticles(content) {
  const starts = [...content.matchAll(/\n {4}slug:\s*"([^"]+)"/g)];
  return starts.map((m, i) => ({
    slug: m[1],
    start: m.index,
    end: i + 1 < starts.length ? starts[i + 1].index : content.length,
  }));
}

function writeOutput(key, value) {
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}<<EOF\n${value}\nEOF\n`);
}

function run() {
  const today = getTodayString();
  const hashes = fs.existsSync(HASHES_PATH) ? JSON.parse(fs.readFileSync(HASHES_PATH, "utf-8")) : {};
  const bootstrap = Object.keys(hashes).length === 0;
  const updated = [];
  const report = [];

  for (const filePath of filesToInspect) {
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, "utf-8");

    // Process from the end so earlier offsets stay valid after replacements
    for (const art of splitArticles(content).reverse()) {
      let block = content.slice(art.start, art.end);
      const hash = hashBlock(block);
      const dateMatch = block.match(/dateModified:\s*"(\d{4}-\d{2}-\d{2})"/) || block.match(/datePublished:\s*"(\d{4}-\d{2}-\d{2})"/);
      let date = dateMatch ? dateMatch[1] : today;

      if (hashes[art.slug] && hashes[art.slug] !== hash) {
        if (/dateModified:\s*"/.test(block)) {
          block = block.replace(/(dateModified:\s*")\d{4}-\d{2}-\d{2}(")/, `$1${today}$2`);
        } else {
          block = block.replace(/(\n(\s*)datePublished:\s*"[^"]+",)/, `$1\n$2dateModified: "${today}",`);
        }
        content = content.slice(0, art.start) + block + content.slice(art.end);
        date = today;
        updated.push(art.slug);
        console.log(`[Freshness] Content changed -> [${art.slug}] dateModified set to ${today}`);
      }

      hashes[art.slug] = hash;
      const ageDays = Math.floor((Date.parse(today) - Date.parse(date)) / 86400000);
      report.push({ slug: art.slug, date, ageDays, file: path.basename(filePath) });
    }

    fs.writeFileSync(filePath, content, "utf-8");
  }

  fs.writeFileSync(HASHES_PATH, JSON.stringify(hashes, null, 2) + "\n", "utf-8");
  if (bootstrap) console.log(`[Freshness] Bootstrap: recorded hashes for ${report.length} articles (no dates changed).`);
  console.log(`[Freshness] ${updated.length} article(s) with real content changes.`);

  const stale = report.filter((r) => r.ageDays > STALE_DAYS).sort((a, b) => b.ageDays - a.ageDays);
  const staleMd = stale.length
    ? [
        `Articoli non aggiornati da più di ${STALE_DAYS} giorni. Aggiornali davvero (dati, esempi, nuove sezioni): la data si aggiornerà da sola al prossimo push.`,
        "",
        "| Articolo | Ultima modifica | Giorni | File |",
        "|---|---|---|---|",
        ...stale.map((r) => `| \`${r.slug}\` | ${r.date} | ${r.ageDays} | ${r.file} |`),
      ].join("\n")
    : "";

  if (stale.length) console.log(`\n[Freshness] Stale articles (>${STALE_DAYS} days):\n${staleMd}`);
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Editorial freshness\n\nUpdated: ${updated.join(", ") || "none"}\n\n${staleMd || "Nessun articolo obsoleto."}\n`);
  }
  writeOutput("updated", updated.join(","));
  writeOutput("stale_count", String(stale.length));
  writeOutput("stale_md", staleMd);
}

run();
