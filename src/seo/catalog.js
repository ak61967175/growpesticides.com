// Catalog helpers: product slugs, category definitions + the SEO copy for each category.
import products, { localizeProduct } from "../data/products";
import { slugify, buildIngredientIndex, kindOf, ARABIC_ALIASES } from "./ingredients";
import { BRAND } from "./config";

// ---------------------------------------------------------------- slugs
const slugById = {};
const idBySlug = {};
for (const [id, p] of Object.entries(products)) {
  let slug = slugify(`${p.en.title} ${p.en.subtitle}`).slice(0, 70).replace(/-+$/, "");
  if (idBySlug[slug]) slug = `${slug}-${id}`;
  slugById[id] = slug;
  idBySlug[slug] = id;
}
export const productSlug = (id) => slugById[id];
export const productIdFromParam = (param) => (idBySlug[param] ? idBySlug[param] : null);
export const productPath = (id) => `/product/${slugById[id]}`;
export const ingredientPath = (slug) => `/active-ingredient/${slug}`;
export const categoryPath = (slug) => (slug === "all" ? "/products" : `/products/${slug}`);

// ---------------------------------------------------------------- categories
const PEST_CATS = ["insecticide", "acaricide", "fungicide", "herbicide"];

export const CATEGORIES = {
  pesticides: {
    match: (p) => PEST_CATS.includes(p.category),
    filterKey: "filterPesticides",
  },
  insecticides: { match: (p) => p.category === "insecticide", filterKey: "filterInsecticides" },
  fungicides: { match: (p) => p.category === "fungicide", filterKey: "filterFungicides" },
  herbicides: { match: (p) => p.category === "herbicide", filterKey: "filterHerbicides" },
  acaricides: { match: (p) => p.category === "acaricide", filterKey: "filterAcaricides" },
  fertilizers: { match: (p) => p.category === "Nutrients & micronutrients", filterKey: "filterNutrients" },
  "growth-regulators": { match: (p) => p.category === "growth-regulator", filterKey: "filterGrowthRegulators" },
};
export const CATEGORY_ORDER = ["pesticides", "insecticides", "fungicides", "herbicides", "acaricides", "fertilizers", "growth-regulators"];

export function productsInCategory(slug) {
  const entries = Object.entries(products);
  if (slug === "all") return entries;
  const cat = CATEGORIES[slug];
  return cat ? entries.filter(([, p]) => cat.match(p)) : [];
}

// Old links like /products?category=insecticide  ->  new category slugs
export const LEGACY_CATEGORY = {
  insecticide: "insecticides",
  fungicide: "fungicides",
  herbicide: "herbicides",
  acaricide: "acaricides",
  "Nutrients & micronutrients": "fertilizers",
  "growth-regulator": "growth-regulators",
};

