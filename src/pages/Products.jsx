import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { localizeProduct } from "../data/products";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";
import Seo from "../seo/Seo";
import NotFound from "./NotFound";
import { useLanguage } from "../context/LanguageContext";
import { productsInCategory, CATEGORIES, CATEGORY_ORDER, CATEGORY_CONTENT, categoryPath, productSeo } from "../seo/catalog";
import { breadcrumbSchema, itemListSchema, collectionPageSchema } from "../seo/schema";

// Normal categories first, then growth regulators, then nutrients last.
function getPriority(product) {
  if (product.category === "Nutrients & micronutrients") return 2;
  if (product.categoryLabel.en === "Anti-peeling") return 1;
  return 0;
}

export default function Products() {
  const { t, lang, lp } = useLanguage();
  const { cat } = useParams();
  const slug = cat || "all";
  const valid = slug === "all" || CATEGORIES[slug];
  const [search, setSearch] = useState("");

  const entries = useMemo(
    () => (valid ? productsInCategory(slug).sort(([, a], [, b]) => getPriority(a) - getPriority(b)) : []),
    [slug, valid]
  );
  if (!valid) return <NotFound />;

  const content = CATEGORY_CONTENT[slug][lang];
  const term = search.trim().toLowerCase();
  // Search matches names / active ingredients in BOTH languages (so "bifenthrin" finds it from the Arabic page too).
  const visible = entries.filter(([id, product]) => {
    if (!term) return true;
    const a = localizeProduct(product, "ar");
    const e = localizeProduct(product, "en");
    return [a.title, a.subtitle, e.title, e.subtitle].some((x) => x.toLowerCase().includes(term));
  });

  const filters = ["all", ...CATEGORY_ORDER];
  const crumbs = [
    { name: t("breadcrumbHome"), path: "/" },
    { name: t("navProducts"), path: "/products" },
    ...(slug !== "all" ? [{ name: t(CATEGORIES[slug].filterKey), path: categoryPath(slug) }] : []),
  ];

  return (
    <>
      <Seo
        path={categoryPath(slug)}
        title={content.title}
        description={content.description}
        jsonLd={[
          collectionPageSchema(lang, { name: content.h1, description: content.description, path: categoryPath(slug) }),
          breadcrumbSchema(lang, crumbs),
          itemListSchema(lang, content.h1, entries.map(([id]) => id)),
        ]}
      />
      <div className="bg-light py-5 text-center mt-2">
        <div className="container">
          <h1 className="fw-bold text-success">{content.h1}</h1>
          {content.intro.map((par, i) => (
            <p key={i} className="mx-auto mb-2" style={{ maxWidth: 820 }}>
              {par}
            </p>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <Breadcrumbs items={crumbs} />
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-white border-end-0">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="search"
                id="searchInput"
                className="form-control border-start-0"
                placeholder={t("searchPlaceholder")}
                aria-label={t("searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Filters are real links so each category has its own crawlable page */}
        <nav className="filter-bar mb-5">
          {filters.map((f) => (
            <Link
              key={f}
              to={lp(categoryPath(f))}
              className={"btn btn-outline-success" + (f === slug ? " active" : "")}
            >
              {f === "all" ? t("filterAll") : t(CATEGORIES[f].filterKey)}
            </Link>
          ))}
        </nav>

        <div className="row g-4" id="productGrid">
          {visible.map(([id, product], i) => (
            <ProductCard key={id} id={id} product={product} eager={i < 3} />
          ))}
          {visible.length === 0 && <div className="col-12 text-center text-muted py-5">{t("noResults")}</div>}
        </div>
      </div>
    </>
  );
}
