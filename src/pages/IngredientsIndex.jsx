import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { useLanguage } from "../context/LanguageContext";
import { buildIngredientIndex, isPesticideIngredient } from "../seo/ingredients";
import { ingredientPath } from "../seo/catalog";
import { breadcrumbSchema } from "../seo/schema";

export default function IngredientsIndex() {
  const { t, lang, lp } = useLanguage();
  const { list } = buildIngredientIndex();
  const pesticide = list.filter(isPesticideIngredient);
  const nutrient = list.filter((i) => !isPesticideIngredient(i));
  const crumbs = [
    { name: t("breadcrumbHome"), path: "/" },
    { name: t("navIngredients"), path: "/active-ingredients" },
  ];
  const title =
    lang === "ar"
      ? "المواد الفعالة للمبيدات الزراعية – قائمة كاملة بالمادة الفعالة | جرو"
      : "Pesticide Active Ingredients – Full List by Active Ingredient | GROW";
  const description =
    lang === "ar"
      ? "قائمة المواد الفعالة في مبيدات جرو الزراعية مثل بايفنثرين وإيميداكلوبريد وكلوربيريفوس وأباميكتين ومانكوزيب، مع المنتجات التجارية لكل مادة."
      : "All active ingredients in GROW agricultural pesticides – Bifenthrin, Imidacloprid, Chlorpyrifos, Abamectin, Mancozeb and more – with the products for each.";

  const Group = ({ heading, items }) => (
    <>
      <h2 className="h4 fw-bold text-success mt-4">{heading}</h2>
      <div className="row g-3">
        {items.map((ing) => (
          <div className="col-12 col-sm-6 col-lg-4" key={ing.slug}>
            <Link to={lp(ingredientPath(ing.slug))} className="card h-100 border-0 shadow-sm text-decoration-none">
              <div className="card-body">
                <h3 className="h6 fw-bold mb-1">{lang === "ar" ? ing.ar : ing.en}</h3>
                <div className="text-muted small">{lang === "ar" ? ing.en : ing.ar}</div>
                <div className="small mt-1 text-success">
                  {ing.productIds.length} {t("productsCount")}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container my-5">
      <Seo path="/active-ingredients" title={title} description={description} jsonLd={[breadcrumbSchema(lang, crumbs)]} />
      <Breadcrumbs items={crumbs} />
      <h1 className="fw-bold text-success">{t("ingredientsIndexTitle")}</h1>
      <p>{t("homeSeoP2")}</p>
      <Group heading={t("ingredientsIndexTitle")} items={pesticide} />
      <Group heading={t("nutrientIngredientsTitle")} items={nutrient} />
    </div>
  );
}