// ---------------------------------------------------------------- category copy
export const CATEGORY_CONTENT = {
  all: {
    ar: {
      title: "منتجات جرو – مبيدات زراعية وأسمدة ومنظمات نمو | جرو للاستثمار الزراعي",
      h1: "منتجات جرو للمبيدات الزراعية",
      description:
        "تصفح كتالوج جرو للمبيدات الزراعية: مبيدات حشرية وفطرية وحشائش وأكاروسية، أسمدة وعناصر صغرى ومنظمات نمو. ابحث باسم المنتج أو المادة الفعالة واطلب عرض سعر.",
      intro: [
        "كتالوج جرو للاستثمار الزراعي يضم مجموعة كاملة من المبيدات الزراعية والأسمدة والعناصر الصغرى ومنظمات النمو لحماية المحاصيل وزيادة الإنتاجية.",
        "يمكنك البحث عن أي منتج باسمه التجاري أو بالمادة الفعالة مثل بايفنثرين وإيميداكلوبريد وكلوربيريفوس وأباميكتين، أو التصفح حسب نوع المبيد: حشري، فطري، حشائش، أو أكاروسي.",
      ],
    },
    en: {
      title: "GROW Products – Agricultural Pesticides, Fertilizers & Growth Regulators",
      h1: "GROW Agricultural Pesticides & Crop Products",
      description:
        "Browse the GROW catalog: insecticides, fungicides, herbicides, acaricides, fertilizers, micronutrients and plant growth regulators. Search by product name or active ingredient.",
      intro: [
        "The GROW for Agricultural Investment catalog covers crop-protection pesticides, fertilizers, micronutrients and plant growth regulators for modern farming.",
        "Search by trade name or by active ingredient such as Bifenthrin, Imidacloprid, Chlorpyrifos or Abamectin, or browse by type: insecticide, fungicide, herbicide or acaricide.",
      ],
    },
  },
  pesticides: {
    ar: {
      title: "مبيدات زراعية – مبيدات حشرية وفطرية وحشائش | جرو للمبيدات الزراعية",
      h1: "المبيدات الزراعية من جرو",
      description:
        "مبيدات زراعية من جرو للاستثمار الزراعي: مبيدات حشرية، فطرية، حشائش وأكاروسية بالمواد الفعالة المعروفة. تعرّف على التركيز ومعدل الاستخدام وفترة ما قبل الحصاد.",
      intro: [
        "تقدم جرو للمبيدات الزراعية تشكيلة واسعة من المبيدات لمكافحة الحشرات والعناكب والأمراض الفطرية والحشائش في الخضروات والفاكهة والمحاصيل الحقلية.",
        "كل منتج موضّح عليه المادة الفعالة وتركيزها ونوع التركيبة (EC، SC، WP، WG…) ومعدل الاستخدام وفترة ما قبل الحصاد.",
      ],
    },
    en: {
      title: "Agricultural Pesticides – Insecticides, Fungicides, Herbicides | GROW",
      h1: "GROW Agricultural Pesticides",
      description:
        "Agricultural pesticides from GROW: insecticides, fungicides, herbicides and acaricides with their active ingredient, concentration, usage rate and pre-harvest interval.",
      intro: [
        "GROW offers a broad range of pesticides to control insects, mites, fungal diseases and weeds in vegetables, fruit trees and field crops.",
        "Every product lists its active ingredient, concentration, formulation type (EC, SC, WP, WG…), usage rate and pre-harvest interval.",
      ],
    },
  },
  insecticides: {
    ar: {
      title: "مبيدات حشرية – بايفنثرين، إيميداكلوبريد، كلوربيريفوس | جرو",
      h1: "المبيدات الحشرية",
      description:
        "مبيدات حشرية من جرو لمكافحة المن والذبابة البيضاء والتربس والديدان: بايفنثرين، إيميداكلوبريد، كلوربيريفوس، لامبدا سيهالوثرين وغيرها. اطلب عرض سعر.",
      intro: [
        "المبيدات الحشرية من جرو مخصصة لمكافحة الآفات الماصة والقارضة مثل المن والذبابة البيضاء والتربس والديدان وحشرات التربة.",
        "تشمل المجموعة مواد فعالة معروفة مثل بايفنثرين وإيميداكلوبريد وكلوربيريفوس ودلتامثرين وأسيتامبريد وإيمامكتين بنزوات.",
      ],
    },
    en: {
      title: "Insecticides – Bifenthrin, Imidacloprid, Chlorpyrifos | GROW",
      h1: "Insecticides",
      description:
        "GROW insecticides against aphids, whiteflies, thrips and caterpillars: Bifenthrin, Imidacloprid, Chlorpyrifos, Lambda-cyhalothrin and more. Request a quote.",
      intro: [
        "GROW insecticides target sucking and chewing pests such as aphids, whiteflies, thrips, caterpillars and soil insects.",
        "The range covers well-known active ingredients including Bifenthrin, Imidacloprid, Chlorpyrifos, Deltamethrin, Acetamiprid and Emamectin Benzoate.",
      ],
    },
  },
  fungicides: {
    ar: {
      title: "مبيدات فطرية – مانكوزيب، أزوكسيستروبين، ديفينوكونازول | جرو",
      h1: "المبيدات الفطرية",
      description:
        "مبيدات فطرية من جرو لمكافحة الأمراض الفطرية في الخضروات والفاكهة: مانكوزيب، أزوكسيستروبين، ديفينوكونازول، ميتالاكسيل وغيرها. اطلب عرض سعر.",
      intro: [
        "المبيدات الفطرية من جرو تحمي المحاصيل من الأمراض الفطرية مثل البياض الدقيقي والبياض الزغبي واللفحات وأعفان الجذور.",
        "تتضمن المجموعة مواد فعالة مثل مانكوزيب وأزوكسيستروبين وديفينوكونازول وكاربندازيم وميتالاكسيل وثيوفانات ميثيل.",
      ],
    },
    en: {
      title: "Fungicides – Mancozeb, Azoxystrobin, Difenoconazole | GROW",
      h1: "Fungicides",
      description:
        "GROW fungicides for vegetables and fruit trees: Mancozeb, Azoxystrobin, Difenoconazole, Metalaxyl and more. See usage rates and request a quote.",
      intro: [
        "GROW fungicides protect crops from fungal diseases such as powdery mildew, downy mildew, blights and root rots.",
        "The range includes Mancozeb, Azoxystrobin, Difenoconazole, Carbendazim, Metalaxyl and Thiophanate-methyl.",
      ],
    },
  },
  herbicides: {
    ar: {
      title: "مبيدات حشائش – جليفوسات، كليثوديم، جلوفوسينات | جرو",
      h1: "مبيدات الحشائش",
      description:
        "مبيدات حشائش من جرو لمكافحة الحشائش في الحقول والبساتين: جليفوسات، كليثوديم، جلوفوسينات أمونيوم. معدلات الاستخدام وطلب عرض سعر.",
      intro: [
        "مبيدات الحشائش من جرو تساعد على التخلص من الحشائش الضارة التي تنافس المحصول على الماء والغذاء.",
        "تشمل المجموعة مواد فعالة مثل جليفوسات وكليثوديم وجلوفوسينات أمونيوم.",
      ],
    },
    en: {
      title: "Herbicides – Glyphosate, Clethodim, Glufosinate | GROW",
      h1: "Herbicides",
      description:
        "GROW herbicides for fields and orchards: Glyphosate, Clethodim and Glufosinate Ammonium. See usage rates and request a quote.",
      intro: [
        "GROW herbicides help remove weeds that compete with your crop for water and nutrients.",
        "The range includes Glyphosate, Clethodim and Glufosinate Ammonium.",
      ],
    },
  },
  acaricides: {
    ar: {
      title: "مبيدات أكاروسية – مبيد العنكبوت الأحمر والأكاروس | أباميكتين، بيريدابين | جرو",
      h1: "المبيدات الأكاروسية (مبيدات العناكب والأكاروس)",
      description:
        "مبيدات أكاروسية من جرو لمكافحة العنكبوت الأحمر والأكاروس: أباميكتين، بيريدابين، سبيروديكلوفين، بيفينازات. معدلات الاستخدام وطلب عرض سعر.",
      intro: [
        "المبيدات الأكاروسية من جرو مخصصة لمكافحة العناكب والأكاروس (مثل العنكبوت الأحمر ذي البقعتين) في الخضروات والفاكهة.",
        "تشمل المجموعة مواد فعالة مثل أباميكتين وبيريدابين وسبيروديكلوفين وبيفينازات وفينبوتاتين أوكسيد.",
      ],
    },
    en: {
      title: "Acaricides – Spider Mite Control | Abamectin, Pyridaben | GROW",
      h1: "Acaricides (Mite & Spider Mite Control)",
      description:
        "GROW acaricides to control spider mites and other mites: Abamectin, Pyridaben, Spirodiclofen, Bifenazate. See usage rates and request a quote.",
      intro: [
        "GROW acaricides control mites such as the two-spotted spider mite in vegetables and fruit trees.",
        "The range includes Abamectin, Pyridaben, Spirodiclofen, Bifenazate and Fenbutatin oxide.",
      ],
    },
  },
  fertilizers: {
    ar: {
      title: "أسمدة وعناصر صغرى – أسمدة ورقية، هيومات البوتاسيوم، نترات | جرو",
      h1: "الأسمدة والمغذيات والعناصر الصغرى",
      description:
        "أسمدة وعناصر صغرى مخلبية من جرو: هيومات البوتاسيوم، نترات البوتاسيوم، كبريتات البوتاسيوم، حديد وزنك ومنجنيز وNPK. اطلب عرض سعر.",
      intro: [
        "الأسمدة والمغذيات من جرو تعوّض نقص العناصر الغذائية وتحسّن نمو الجذور وعقد الثمار وجودة المحصول.",
        "تشمل المجموعة هيومات البوتاسيوم ونترات وكبريتات البوتاسيوم وعناصر الحديد والزنك والمنجنيز والبورون والكالسيوم والمغنسيوم ومخاليط NPK.",
      ],
    },
    en: {
      title: "Fertilizers & Micronutrients – Potassium Humate, Nitrates, NPK | GROW",
      h1: "Fertilizers, Nutrients & Micronutrients",
      description:
        "GROW fertilizers and micronutrients: Potassium Humate, Potassium Nitrate, Potassium Sulfate, Iron, Zinc, Manganese and NPK. Request a quote.",
      intro: [
        "GROW fertilizers and nutrients correct nutrient deficiencies and support root growth, fruit set and crop quality.",
        "The range includes Potassium Humate, Potassium Nitrate and Sulfate, Iron, Zinc, Manganese, Boron, Calcium, Magnesium and NPK blends.",
      ],
    },
  },
  "growth-regulators": {
    ar: {
      title: "منظمات نمو نباتية – سيتوكينين وCPPU لتكبير الثمار | جرو",
      h1: "منظمات النمو النباتية",
      description:
        "منظمات نمو نباتية من جرو لتحسين عقد الثمار وزيادة حجمها: CPPU (فوركلورفينورون) و6-BA. معدلات الاستخدام وطلب عرض سعر.",
      intro: [
        "منظمات النمو من جرو تساعد على تحسين عقد الثمار وزيادة حجمها وانتظام نموها في أشجار الفاكهة والخضروات.",
        "تشمل المجموعة منتجات بمادة CPPU (فوركلورفينورون) و6-بنزيل أمينوبيورين.",
      ],
    },
    en: {
      title: "Plant Growth Regulators – CPPU Cytokinin for Fruit Size | GROW",
      h1: "Plant Growth Regulators",
      description:
        "GROW plant growth regulators to improve fruit set and size: CPPU (Forchlorfenuron) and 6-BA. See usage rates and request a quote.",
      intro: [
        "GROW plant growth regulators help improve fruit set, fruit size and uniformity in fruit trees and vegetables.",
        "The range includes products based on CPPU (Forchlorfenuron) and 6-Benzylaminopurine.",
      ],
    },
  },
};

