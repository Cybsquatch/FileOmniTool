import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env.local");

// Simple .env parser without external dependencies
function loadEnv() {
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) process.env[key] = val;
      }
    }
  }
}

loadEnv();

const token = process.env.VERCEL_TOKEN;
const projectId = process.env.VERCEL_PROJECT_ID;
const teamId = process.env.VERCEL_TEAM_ID;

if (!token || !projectId) {
  console.error("Missing VERCEL_TOKEN or VERCEL_PROJECT_ID in web/.env.local");
  process.exit(1);
}

// Range: default 7 days, or command line arg: 1d, 7d, 30d
const argRange = process.argv[2] || "7d";
const days = argRange === "1d" ? 1 : argRange === "30d" ? 30 : 7;

const untilDate = new Date();
const sinceDate = new Date();
sinceDate.setDate(sinceDate.getDate() - days);

const since = sinceDate.toISOString().split("T")[0];
const until = untilDate.toISOString().split("T")[0];

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
};

async function fetchStats() {
  console.log(`\n============================================================`);
  console.log(`  FILEOMNITOOL - VERCEL WEB ANALYTICS REPORT`);
  console.log(`  Period: Last ${days} day(s) (${since} to ${until})`);
  console.log(`============================================================\n`);

  // 1. Total counts
  try {
    const countUrl = `https://api.vercel.com/v1/query/web-analytics/visits/count?projectId=${projectId}&teamId=${teamId}&since=${since}&until=${until}`;
    const resCount = await fetch(countUrl, { headers });
    const countData = await resCount.json();

    const visitors = countData?.data?.visitors ?? 0;
    const pageviews = countData?.data?.pageviews ?? 0;

    console.log(`[TOTAL TRAFFIC]`);
    console.log(`  - Unique Visitors : ${visitors}`);
    console.log(`  - Total Pageviews : ${pageviews}`);
    console.log(`  - Pages / Visitor : ${visitors > 0 ? (pageviews / visitors).toFixed(2) : "0"}\n`);
  } catch (e) {
    console.error("Error fetching count:", e.message);
  }

  // Helper for aggregates
  async function queryAggregate(by, label, keyName) {
    try {
      const url = `https://api.vercel.com/v1/query/web-analytics/visits/aggregate?projectId=${projectId}&teamId=${teamId}&by=${by}&since=${since}&until=${until}`;
      const res = await fetch(url, { headers });
      const json = await res.json();
      const list = json?.data || [];

      console.log(`[${label}]`);
      if (list.length === 0) {
        console.log(`  (No ${label.toLowerCase()} recorded in this window)`);
      } else {
        list.slice(0, 10).forEach((item, idx) => {
          const name = item[keyName] || item.key || item[by] || "unknown";
          const views = item.pageviews ?? item.visitors ?? 0;
          console.log(`  ${idx + 1}. ${name} -> ${views} views`);
        });
      }
      console.log("");
    } catch (e) {
      console.error(`Error fetching ${by}:`, e.message);
    }
  }

  await queryAggregate("requestPath", "TOP PAGES & TOOLS", "requestPath");
  await queryAggregate("referrerHostname", "TOP REFERRERS / TRAFFIC SOURCES", "referrerHostname");
  await queryAggregate("country", "TOP COUNTRIES", "country");
  await queryAggregate("deviceType", "DEVICES", "deviceType");
}

fetchStats();
