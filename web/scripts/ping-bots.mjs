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

  // 1. Google & Bing sitemap pings
  await pingUrl("Google Sitemap Ping", `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
  await pingUrl("Bing Sitemap Ping", `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
  await pingUrl("Google Feed Ping", `https://www.google.com/ping?sitemap=${encodeURIComponent(FEED_URL)}`);

  console.log("\n[IndexNow] Dispatching IndexNow push to Bing & Yandex...");
  try {
    execSync(`node "${path.join(__dirname, "push-indexnow.mjs")}"`, { stdio: "inherit" });
  } catch (err) {
    console.error("[IndexNow] Failed running push-indexnow.mjs:", err.message);
  }

  console.log("\n✅ All search engine ping routines completed!");
}

main();
