import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import translations from "../data/translations";

const LanguageContext = createContext(null);

// The language now lives in the URL (/ar/... or /en/...), so every language has its
// own crawlable address and Google can index both (with hreflang links between them).
export function LanguageProvider({ lang, children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("grow_lang", lang);
    } catch {
      /* ignore storage errors */
    }
  }, [lang]);

  const toggleLang = () => {
    const next = lang === "ar" ? "en" : "ar";
    navigate(location.pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${next}`) + location.search + location.hash);
  };

  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;
  // lp("/products") -> "/ar/products"
  const lp = (path = "/") => `/${lang}${path === "/" ? "" : path}`;

  return <LanguageContext.Provider value={{ lang, toggleLang, t, lp }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
