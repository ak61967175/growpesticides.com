// JSON-LD (schema.org) builders — this is what lets Google show rich results
// (product snippets, breadcrumbs, organization/knowledge panel info).
import { BRAND, SITE_URL, absUrl, absAsset } from "./config";
import products from "../data/products";
import { productPath, categoryPath, ingredientPath, productSeo } from "./catalog";
import { imageSize } from "../data/images";

const orgId = `${SITE_URL}/#organization`;

export function organizationSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: BRAND.name,
    legalName: BRAND.full.en,
    alternateName: [BRAND.full.ar, BRAND.pesticides.ar, BRAND.full.en, BRAND.pesticides.en, BRAND.ar],
    url: absUrl(lang, "/"),
    logo: absAsset(BRAND.logo),
    image: absAsset(BRAND.logo),
    description:
      lang === "ar"
        ? "جرو للاستثمار الزراعي – مبيدات زراعية وأسمدة ومنظمات نمو لحماية المحاصيل وزيادة الإنتاجية."
        : "GROW for Agricultural Investment – agricultural pesticides, fertilizers and plant growth regulators.",
    email: BRAND.email,
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address[lang],
      addressCountry: BRAND.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND.phone,
        contactType: "sales",
        areaServed: "EG",
        availableLanguage: ["Arabic", "English"],
      },
    ],
    sameAs: BRAND.sameAs,
  };
}

export function websiteSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: absUrl(lang, "/"),
    name: BRAND.full[lang],
    alternateName: [BRAND.pesticides[lang], BRAND.name],
    inLanguage: lang,
    publisher: { "@id": orgId },
  };
}

export function breadcrumbSchema(lang, crumbs) {
  // crumbs: [{name, path}]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(lang, c.path),
    })),
  };
}

export function itemListSchema(lang, name, ids) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: ids.length,
    itemListElement: ids.map((id, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(lang, productPath(id)),
      name: productSeo(id, lang).p.title,
    })),
  };
}

export function collectionPageSchema(lang, { name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absUrl(lang, path),
    inLanguage: lang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function productSchema(lang, id) {
  const raw = products[id];
  const { p, other, ingredients, description } = productSeo(id, lang);
  const url = absUrl(lang, productPath(id));
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: `${p.title} ${p.subtitle}`,
    alternateName: [p.title, other.title, `${other.title} ${other.subtitle}`],
    description,
    sku: `GROW-${id}`,
    image: [absAsset(p.image)],
    url,
    inLanguage: lang,
    category: p.categoryLabel,
    brand: { "@type": "Brand", name: BRAND.name, alternateName: BRAND.full[lang] },
    manufacturer: { "@id": orgId },
    additionalProperty: [
      { "@type": "PropertyValue", name: lang === "ar" ? "المادة الفعالة" : "Active ingredient", value: p.activeIngredient },
      { "@type": "PropertyValue", name: lang === "ar" ? "فترة ما قبل الحصاد" : "Pre-harvest interval", value: p.phi },
      { "@type": "PropertyValue", name: lang === "ar" ? "معدل الاستخدام" : "Usage rate", value: p.usageRate },
      { "@type": "PropertyValue", name: lang === "ar" ? "المحاصيل" : "Crops", value: p.cropsUsedFor.join(lang === "ar" ? "، " : ", ") },
    ],
    isRelatedTo: ingredients.map((ing) => ({
      "@type": "Thing",
      name: lang === "ar" ? ing.ar : ing.en,
      url: absUrl(lang, ingredientPath(ing.slug)),
    })),
  };
  // Prices: only emitted if you add `price: 123` to the product in products.js.
  // (Google needs offers/price/availability for product listings in search & Shopping.)
  if (raw.price != null) {
    data.offers = {
      "@type": "Offer",
      url,
      price: String(raw.price),
      priceCurrency: raw.currency || "EGP",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": orgId },
    };
  }
  return data;
}

export { categoryPath };
