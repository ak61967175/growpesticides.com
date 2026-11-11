// Server-side entry used ONLY by scripts/prerender.mjs at build time.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import products from "./data/products";
import { HeadCollectorContext, headToHtml } from "./seo/Seo";
import { LANGS, SITE_URL, absUrl, absAsset } from "./seo/config";
import { CATEGORIES, productPath, productSlug, categoryPath, ingredientPath, LEGACY_CATEGORY } from "./seo/catalog";
import { buildIngredientIndex } from "./seo/ingredients";
import { localizeProduct } from "./data/products";

export function render(url) {
  const collector = { tags: [] };
  const html = renderToString(
    <HeadCollectorContext.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadCollectorContext.Provider>
  );
  return { html, head: headToHtml(collector.tags) };
}

// Every indexable page (language-less path) + image info for the sitemap.
export function getPages() {
  const pages = [{ path: "/" }, { path: "/products" }, { path: "/active-ingredients" }];
  for (const c of Object.keys(CATEGORIES)) pages.push({ path: categoryPath(c) });
  for (const ing of buildIngredientIndex().list) pages.push({ path: ingredientPath(ing.slug) });
  for (const id of Object.keys(products)) {
    pages.push({ path: productPath(id), image: absAsset(localizeProduct(products[id], "en").image), id });
  }
  return pages;
}

export function getRedirects() {
  // Old URLs from the previous version of the site → new ones (static redirect pages)
  const list = [{ from: "/products", to: "/ar/products" }];
  for (const id of Object.keys(products)) list.push({ from: `/product/${id}`, to: `/ar${productPath(id)}` });
  return { list, legacyCategory: LEGACY_CATEGORY };
}

export { LANGS, SITE_URL, absUrl, productSlug };
