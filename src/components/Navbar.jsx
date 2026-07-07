import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, toggleLang } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <img src="/assets/logo.png" alt="GROW" height="36" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/"
                end
              >
                {t("navHome")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/products"
              >
                {t("navProducts")}
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://wa.me/+201061967175"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i> {t("navContact")}
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-success btn-sm ms-lg-3 mt-2 mt-lg-0"
                onClick={toggleLang}
              >
                <i className="fas fa-globe me-1"></i>
                {t("langToggle")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
