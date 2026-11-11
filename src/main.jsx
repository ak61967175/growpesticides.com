import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages are pre-rendered HTML (see scripts/prerender.mjs) → "hydrate" them.
// In `npm run dev` the root is empty → render normally.
if (root.hasChildNodes() && !root.innerHTML.trim().startsWith("<!--")) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
