const projects = [
  {
    slug: "gericht-restaurant",
  },
  {
    slug: "barber-shop",
  },
  {
    slug: "crypto-dashboard",
  },
  {
    slug: "mini-store",
  },
];
//---------------------------------------//

export default defineEventHandler(() => {
  const base = "https://my.wpslab.app";
  const locales = ["", "/de", "/ru", "/ua"];

  const urls: string[] = [];

  for (const locale of locales) {
    urls.push(`
      <url>
        <loc>${base}${locale}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    `);

    for (const project of projects) {
      urls.push(`
        <url>
          <loc>${base}${locale}/projects/${project.slug}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join("")}
</urlset>`;
});
