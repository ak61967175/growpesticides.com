import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { BRAND } from "../seo/config";
import { CATEGORY_ORDER, CATEGORIES, categoryPath } from "../seo/catalog";
import { imageSize } from "../data/images";

export default function Footer() {
  const { t, lp, lang } = useLanguage();

  return (
    <footer className="site-footer text-white pt-5 pb-3">
      <div className="footer-overlay">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img src="/assets/logo.webp" alt={BRAND.full[lang]} height="44" className="mb-3" {...imageSize("/assets/logo.webp")} />
              <p className="small">{t("footerTagline")}</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">{t("quickLinks")}</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to={lp("/")} className="text-white text-decoration-none">
                    {t("navHome")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={lp("/products")}
                    className="text-white text-decoration-none"
                  >
                    {t("navProducts")}
                  </Link>
                </li>
                <li>
                  <Link to={lp("/active-ingredients")} className="text-white text-decoration-none">
                    {t("navIngredients")}
                  </Link>
                </li>
                {CATEGORY_ORDER.map((slug) => (
                  <li key={slug}>
                    <Link to={lp(categoryPath(slug))} className="text-white text-decoration-none">
                      {t(CATEGORIES[slug].filterKey)}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={BRAND.whatsapp} className="text-white text-decoration-none" target="_blank" rel="noreferrer">
                    {t("navContact")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">{t("contactUs")}</h5>
              <ul className="list-unstyled small">
                <li>
                  <i className="fas fa-map-marker-alt me-2"></i> {t("address")}
                </li>
                <li>
                  <i className="fas fa-phone me-2"></i> <a href={`tel:${BRAND.phone}`} className="text-white text-decoration-none" dir="ltr">{BRAND.phone}</a>
                </li>
                <li>
                  <i className="fas fa-envelope me-2"></i> {t("email")}
                </li>
              </ul>
              <div className="mt-3">
                <a
                  href="https://www.facebook.com/share/1ArAxHekfC/?mibextid=wwXIfr"
                  className="text-white me-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="https://www.instagram.com/grow.pesticides?igsh=NWs3bnEwaXYzeGNu"
                  className="text-white me-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-secondary" />
          <div className="text-center small">
            <p className="mb-0">&copy; 2023 {t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
