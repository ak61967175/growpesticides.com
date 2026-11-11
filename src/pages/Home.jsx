import { Link } from "react-router-dom";
import products, { featuredIds, localizeProduct } from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../seo/Seo";
import { BRAND } from "../seo/config";
import { organizationSchema, websiteSchema } from "../seo/schema";
import { productPath, categoryPath, ingredientPath } from "../seo/catalog";
import { buildIngredientIndex, isPesticideIngredient } from "../seo/ingredients";
import { imageSize } from "../data/images";

const categoryLinks = [
  {
    key: "catPesticides",
    image: "/assets/cat_pesticides.webp",
    to: categoryPath("pesticides"),
  },
  {
    key: "catFertilizers",
    image: "/assets/cat_fertilizers.webp",
    to: categoryPath("fertilizers"),
  },
  {
    key: "catGrowthRegulators",
    image: "/assets/cat_growth_regulators.webp",
    to: categoryPath("growth-regulators"),
  },
];

export default function Home() {
  const { t, lang, lp } = useLanguage();
  const topIngredients = buildIngredientIndex()
    .list.filter(isPesticideIngredient)
    .sort((a, b) => b.productIds.length - a.productIds.length || a.en.localeCompare(b.en))
    .slice(0, 16);

  const featuredProducts = featuredIds
    .map((id) => ({ id, product: products[id] }))
    .filter((entry) => entry.product);

  // Duplicate the list so the CSS scroll animation can loop seamlessly.
  const carouselItems = [...featuredProducts, ...featuredProducts];

  return (
    <>
      <Seo
        path="/"
        title={
          lang === "ar"
            ? "جرو للاستثمار الزراعي | جرو للمبيدات الزراعية والأسمدة ومنظمات النمو"
            : "GROW for Agricultural Investment | Agricultural Pesticides, Fertilizers & Growth Regulators"
        }
        description={
          lang === "ar"
            ? "جرو للاستثمار الزراعي – مبيدات زراعية حشرية وفطرية وحشائش وأكاروسية، أسمدة وعناصر صغرى ومنظمات نمو. ابحث باسم المنتج أو المادة الفعالة واطلب عرض سعر."
            : "GROW for Agricultural Investment – insecticides, fungicides, herbicides, acaricides, fertilizers and growth regulators. Search by product name or active ingredient and request a quote."
        }
        jsonLd={[organizationSchema(lang), websiteSchema(lang)]}
      />
      {/* Hero Section */}
      <header className="hero-section d-flex align-items-center text-white">
        <div className="hero-particles" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container text-center position-relative">
          <h1 className="display-4 fw-bold mb-3 hero-anim hero-anim-1">
            {t("heroBrand")}
          </h1>
          <h2 className="display-6 fw-semibold mb-4 hero-anim hero-anim-1">{t("heroTitle")}</h2>
          <p className="lead mb-4 hero-anim hero-anim-2">{t("heroSubtitle")}</p>
          <Link
            to={lp("/products")}
            className="btn btn-success btn-lg hero-anim hero-anim-3"
          >
            {t("showAll")} <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </header>

      {/* Category Quick Links Section */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-success">{t("categoriesTitle")}</h2>
            <p className="text-white-50">{t("categoriesSubtitle")}</p>
          </div>
          <div className="row g-4 justify-content-center">
            {categoryLinks.map((cat) => (
              <div className="col-md-4 col-sm-6" key={cat.key}>
                <Link to={lp(cat.to)} className="category-btn d-block position-relative rounded overflow-hidden shadow">
                  <img src={cat.image} alt={t(cat.key)} className="w-100" loading="lazy" decoding="async" {...imageSize(cat.image)} />
                  <span className="category-btn-label">{t(cat.key)}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Carousel Section */}
      <section className="py-5 featured-carousel-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-success">{t("featuredTitle")}</h2>
            <p className="text-muted">{t("featuredSubtitle")}</p>
          </div>
        </div>

        <div className="carousel-viewport">
          <div className="carousel-track">
            {carouselItems.map(({ id, product }, index) => {
              const p = localizeProduct(product, lang);
              return (
                <Link
                  to={lp(productPath(id))}
                  className="carousel-card text-decoration-none"
                  key={`${id}-${index}`}
                >
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={p.image}
                      className="card-img-top"
                      alt={`${p.title} ${p.subtitle}`}
                      loading="lazy"
                      decoding="async"
                      {...imageSize(p.image)}
                    />
                    <div className="card-body">
                      <span className="badge bg-success mb-2">
                        {p.categoryLabel}
                      </span>
                      <h3 className="card-title h5">{p.title}</h3>
                      <p className="card-text text-muted">{p.subtitle}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="text-center mt-5">
            <Link to={lp("/products")} className="btn btn-success btn-lg px-5 show-all-btn">
              {t("showAll")} <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                alt={lang === "ar" ? "مزارع في الحقل – جرو للاستثمار الزراعي" : "Farmer in the field – GROW agricultural investment"}
                className="img-fluid rounded shadow"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h2 className="fw-bold text-success">{t("aboutTitle")}</h2>
              <p className="mt-3">{t("aboutText")}</p>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-circle text-success me-2"></i>{" "}
                  {t("aboutPoint1")}
                </li>
                <li>
                  <i className="fas fa-check-circle text-success me-2"></i>{" "}
                  {t("aboutPoint2")}
                </li>
                <li>
                  <i className="fas fa-check-circle text-success me-2"></i>{" "}
                  {t("aboutPoint3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text + active-ingredient links */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-success">{t("homeSeoTitle")}</h2>
            <p className="mx-auto" style={{ maxWidth: 820 }}>{t("homeSeoP1")}</p>
            <p className="mx-auto" style={{ maxWidth: 820 }}>{t("homeSeoP2")}</p>
          </div>
          <h3 className="h4 fw-bold text-center">{t("popularIngredients")}</h3>
          <p className="text-muted text-center">{t("popularIngredientsSub")}</p>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            {topIngredients.map((ing) => (
              <Link key={ing.slug} to={lp(ingredientPath(ing.slug))} className="btn btn-outline-success btn-sm">
                {lang === "ar" ? ing.ar : ing.en}
              </Link>
            ))}
            <Link to={lp("/active-ingredients")} className="btn btn-success btn-sm">
              {t("allIngredients")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
