/**
 * IndexNow Instant Submitter for Jeevana Bandham
 * Submits all pages and new Telugu blog guides to Bing, Yandex, Seznam, and IndexNow endpoints.
 */

import { fileURLToPath } from 'url';

const key = "c7a8b9e0f1d24c5b8a9e0f1d2c3b4a5d";
const host = "www.jeevanabandham.online";
const keyLocation = `https://${host}/${key}.txt`;

const defaultUrlList = [
  `https://${host}/`,
  `https://${host}/blog`,
  `https://${host}/support`,
  `https://${host}/pre-marriage`,
  `https://${host}/child-protection`,
  `https://${host}/stories`,
  `https://${host}/vasus-story`,
  `https://${host}/blog/pre-marriage-financial-transparency-guide`,
  `https://${host}/blog/resolving-in-laws-conflicts-in-telugu-families`,
  `https://${host}/blog/how-to-overcome-depression-and-suicidal-thoughts`
];

export async function submitIndexNow(urls = defaultUrlList) {
  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });
    console.log(`[IndexNow] Submission response status: ${res.status} (${res.statusText})`);
    console.log(`[IndexNow] Submitted ${urls.length} URLs to search engine indexers.`);
    return res.status;
  } catch (err) {
    console.error("[IndexNow] Submission failed:", err.message);
    return null;
  }
}

if (process.argv[1] && process.argv[1].endsWith("indexnow.js")) {
  submitIndexNow();
}
