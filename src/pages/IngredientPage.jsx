import { useParams } from "react-router-dom";
import Seo from "../seo/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import NotFound from "./NotFound";
import products from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import { buildIngredientIndex, kindOf } from "../seo/ingredients";
import { ingredientPath, trimAt, productSeo } from "../seo/catalog";
import { breadcrumbSchema, itemListSchema, collectionPageSchema } from "../seo/schema";

export default function IngredientPage() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const ing = buildIngredientIndex().bySlug[slug];
  if (!ing) return <NotFound />;

  const name = lang === "ar" ? ing.ar : ing.en;
  const otherName = lang === "ar" ? ing.en : ing.ar;
  const kinds = [...new Set(ing.categories.map((c) => kindOf(c)[lang]))];
  const names = ing.productIds.map((id) => productSeo(id, lang).p.title);
  const sep = lang === "ar" ? "، " : ", ";
  const path = ingredientPath(ing.slug);
  const crumbs = [
    { name: t("breadcrumbHome"), path: "/" },
    { name: t("navIngredients"), path: "/active-ingredients" },
    { name, path },
  ];

  const title =
    lang === "ar"
      ? `${ing.ar} (${ing.en}) – مبيدات ومنتجات بالمادة الفعالة | ${"جرو للمبيدات الزراعية"}`
      : `${ing.en} (${ing.ar}) Active Ingredient – ${ing.productIds.length} Product${ing.productIds.length > 1 ? "s" : ""} | GROW Pesticides`;
  const description = trimAt(
    lang === "ar"
      ? `منتجات جرو التي تحتوي على المادة الفعالة ${ing.ar} (${ing.en}): ${names.join(sep)}. التركيزات والمحاصيل والآفات ومعدلات الاستخدام. اطلب عرض سعر.`
      : `GROW products containing the active ingredient ${ing.en} (${ing.ar}): ${names.join(sep)}. Concentrations, crops, pests and usage rates. Request a quote.`,
    158
  );
  const n = ing.productIds.length;
  const arCount = n === 1 ? "منتج واحد" : n === 2 ? "منتجين" : n <= 10 ? `${n} منتجات` : `${n} منتجًا`;
  const aliases = ing.aliases.filter((a) => a !== ing.ar);
  const intro =
    lang === "ar"
      ? `المادة الفعالة ${ing.ar} (${ing.en}) متوفرة في ${arCount} من جرو للاستثمار الزراعي، وهي من نوع ${kinds.join(" / ")}. ` +
        `ابحث عن ${ing.ar} بأي من أسمائه التجارية أدناه، وتعرّف على التركيز ومعدل الاستخدام وفترة ما قبل الحصاد لكل منتج.`
      : `The active ingredient ${ing.en} (${ing.ar}) is available in ${ing.productIds.length} GROW product${ing.productIds.length > 1 ? "s" : ""} (${kinds.join(" / ")}). ` +
        `Compare the trade names below and check the concentration, usage rate and pre-harvest interval of each.`;

  return (
    <div className="container my-5">
      <Seo
        path={path}
        title={title}
        description={description}
        jsonLd={[
          collectionPageSchema(lang, { name: `${name} (${otherName})`, description, path }),
          breadcrumbSchema(lang, crumbs),
          itemListSchema(lang, name, ing.productIds),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <h1 className="fw-bold text-success">
        {lang === "ar" ? `${ing.ar} – ${ing.en}` : `${ing.en} – ${ing.ar}`}
      </h1>
      <p className="lead">{intro}</p>
      {lang === "ar" && aliases.length > 0 && (
        <p className="text-muted">
          {t("ingredientAlsoSpelled")} {aliases.join("، ")}
        </p>
      )}
      <h2 className="h4 fw-bold mt-4 mb-3">
        {t("productsContaining")} {name}
      </h2>
      <div className="row g-4">
        {ing.productIds.map((id, i) => (
          <ProductCard key={id} id={id} product={products[id]} eager={i < 3} />
        ))}
      </div>
    </div>
  );
}
