import { Link } from "react-router-dom";
import products, { featuredIds, localizeProduct } from "../data/products";
import { useLanguage } from "../context/LanguageContext";

const categoryLinks = [
  {
    key: "catPesticides",
    image: "/assets/cat_pesticides.png",
    to: "/products?category=insecticide",
  },
  {
    key: "catFertilizers",
    image: "/assets/cat_fertilizers.png",
    to: `/products?category=${encodeURIComponent(
      "Nutrients & micronutrients"
    )}`,
  },
  {
    key: "catGrowthRegulators",
    image: "/assets/cat_growth_regulators.png",
    to: "/products?category=growth-regulator",
  },
];

export default function Home() {
  const { t, lang } = useLanguage();

  const featuredProducts = featuredIds
    .map((id) => ({ id, product: products[id] }))
    .filter((entry) => entry.product);

  // Duplicate the list so the CSS scroll animation can loop seamlessly.
  const carouselItems = [...featuredProducts, ...featuredProducts];

  return (
    <>
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
          <h1 className="display-3 fw-bold mb-4 hero-anim hero-anim-1">
            {t("heroTitle")}
          </h1>
          <p className="lead mb-4 hero-anim hero-anim-2">{t("heroSubtitle")}</p>
          <Link
            to="/products"
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
                <Link to={cat.to} className="category-btn d-block position-relative rounded overflow-hidden shadow">
                  <img src={cat.image} alt={t(cat.key)} className="w-100" />
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
                  to={`/product/${id}`}
                  className="carousel-card text-decoration-none"
                  key={`${id}-${index}`}
                >
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={p.image}
                      className="card-img-top"
                      alt={p.categoryLabel}
                    />
                    <div className="card-body">
                      <span className="badge bg-success mb-2">
                        {p.categoryLabel}
                      </span>
                      <h5 className="card-title">{p.title}</h5>
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
            <Link to="/products" className="btn btn-success btn-lg px-5 show-all-btn">
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
                alt="Farmer in field"
                className="img-fluid rounded shadow"
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
    </>
  );
}
