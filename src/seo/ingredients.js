// Builds the "active ingredient" index from the product catalog.
// Each product subtitle looks like  "Mancozeb 64% + Metalaxyl 8% WP"  (EN)
// and  "مانكوزيب 64% + ميتالاكسيل 8% WP"  (AR) — same order, so we can pair them.
import products from "../data/products";

export function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/\(([^)]*)\)/g, " $1 ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const FORMULATION = /\b(EC|SC|WP|WG|SL|SP|WDG|SG|OD|ME|EW|DF)\b/gi;

function cleanName(raw, lang) {
  return raw
    .replace(/\(\s*(Suspension|معلق)\s*\)/gi, "")
    .replace(/\d+(?:[.,]\d+)?\s*%/g, "")
    .replace(FORMULATION, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

// Extra spellings people actually type in Arabic for the same molecule.
// (Shown on the ingredient page & product pages so searches with other spellings still match.)
export const ARABIC_ALIASES = {
  bifenthrin: ["بيفنثرين", "بايفنثرين", "بيفينثرين"],
  imidacloprid: ["ايميداكلوبريد", "اميداكلوبريد", "إيميداكلوبرايد"],
  chlorpyrifos: ["كلوربيريفوس", "كلوروبيريفوس", "كلوربيرفوس", "كلوربيريفوس إيثيل"],
  deltamethrin: ["دلتامثرين", "دلتاميثرين"],
  lufenuron: ["لوفينيورون", "لوفينورون"],
  "lambda-cyhalothrin": ["لامبدا سيهالوثرين", "لمبادا سيهالوثرين", "لامدا سيهالوثرين"],
  acetamiprid: ["أسيتامبريد", "اسيتامبريد", "أسيتامبرايد"],
  abamectin: ["أباميكتين", "ابامكتين", "أبامكتين"],
  pyridaben: ["بيريدابين", "بيرادابين"],
  azoxystrobin: ["أزوكسيستروبين", "ازوكسي ستروبين"],
  difenoconazole: ["دايفينوكونازول", "ديفينوكونازول", "دايفنوكونازول"],
  carbendazim: ["كاربندازيم", "كاربندازم"],
  "thiophanate-methyl": ["ثيوفانات ميثيل", "ثيوفانيت ميثيل"],
  mancozeb: ["مانكوزيب", "مانكوزب"],
  metalaxyl: ["ميتالاكسيل", "ميتالاكسل"],
  "metalaxyl-m": ["ميتالاكسيل-ام", "ميفينوكسام"],
  propiconazole: ["بروبيكونازول", "بروبيكونزول"],
  hymexazol: ["هيمكسازول", "هايمكسازول"],
  dimethomorph: ["دايميثومورف", "ديميثومورف"],
  "emamectin-benzoate": ["إيمامكتين بنزوات", "ايمامكتين بنزوات", "إيمامكتين"],
  dimethoate: ["دايميثويت", "ديميثويت", "ديمثويت"],
  diazinon: ["ديازينون", "دايازينون"],
  methomyl: ["ميثوميل", "ميثوميل 90"],
  indoxacarb: ["اندوكس كارب", "إندوكساكارب", "اندوكساكارب"],
  oxamyl: ["اوكساميل", "أوكساميل"],
  fenamiphos: ["فينامفوس", "فيناميفوس"],
  glyphosate: ["جليفوسات", "جلايفوسات", "جلايفوسيت"],
  "glufosinate-ammonium": ["جلوفوسينات أمونيوم", "جلوفوسينيت أمونيوم"],
  clethodim: ["كليثوديم", "كلثوديم"],
  chlorfenapyr: ["كلورفينابير", "كلورفيناباير"],
  spirodiclofen: ["سبيروديكلوفين", "سبيرو ديكلوفين"],
  spirotetramat: ["سبيروتترامات", "سبيروتتراميت"],
  pyriproxyfen: ["بيريبروكسيفين", "بيريبروكسفين"],
  bifenazate: ["بيفينازات", "بيفيناسيت"],
  "fenbutatin-oxide": ["فينبوتاتين أوكسيد", "فينبيوتاتين أكسيد"],
  "fosetyl-aluminium": ["فوسيتيل الألمنيوم", "فوسيتيل ألومنيوم"],
  fosthiazate: ["فوسثيازات", "فوستيازات"],
  "mineral-oil": ["زيت معدني", "زيت كابيسات"],
  "potassium-humate": ["هيومات البوتاسيوم", "هيومات بوتاسيوم", "حمض الهيوميك"],
};

// A few ingredient types shown as "kind" in titles (for nicer, more specific copy).
const KIND_BY_CATEGORY = {
  insecticide: { ar: "مبيد حشري", en: "insecticide" },
  acaricide: { ar: "مبيد أكاروسي (مبيد العنكبوت الأحمر)", en: "acaricide" },
  fungicide: { ar: "مبيد فطري", en: "fungicide" },
  herbicide: { ar: "مبيد حشائش", en: "herbicide" },
  "growth-regulator": { ar: "منظم نمو", en: "plant growth regulator" },
  "Nutrients & micronutrients": { ar: "سماد ومغذٍّ نباتي", en: "fertilizer / nutrient" },
};
export const kindOf = (category) => KIND_BY_CATEGORY[category] || { ar: "منتج زراعي", en: "agricultural product" };

/** Split a subtitle into ingredient names, per language. Returns [{name, hasPercent}] */
function splitSubtitle(subtitle, lang) {
  return subtitle.split(/\s\+\s/).map((part) => ({
    name: cleanName(part, lang),
    hasPercent: /\d\s*%/.test(part),
  }));
}

let cache;
export function buildIngredientIndex() {
  if (cache) return cache;
  const bySlug = {};
  const byProduct = {};

  for (const [id, p] of Object.entries(products)) {
    const en = splitSubtitle(p.en.subtitle, "en");
    const ar = splitSubtitle(p.ar.subtitle, "ar");
    const paired = en.length === ar.length;
    byProduct[id] = [];
    en.forEach((e, i) => {
      if (!e.hasPercent) return; // skips "Soil salinity treatment", "Chelated Micronutrient Mix", NPK …
      const slug = slugify(e.name);
      if (!slug) return;
      const arName = paired ? ar[i].name : ar.map((a) => a.name).join(" + ");
      if (!bySlug[slug]) {
        bySlug[slug] = {
          slug,
          en: e.name,
          ar: arName,
          aliases: ARABIC_ALIASES[slug] || [],
          productIds: [],
          categories: new Set(),
        };
      }
      const ing = bySlug[slug];
      if (!ing.productIds.includes(id)) ing.productIds.push(id);
      ing.categories.add(p.category);
      byProduct[id].push(slug);
    });
  }

  const list = Object.values(bySlug)
    .map((i) => ({ ...i, categories: [...i.categories] }))
    .sort((a, b) => a.en.localeCompare(b.en));
  cache = { bySlug: Object.fromEntries(list.map((i) => [i.slug, i])), list, byProduct };
  return cache;
}

export const NUTRIENT_CATEGORY = "Nutrients & micronutrients";
export const isPesticideIngredient = (ing) =>
  ing.categories.some((c) => ["insecticide", "acaricide", "fungicide", "herbicide"].includes(c));
