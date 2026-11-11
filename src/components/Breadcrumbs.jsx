import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// Visible breadcrumb trail (the matching JSON-LD is added by each page).
export default function Breadcrumbs({ items }) {
  const { lp, t } = useLanguage();
  return (
    <nav aria-label={t("breadcrumbLabel")} className="mb-3">
      <ol className="breadcrumb mb-0 small">
        {items.map((it, i) => (
          <li key={i} className={"breadcrumb-item" + (i === items.length - 1 ? " active" : "")} aria-current={i === items.length - 1 ? "page" : undefined}>
            {i === items.length - 1 ? it.name : <Link to={lp(it.path)}>{it.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
