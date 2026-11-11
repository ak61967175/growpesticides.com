import { Routes, Route, Outlet, Navigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import IngredientsIndex from "./pages/IngredientsIndex";
import IngredientPage from "./pages/IngredientPage";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./context/LanguageContext";
import { LANGS, DEFAULT_LANG } from "./seo/config";
import { LEGACY_CATEGORY, productPath } from "./seo/catalog";
import products from "./data/products";

function LangLayout() {
  const { lang } = useParams();
  if (!LANGS.includes(lang)) return <NotFound lang={DEFAULT_LANG} />;
  return (
    <LanguageProvider lang={lang}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

function preferredLang() {
  try {
    const saved = localStorage.getItem("grow_lang");
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG;
}

// "/" -> "/ar" (or the visitor's last chosen language). Only used in dev / client side;
// the production build ships a static redirect page for "/".
function RootRedirect() {
  return <Navigate to={`/${preferredLang()}`} replace />;
}

// Old URLs (/products?category=insecticide, /product/5) keep working.
function LegacyProducts() {
  const [params] = useSearchParams();
  const cat = LEGACY_CATEGORY[params.get("category")];
  return <Navigate to={`/${preferredLang()}/products${cat ? `/${cat}` : ""}`} replace />;
}
function LegacyProduct() {
  const { id } = useParams();
  return <Navigate to={products[id] ? `/${preferredLang()}${productPath(id)}` : `/${preferredLang()}/products`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/products" element={<LegacyProducts />} />
      <Route path="/product/:id" element={<LegacyProduct />} />
      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:cat" element={<Products />} />
        <Route path="product/:slug" element={<ProductDetail />} />
        <Route path="active-ingredients" element={<IngredientsIndex />} />
        <Route path="active-ingredient/:slug" element={<IngredientPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
