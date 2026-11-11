import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = process.env.SITE_URL || env.SITE_URL || env.VITE_SITE_URL || "";
  return {
    plugins: [react()],
    define: { __SITE_URL__: JSON.stringify(siteUrl) },
  };
});
