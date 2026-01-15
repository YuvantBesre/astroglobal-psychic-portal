import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { readFileSync, writeFileSync } from "fs";

// Plugin to create 404.html for GitHub Pages SPA routing
const githubPages404Plugin = () => ({
  name: "github-pages-404",
  closeBundle() {
    // Copy index.html to 404.html for GitHub Pages SPA support
    const indexHtml = readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8");
    writeFileSync(path.resolve(__dirname, "dist/404.html"), indexHtml);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && githubPages404Plugin(),
  ].filter(Boolean),
  // Base path for custom domain (root domain = "/")
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
