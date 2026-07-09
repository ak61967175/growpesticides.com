import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products, { localizeProduct } from "../data/products";
import { useLanguage } from "../context/LanguageContext";

export default function ProductDetail() {
  const { id } = useParams();
  const rawProduct = products[id];
  const { t, lang } = useLanguage();
  const product = localizeProduct(rawProduct, lang);
  const [panel, setPanel] = useState(null); // null | "phi" | "usageRate"

  if (!product) {
    return (
      <div className="container my-5">
        <div className="col-12 mb-3">
          <Link to="/products" className="btn btn-outline-secondary">
            <i className="fas fa-arrow-left"></i> {t("backToProducts")}
          </Link>
        </div>
        <h1 className="fw-bold mt-4">{t("productNotFound")}</h1>
        <p className="lead">{t("selectValidProduct")}</p>
      </div>
    );
  }

  const togglePanel = (key) => {
    setPanel((prev) => (prev === key ? null : key));
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Back Button */}
        <div className="col-12 mb-3">
          <Link to="/products" className="btn btn-outline-secondary">
            <i className="fas fa-arrow-left"></i> {t("backToProducts")}
          </Link>
        </div>

        {/* Product Image */}
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid rounded shadow"
            alt={product.title}
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
            href="https://wa.me/+201061967175"
            className="btn btn-success btn-lg w-100"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i> {t("requestQuote")}
          </a>
        </div>
      </div>
    </div>
  );
}
