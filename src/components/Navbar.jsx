import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { BRAND } from "../seo/config";
import { imageSize } from "../data/images";

export default function Navbar() {
  const { t, lang, toggleLang, lp } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold d-flex align-items-center gap-2" to={lp("/")} aria-label={BRAND.full[lang]}>
          <img src="/assets/logo.webp" alt={BRAND.full[lang]} height="36" {...imageSize("/assets/logo.webp")} />
        </NavLink>

        {/* Always-visible controls: language switch + hamburger. */}
        <div className="d-flex align-items-center order-lg-2">
          <button type="button" className="btn btn-outline-success btn-sm lang-switch-btn" onClick={toggleLang}>
            <i className="fas fa-globe me-1"></i>
            {t("langToggle")}
          </button>
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to={lp("/")} end>
                {t("navHome")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to={lp("/products")}>
                {t("navProducts")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to={lp("/active-ingredients")}>
                {t("navIngredients")}
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={BRAND.whatsapp} target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i> {t("navContact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
