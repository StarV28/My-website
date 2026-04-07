export default defineEventHandler(() => {
  const base = "https://my.wpslab.app";

  const routes = ["", "/de", "/ru", "/ua"];

  const urls = routes
    .map(
      (route) => `
      <url>
        <loc>${base}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;
});
