// Automated Bot Pinging & IndexNow Dispatcher for FileOmniTool
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITEMAP_URL = "https://www.fileomnitool.com/sitemap.xml";
const FEED_URL = "https://www.fileomnitool.com/feed.xml";

async function pingUrl(serviceName, url) {
  try {
    console.log(`[Ping] Pinging ${serviceName}: ${url}`);
    const res = await fetch(url, { headers: { "User-Agent": "FileOmniTool-Pinger/1.0" } });
    console.log(`[Ping] ${serviceName} responded with HTTP ${res.status}`);
  } catch (err) {
    console.warn(`[Ping] ${serviceName} ping failed:`, err.message);
  }
}

async function main() {
  console.log("=========================================");
  console.log("🚀 FileOmniTool Search Engine Bot Pinger");
  console.log("=========================================\n");

  // Google and Bing retired their sitemap ping endpoints (2023/2022): Google reads
  // the sitemap's lastmod on its own, Bing/Yandex are notified via IndexNow below.
  console.log(`[Ping] Sitemap: ${SITEMAP_URL} | Feed: ${FEED_URL} (discovered via robots.txt / Search Console)`);

  console.log("\n[IndexNow] Dispatching IndexNow push to Bing & Yandex...");
  try {
    execSync(`node "${path.join(__dirname, "push-indexnow.mjs")}"`, { stdio: "inherit" });
  } catch (err) {
    console.error("[IndexNow] Failed running push-indexnow.mjs:", err.message);
  }

  console.log("\n✅ All search engine ping routines completed!");
}

main();
