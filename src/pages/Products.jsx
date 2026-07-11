import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products, { localizeProduct } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useLanguage } from "../context/LanguageContext";

// Priority used for final ordering: normal categories first, then
// growth regulators (IGR / "Anti-peeling"), then Nutrients & micronutrients last.
function getPriority(product) {
  if (product.category === "Nutrients & micronutrients") return 2;
  if (product.categoryLabel.en === "Anti-peeling") return 1;
  return 0;
}

export default function Products() {
  const { t, lang } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const initialFilter = searchParams.get("category") || "all";
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const filters = [
    { label: t("filterAll"), value: "all" },
    { label: t("filterInsecticides"), value: "insecticide" },
    { label: t("filterHerbicides"), value: "herbicide" },
    { label: t("filterFungicides"), value: "fungicide" },
    { label: t("filterAcaricides"), value: "acaricide" },
    { label: t("filterNutrients"), value: "Nutrients & micronutrients" },
    { label: t("filterGrowthRegulators"), value: "growth-regulator" },
  ];

  const entries = useMemo(() => {
    return Object.entries(products).sort(
      ([, a], [, b]) => getPriority(a) - getPriority(b)
    );
  }, []);

  const visibleProducts = entries.filter(([, product]) => {
    const localized = localizeProduct(product, lang);
    const term = search.toLowerCase();
    const matchesSearch =
      localized.title.toLowerCase().includes(term) ||
      localized.subtitle.toLowerCase().includes(term);

    let matchesFilter = true;
    if (activeFilter === "growth-regulator") {
      matchesFilter = product.categoryLabel.en === "Anti-peeling";
    } else if (activeFilter !== "all") {
      matchesFilter =
        product.category.toLowerCase() === activeFilter.toLowerCase();
    }

    return matchesSearch && matchesFilter;
  });

  const handleFilterClick = (value) => {
    setActiveFilter(value);
    setSearchParams(value === "all" ? {} : { category: value });
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-light py-5 text-center mt-2">
        <div className="container">
          <h1 className="fw-bold text-success">{t("productsPageTitle")}</h1>
          <p>{t("productsPageSubtitle")}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-white border-end-0">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                id="searchInput"
                className="form-control border-start-0"
                placeholder={t("searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="filter-bar mb-5">
          {filters.map((f) => (
            <button
              key={f.value}
              className={
                "btn btn-outline-success" +
                (activeFilter === f.value ? " active" : "")
              }
              data-filter={f.value}
              onClick={() => handleFilterClick(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="row g-4" id="productGrid">
          {visibleProducts.map(([id, product]) => (
            <ProductCard key={id} id={id} product={product} />
          ))}

          {visibleProducts.length === 0 && (
            <div className="col-12 text-center text-muted py-5">
              {t("noResults")}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
