import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { localizeProduct } from "../data/products";
import { productPath } from "../seo/catalog";
import { imageSize } from "../data/images";

export default function ProductCard({ id, product, eager = false }) {
  const { t, lang, lp } = useLanguage();
  const p = localizeProduct(product, lang);

  if (!p) return null;

  return (
    <div className="col-12 col-sm-6 col-lg-4 product-card" data-category={p.category}>
      <div className="card h-100 shadow-sm border-0">
        <Link to={lp(productPath(id))} className="text-decoration-none" tabIndex={-1}>
          <img
            src={p.image}
            className="card-img-top"
            alt={`${p.title} ${p.subtitle}`}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            {...imageSize(p.image)}
          />
        </Link>
        <div className="card-body">
          <span className="badge bg-success mb-2">{p.categoryLabel}</span>
          <h2 className="card-title h5">{p.title}</h2>
          <p className="card-text text-muted">{p.subtitle}</p>
          <Link to={lp(productPath(id))} className="btn btn-success w-100" title={`${p.title} – ${p.subtitle}`}>
            {t("viewDetails")}
          </Link>
        </div>
      </div>
    </div>
  );
}
