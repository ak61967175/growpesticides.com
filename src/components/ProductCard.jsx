import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { localizeProduct } from "../data/products";

export default function ProductCard({ id, product }) {
  const { t, lang } = useLanguage();
  const p = localizeProduct(product, lang);

  if (!p) return null;

  return (
    <div className="col-md-4 col-sm-6 product-card" data-category={p.category}>
      <div className="card h-100 shadow-sm border-0">
        <img src={p.image} className="card-img-top" alt={p.categoryLabel} />
        <div className="card-body">
          <span className="badge bg-success mb-2">{p.categoryLabel}</span>
          <h5 className="card-title">{p.title}</h5>
          <p className="card-text text-muted">{p.subtitle}</p>
          <Link to={`/product/${id}`} className="btn btn-success w-100">
            {t("viewDetails")}
          </Link>
        </div>
      </div>
    </div>
  );
}
