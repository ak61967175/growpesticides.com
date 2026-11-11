// Pre-renders every page to static HTML (so Google/Bing/Facebook/WhatsApp see full content
// + titles + structured data WITHOUT running JavaScript), then writes sitemap.xml & robots.txt.
// Runs automatically as part of `npm run build`.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const server = await import(pathToFileURL(path.resolve("dist-server/entry-server.js")).href);
const { render, getPages, getRedirects, LANGS, SITE_URL, absUrl } = server;
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

if (SITE_URL.includes("REPLACE-WITH-YOUR-DOMAIN")) {
  console.warn(
    "\n⚠️  SITE_URL is not set! Canonical links, hreflang and sitemap.xml will contain a placeholder domain.\n" +
      "   Build with:  SITE_URL=https://your-domain.com npm run build   (or put VITE_SITE_URL in a .env file)\n"
  );
}

const write = (file, content) => {
  const full = path.join(DIST, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
};

function page(url, lang) {
  const { html, head } = render(url);
  return template
    .replace('<html lang="ar" dir="rtl">', `<html lang="${lang}" dir="${lang === "ar" ? "rtl" : "ltr"}">`)
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
}

const pages = getPages();
let count = 0;
for (const lang of LANGS) {
  for (const p of pages) {
    const url = `/${lang}${p.path === "/" ? "" : p.path}`;
    write(`${lang}${p.path === "/" ? "" : p.path}/index.html`, page(url, lang));
    count++;
  }
}

// 404 page (most static hosts use /404.html automatically)
write("404.html", page("/ar/page-not-found", "ar"));

// ---- root "/" : language redirect page -------------------------------------------------
const alt = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${absUrl(l, "/")}">`).join("\n");
write(
  "index.html",
  `<!DOCTYPE html>
<html lang="ar" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>جرو للاستثمار الزراعي | GROW for Agricultural Investment</title>
<meta name="description" content="جرو للاستثمار الزراعي – مبيدات زراعية وأسمدة ومنظمات نمو | GROW – agricultural pesticides, fertilizers and growth regulators.">
<link rel="canonical" href="${absUrl("ar", "/")}">
${alt}
<link rel="alternate" hreflang="x-default" href="${absUrl("ar", "/")}">
<meta http-equiv="refresh" content="0; url=/ar">
<script>try{var l=localStorage.getItem("grow_lang");location.replace(l==="en"?"/en":"/ar")}catch(e){location.replace("/ar")}</script>
</head><body><p><a href="/ar">جرو للاستثمار الزراعي</a> · <a href="/en">GROW for Agricultural Investment</a></p></body></html>`
);

// ---- old URLs → new URLs (static redirect stubs) ----------------------------------------
const { list, legacyCategory } = getRedirects();
for (const r of list) {
  const script =
    r.from === "/products"
      ? `<script>var m={${Object.entries(legacyCategory).map(([k, v]) => `${JSON.stringify(k)}:${JSON.stringify(v)}`).join(",")}};var c=new URLSearchParams(location.search).get("category");location.replace(m[c]?"/ar/products/"+m[c]:${JSON.stringify(r.to)})</script>`
      : "";
  write(
    `${r.from.replace(/^\//, "")}/index.html`,
    `<!DOCTYPE html><html lang="ar"><head><meta charset="UTF-8"><title>Redirecting…</title>
<link rel="canonical" href="${SITE_URL}${r.to}"><meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${r.to}">${script}</head><body><a href="${r.to}">${r.to}</a></body></html>`
  );
}

// ---- sitemap.xml (with hreflang alternates + product images) ----------------------------
const today = new Date().toISOString().slice(0, 10);
const prio = (p) => (p.path === "/" ? "1.0" : p.id ? "0.8" : p.path.startsWith("/products") || p.path === "/active-ingredients" ? "0.9" : "0.7");
const urls = [];
for (const p of pages) {
  for (const lang of LANGS) {
    const links = [...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absUrl(l, p.path)}"/>`), `    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl("ar", p.path)}"/>`].join("\n");
    const img = p.image ? `\n    <image:image><image:loc>${p.image}</image:loc></image:image>` : "";
    urls.push(`  <url>\n    <loc>${absUrl(lang, p.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${prio(p)}</priority>\n${links}${img}\n  </url>`);
  }
}
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>\n`
);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`✅ Pre-rendered ${count} pages + 404, redirects, sitemap.xml (${urls.length} URLs), robots.txt`);