// ---------------------------------------------------------------- product copy
const sep = (lang) => (lang === "ar" ? "، " : ", ");
const isPesticide = (cat) => PEST_CATS.includes(cat);

export function trimAt(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[،,:;\-–\s]+$/, "") + "…";
}

export function productSeo(id, lang) {
  const raw = products[id];
  const p = localizeProduct(raw, lang);
  const other = localizeProduct(raw, lang === "ar" ? "en" : "ar");
  const pesticide = isPesticide(raw.category);
  const kind = kindOf(raw.category)[lang];
  const { byProduct, bySlug } = buildIngredientIndex();
  const ingredients = (byProduct[id] || []).map((s) => bySlug[s]);
  const brand = lang === "ar" ? BRAND.pesticides.ar : "GROW Pesticides";
  const pests = p.pestsControlled.join(sep(lang));
  const crops = p.cropsUsedFor.join(sep(lang));

  let title, description, overview;
  if (lang === "ar") {
    title = `${p.title} (${other.title}) ${p.subtitle} | ${p.categoryLabel} – ${BRAND.ar}`;
    description = trimAt(
      `${p.title} (${other.title}) ${p.categoryLabel} من جرو للاستثمار الزراعي، المادة الفعالة ${p.subtitle}. ` +
        `${pesticide ? "لمكافحة" : "يعالج"} ${pests} في ${crops}. اطلب عرض سعر.`,
      158
    );
    overview =
      `${p.title} (${other.title}) هو ${kind} من ${BRAND.full.ar} ويحتوي على المادة الفعالة ${p.subtitle}. ` +
      `${pesticide ? "يُستخدم لمكافحة" : "يُستخدم لمعالجة"} ${pests} في ${crops}. ` +
      `للاستفسار عن سعر ${p.title} أو طريقة استخدامه تواصل معنا عبر واتساب.`;
  } else {
    title = `${p.title} ${p.subtitle} | ${p.categoryLabel} – ${brand}`;
    description = trimAt(
      `${p.title} (${other.title}) ${p.categoryLabel.toLowerCase()} from GROW for Agricultural Investment, active ingredient ${p.subtitle}. ` +
        `${pesticide ? "Controls" : "Addresses"} ${pests} in ${crops}. Request a quote.`,
      158
    );
    overview =
      `${p.title} (${other.title}) is a ${kind} from ${BRAND.full.en} containing ${p.subtitle}. ` +
      `${pesticide ? "It is used to control" : "It is used to address"} ${pests} in ${crops}. ` +
      `Contact us on WhatsApp for pricing or usage advice on ${p.title}.`;
  }
  return { p, other, title, description, overview, ingredients, kind, pesticide };
}

export function relatedByIngredient(id) {
  const { byProduct, bySlug } = buildIngredientIndex();
  const ids = new Set();
  for (const s of byProduct[id] || []) bySlug[s].productIds.forEach((x) => x !== String(id) && ids.add(x));
  return [...ids].slice(0, 6);
}

export { ARABIC_ALIASES };
