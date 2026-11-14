import { createFileRoute } from "@tanstack/react-router";
import { ALL_BLOG_ARTICLES } from "@/data/blogArticles";

const BASE_URL = "https://www.jeevanabandham.online";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const coreEntries = [
          { path: "/", priority: "1.0", changefreq: "daily" },
          { path: "/blog", priority: "0.95", changefreq: "daily" },
          { path: "/pre-marriage", priority: "0.9", changefreq: "weekly" },
          { path: "/child-protection", priority: "0.9", changefreq: "weekly" },
          { path: "/support", priority: "0.9", changefreq: "weekly" },
          { path: "/vasus-story", priority: "0.85", changefreq: "monthly" },
        ];

        const blogEntries = ALL_BLOG_ARTICLES.map((article) => ({
          path: `/blog/${article.slug}`,
          priority: "0.85",
          changefreq: "weekly",
        }));

        const allEntries = [...coreEntries, ...blogEntries];

        const urls = allEntries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>2026-11-13</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: { 
            "Content-Type": "application/xml; charset=utf-8", 
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" 
          },
        });
      },
    },
  },
});
