import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  // si eliges servir desde docs/:
  build: {
    dist: "docs",
  },
  // opcional:
  site: "https://adn.github.io/astro-taxonomia-md",
});
