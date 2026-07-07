import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer text-white pt-5 pb-3">
      <div className="footer-overlay">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img src="/assets/logo.png" alt="GROW" height="44" className="mb-3" />
              <p className="small">{t("footerTagline")}</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">{t("quickLinks")}</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    {t("navHome")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-white text-decoration-none"
                  >
                    {t("navProducts")}
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    {t("aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
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
                  <i className="fas fa-phone me-2"></i> +201061967175
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
