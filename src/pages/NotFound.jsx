import { Link } from "react-router-dom";
import Seo from "../seo/Seo";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function Inner() {
  const { lang, t, lp } = useLanguage();
  return (
    <div className="container my-5 text-center">
      <Seo
        lang={lang}
        title={lang === "ar" ? "الصفحة غير موجودة | جرو" : "Page not found | GROW"}
        description={lang === "ar" ? "الصفحة المطلوبة غير موجودة." : "The page you requested does not exist."}
        noindex
      />
      <h1 className="fw-bold">404</h1>
      <p>{lang === "ar" ? "الصفحة غير موجودة." : "Page not found."}</p>
      <Link to={lp("/")} className="btn btn-success">
        {t("navHome")}
      </Link>
    </div>
  );
}

// Works both inside the language layout and standalone (invalid /xx/ prefix).
export default function NotFound({ lang }) {
  if (lang) {
    return (
      <LanguageProvider lang={lang}>
        <Inner />
      </LanguageProvider>
    );
  }
  return <Inner />;
}
