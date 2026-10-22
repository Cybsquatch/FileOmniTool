// Automated Weekly Editorial Freshness & Rotation Script for FileOmniTool
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesToInspect = [
  path.resolve(__dirname, "../src/lib/articles-registry.ts"),
  path.resolve(__dirname, "../src/lib/articles-wave2.ts"),
  path.resolve(__dirname, "../src/lib/articles-wave3.ts"),
];

function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function rotateArticles() {
  const today = getTodayString();
  console.log(`[Freshness] Running weekly editorial freshness rotation for date: ${today}`);

  const allEntries = [];

  for (const filePath of filesToInspect) {
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, "utf-8");
    const regex = /slug:\s*"([^"]+)".*?dateModified:\s*"(\d{4}-\d{2}-\d{2})"/gs;
    let match;

    while ((match = regex.exec(content)) !== null) {
      allEntries.push({
        filePath,
        slug: match[1],
        date: match[2],
      });
    }
  }

  // Sort by date ascending (oldest modified first)
  allEntries.sort((a, b) => a.date.localeCompare(b.date));

  let totalUpdated = 0;
  const targetUpdates = 3;

  for (const entry of allEntries) {
    if (entry.date !== today && totalUpdated < targetUpdates) {
      let content = fs.readFileSync(entry.filePath, "utf-8");
      
      // Target the specific article's dateModified block
      const targetPattern = new RegExp(`(slug:\\s*"${entry.slug}"[\\s\\S]*?dateModified:\\s*")\\d{4}-\\d{2}-\\d{2}(")`);
      if (targetPattern.test(content)) {
        content = content.replace(targetPattern, `$1${today}$2`);
        fs.writeFileSync(entry.filePath, content, "utf-8");
        console.log(`[Freshness] Successfully bumped [${entry.slug}] from ${entry.date} to ${today} in ${path.basename(entry.filePath)}`);
        totalUpdated++;
      }
    }
  }

  console.log(`[Freshness] Completed: ${totalUpdated} articles bumped to ${today}`);
}

rotateArticles();
