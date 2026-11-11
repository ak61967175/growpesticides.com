import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import products from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../seo/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import NotFound from "./NotFound";
import { BRAND } from "../seo/config";
import { productIdFromParam, productPath, productSeo, relatedByIngredient, ingredientPath, categoryPath, CATEGORIES, productsInCategory } from "../seo/catalog";
import { ARABIC_ALIASES } from "../seo/ingredients";
import { productSchema, breadcrumbSchema } from "../seo/schema";
import { imageSize } from "../data/images";

export default function ProductDetail() {
  const { slug } = useParams();
  const { t, lang, lp } = useLanguage();
  const [panel, setPanel] = useState(null); // null | "phi" | "usageRate"

  // Old numeric links (/product/5) -> new keyword URL
  if (products[slug]) return <Navigate to={lp(productPath(slug))} replace />;
  const id = productIdFromParam(slug);
  if (!id) return <NotFound />;

  const rawProduct = products[id];
  const { p: product, other, title, description, overview, ingredients } = productSeo(id, lang);
  const catSlug = Object.keys(CATEGORIES).find((k) => k !== "pesticides" && CATEGORIES[k].match(rawProduct));
  const crumbs = [
    { name: t("breadcrumbHome"), path: "/" },
    { name: t("navProducts"), path: "/products" },
    ...(catSlug ? [{ name: t(CATEGORIES[catSlug].filterKey), path: categoryPath(catSlug) }] : []),
    { name: product.title, path: productPath(id) },
  ];
  const related = relatedByIngredient(id);
  const sameCategory = catSlug ? productsInCategory(catSlug).map(([i]) => i).filter((i) => i !== String(id)).slice(0, 6) : [];
  const sep = lang === "ar" ? "، " : ", ";
  const specs = [
    [t("specName"), `${product.title} (${other.title})`],
    [t("specActive"), product.activeIngredient],
    [t("specType"), product.categoryLabel],
    [t("specCrops"), product.cropsUsedFor.join(sep)],
    [t("specTargets"), product.pestsControlled.join(sep)],
    [t("specPhi"), product.phi],
    [t("specUsage"), product.usageRate],
  ];

  const togglePanel = (key) => {
    setPanel((prev) => (prev === key ? null : key));
  };

  return (
    <div className="container my-5">
      <Seo
        path={productPath(id)}
        title={title}
        description={description}
        image={product.image}
        type="product"
        jsonLd={[productSchema(lang, id), breadcrumbSchema(lang, crumbs)]}
      />
      <div className="row">
        <div className="col-12">
          <Breadcrumbs items={crumbs} />
        </div>

        {/* Product Image */}
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid rounded shadow"
            alt={`${product.title} ${product.subtitle} – ${product.categoryLabel}`}
            {...imageSize(product.image)}
          />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <span className="badge bg-success mb-2">{product.categoryLabel}</span>
          <h1 className="fw-bold">{product.title}</h1>
          <h4 className="text-muted">{product.subtitle}</h4>
          <hr />

          {/* Toggle buttons: PHI / Usage Rate replace the info below */}
          <div className="d-flex gap-2 mb-4">
            <button
              type="button"
              className={
                "btn btn-outline-success flex-fill" +
                (panel === "phi" ? " active" : "")
              }
              onClick={() => togglePanel("phi")}
            >
              <i className="fas fa-hourglass-half me-2"></i>
              {t("phiButton")}
            </button>
            <button
              type="button"
              className={
                "btn btn-outline-success flex-fill" +
                (panel === "usageRate" ? " active" : "")
              }
              onClick={() => togglePanel("usageRate")}
            >
              <i className="fas fa-flask me-2"></i>
              {t("usageRateButton")}
            </button>
          </div>

          {panel === "phi" && (
            <div className="alert alert-success">
              <h5 className="mb-2">{t("phiTitle")}</h5>
              <p className="mb-0">{product.phi}</p>
            </div>
          )}

          {panel === "usageRate" && (
            <div className="alert alert-success">
              <h5 className="mb-2">{t("usageRateTitle")}</h5>
              <p className="mb-0">{product.usageRate}</p>
            </div>
          )}

          {panel === null && (
            <>
              <p className="lead">{product.description}</p>

              <h5 className="mt-4">{t("keyFeatures")}</h5>
              <ul className="list-group list-group-flush mb-4">
                {product.features.map((feature, i) => (
                  <li className="list-group-item" key={i}>
                    <i className="fas fa-check text-success me-2"></i> {feature}
                  </li>
                ))}
              </ul>

              {/* Pests Controlled */}
              <h5 className="mt-4">{t("pestsControlledTitle")}</h5>
              <div className="mb-3">
                {product.pestsControlled.map((pest, i) => (
                  <span className="badge bg-danger me-2 mb-2" key={i}>
                    {pest}
                  </span>
                ))}
              </div>

              {/* Crops Used For */}
              <h5 className="mt-3">{t("cropsUsedForTitle")}</h5>
              <div className="mb-4">
                {product.cropsUsedFor.map((crop, i) => (
                  <span className="badge bg-success me-2 mb-2" key={i}>
                    {crop}
                  </span>
                ))}
              </div>

              <div className="alert alert-info">
                <i className="fas fa-info-circle"></i> {product.activeIngredient}
              </div>
            </>
          )}

          <a
            href={BRAND.whatsapp}
            className="btn btn-success btn-lg w-100"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i> {t("requestQuote")}
          </a>
        </div>
      </div>

      {/* Always-visible, crawlable product information */}
      <section className="mt-5">
        <h2 className="h4 fw-bold text-success">{t("overviewTitle")}</h2>
        <p>{overview}</p>

        <h2 className="h4 fw-bold text-success mt-4">{t("specTitle")}</h2>
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <tbody>
              {specs.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row" style={{ width: "30%" }}>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {ingredients.length > 0 && (
          <div className="mb-4">
            {ingredients.map((ing) => (
              <div key={ing.slug} className="mb-2">
                <Link to={lp(ingredientPath(ing.slug))} className="btn btn-outline-success btn-sm">
                  {t("ingredientLink")} {lang === "ar" ? `${ing.ar} (${ing.en})` : ing.en}
                </Link>
                {lang === "ar" && ing.aliases.filter((a) => a !== ing.ar).length > 0 && (
                  <span className="text-muted small ms-2 me-2">
                    {t("ingredientAlsoSpelled")} {ing.aliases.filter((a) => a !== ing.ar).join("، ")}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {related.length > 0 && <RelatedList title={t("relatedSameIngredient")} ids={related} />}
        {sameCategory.length > 0 && <RelatedList title={t("moreInCategory")} ids={sameCategory} />}
      </section>
    </div>
  );
}

function RelatedList({ title, ids }) {
  const { lang, lp } = useLanguage();
  return (
    <div className="mt-4">
      <h2 className="h5 fw-bold">{title}</h2>
      <ul className="list-inline">
        {ids.map((i) => {
          const rp = productSeo(i, lang).p;
          return (
            <li key={i} className="list-inline-item mb-2">
              <Link to={lp(productPath(i))} className="btn btn-light border btn-sm">
                {rp.title} <span className="text-muted">{rp.subtitle}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
