// =============================================================================
// SEO / site-wide settings.  ⚠️  CHANGE SITE_URL to your real domain.
// You can also set it at build time:   SITE_URL=https://yourdomain.com npm run build
// =============================================================================
// __SITE_URL__ is injected by vite.config.js from the SITE_URL / VITE_SITE_URL env var or a .env file.
// eslint-disable-next-line no-undef
export const SITE_URL = (typeof __SITE_URL__ !== "undefined" && __SITE_URL__ ? __SITE_URL__ : "https://REPLACE-WITH-YOUR-DOMAIN.com").replace(/\/+$/, "");

export const LANGS = ["ar", "en"];
export const DEFAULT_LANG = "ar"; // Egyptian market → Arabic is the default / x-default

export const BRAND = {
  name: "GROW",
  ar: "جرو",
  full: {
    ar: "جرو للاستثمار الزراعي",
    en: "GROW for Agricultural Investment",
  },
  pesticides: {
    ar: "جرو للمبيدات الزراعية",
    en: "GROW Agricultural Pesticides",
  },
  phone: "+201061967175",
  whatsapp: "https://wa.me/+201061967175",
  email: "GROW@gmail.com",
  address: {
    ar: "كيلو 93، طريق الإسكندرية القاهرة الصحراوي",
    en: "Kilo 93, Alexandria Cairo Desert Road",
  },
  country: "EG",
  logo: "/assets/logo.png",
  sameAs: [
    "https://www.facebook.com/share/1ArAxHekfC/?mibextid=wwXIfr",
    "https://www.instagram.com/grow.pesticides?igsh=NWs3bnEwaXYzeGNu",
  ],
};

// URLs WITHOUT a trailing slash (matches Cloudflare Pages, which serves /ar/products/index.html at /ar/products)
export const absUrl = (lang, path = "/") => {
  const clean = path === "/" ? "" : path.replace(/^\/?/, "/").replace(/\/+$/, "");
  return `${SITE_URL}/${lang}${clean}`;
};
export const absAsset = (p) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);
