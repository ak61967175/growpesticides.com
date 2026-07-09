import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router does NOT reset scroll position on navigation by default
// (unlike a traditional multi-page site). Without this, moving from a
// long page (e.g. Products) to another page keeps the old scroll offset,
// so the new page appears to open "from the middle" instead of the top.
// This component listens for route changes and scrolls back to the top
// every time the pathname changes.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
