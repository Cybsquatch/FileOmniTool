// Script to notify IndexNow (Bing, DuckDuckGo, Yandex, etc.) of all FileOmniTool URLs
const KEY = "50abff68058d4d59bec68c1fdfabbfcf";
const HOST = "www.fileomnitool.com";
const BASE_URL = `https://${HOST}`;
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

async function fetchUrlsFromSitemap() {
  try {
    const res = await fetch(`${BASE_URL}/sitemap.xml`);
    if (!res.ok) {
      throw new Error(`Sitemap fetch returned ${res.status}`);
    }
    const xml = await res.text();
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    const urls = matches.map((m) => m[1]);
    if (urls.length > 0) return urls;
  } catch (err) {
    console.warn("Could not fetch remote sitemap.xml, using fallback list:", err.message);
  }

  // Fallback core URLs
  return [
    `${BASE_URL}`,
    `${BASE_URL}/guides`,
    `${BASE_URL}/privacy`,
  ];
}

async function submitIndexNow(urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    console.log(`Submitting ${urls.length} URLs to IndexNow endpoint: ${endpoint}...`);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      console.log(`Response from ${endpoint}: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`✅ IndexNow successfully accepted payload at ${endpoint}`);
      } else {
        const text = await response.text();
        console.warn(`⚠️ Warning: ${endpoint} responded with:`, text);
      }
    } catch (err) {
      console.error(`❌ Error submitting to ${endpoint}:`, err);
    }
  }
}

async function main() {
  console.log("🚀 Starting IndexNow submission for FileOmniTool...");
  const urls = await fetchUrlsFromSitemap();
  console.log(`Found ${urls.length} URLs to submit.`);
  await submitIndexNow(urls);
  console.log("🎉 IndexNow push complete!");
}

main();
