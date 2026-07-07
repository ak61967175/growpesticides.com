import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function ProductCard({ id, product }) {
  const { t } = useLanguage();

  return (
    <div className="col-md-4 col-sm-6 product-card" data-category={product.category}>
      <div className="card h-100 shadow-sm border-0">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.categoryLabel}
        />
        <div className="card-body">
          <span className="badge bg-success mb-2">{product.categoryLabel}</span>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">{product.subtitle}</p>
          <Link to={`/product/${id}`} className="btn btn-success w-100">
            {t("viewDetails")}
          </Link>
        </div>
      </div>
    </div>
  );
}
