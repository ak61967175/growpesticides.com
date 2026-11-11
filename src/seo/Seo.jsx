// <Seo/> — sets <title>, meta tags, canonical, hreflang, Open Graph, Twitter and JSON-LD.
//  • On the server (pre-render) it pushes into a collector that scripts/prerender.mjs writes into <head>.
//  • In the browser it updates document.head when you navigate between pages.
import { createContext, useContext, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SITE_URL, LANGS, DEFAULT_LANG, BRAND, absUrl, absAsset } from "./config";

export const HeadCollectorContext = createContext(null);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Build the list of head tags (as plain objects) for a page. */
export function buildHead({ lang, path = "/", title, description, image, type = "website", noindex = false, jsonLd = [] }) {
  const canonical = absUrl(lang, path);
  const ogImage = absAsset(image || BRAND.logo);
  const tags = [];
  tags.push({ tag: "title", text: title });
  tags.push({ tag: "meta", name: "description", content: description });
  tags.push({ tag: "meta", name: "robots", content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1" });
  tags.push({ tag: "link", rel: "canonical", href: canonical });
  if (!noindex) {
    for (const l of LANGS) tags.push({ tag: "link", rel: "alternate", hreflang: l, href: absUrl(l, path) });
    tags.push({ tag: "link", rel: "alternate", hreflang: "x-default", href: absUrl(DEFAULT_LANG, path) });
  }
  const og = {
    "og:site_name": BRAND.full[lang],
    "og:type": type,
    "og:title": title,
    "og:description": description,
    "og:url": canonical,
    "og:image": ogImage,
    "og:locale": lang === "ar" ? "ar_EG" : "en_US",
    "og:locale:alternate": lang === "ar" ? "en_US" : "ar_EG",
  };
  for (const [property, content] of Object.entries(og)) tags.push({ tag: "meta", property, content });
  tags.push({ tag: "meta", name: "twitter:card", content: "summary_large_image" });
  tags.push({ tag: "meta", name: "twitter:title", content: title });
  tags.push({ tag: "meta", name: "twitter:description", content: description });
  tags.push({ tag: "meta", name: "twitter:image", content: ogImage });
  for (const obj of jsonLd.filter(Boolean)) tags.push({ tag: "script", type: "application/ld+json", json: obj });
  return tags;
}

/** Serialize tags to an HTML string (used by the pre-render script). */
export function headToHtml(tags) {
  return tags
    .map((t) => {
      if (t.tag === "title") return `<title data-seo>${esc(t.text)}</title>`;
      if (t.tag === "script")
        return `<script type="application/ld+json" data-seo>${JSON.stringify(t.json).replace(/</g, "\\u003c")}</script>`;
      const attrs = Object.entries(t)
        .filter(([k]) => k !== "tag")
        .map(([k, v]) => `${k}="${esc(v)}"`)
        .join(" ");
      return `<${t.tag} ${attrs} data-seo>`;
    })
    .join("\n    ");
}

function applyToDocument(tags) {
  document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
  for (const t of tags) {
    if (t.tag === "title") {
      document.title = t.text;
      const el = document.createElement("title");
      el.setAttribute("data-seo", "");
      el.textContent = t.text;
      document.head.appendChild(el);
      continue;
    }
    const el = document.createElement(t.tag);
    if (t.tag === "script") {
      el.type = t.type;
      el.textContent = JSON.stringify(t.json);
    } else {
      for (const [k, v] of Object.entries(t)) if (k !== "tag") el.setAttribute(k, v);
    }
    el.setAttribute("data-seo", "");
    document.head.appendChild(el);
  }
}

export default function Seo(props) {
  const { lang } = useLanguage();
  const collector = useContext(HeadCollectorContext);
  const tags = buildHead({ lang, ...props });

  if (collector) collector.tags = tags; // server render: last <Seo/> wins

  const key = JSON.stringify(tags);
  useEffect(() => {
    applyToDocument(tags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return null;
}

export { SITE_URL };
