import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";

export default defineConfig({
  //genera un sitio estático
  output: "static",

  // Configuración directa de Vite para que el build escriba en docs/
  // (¡No lo hace!)
  vite: {
    build: {
      outDir: "docs",
    },
    // opcional para publicar en GitHub Pages:
    //site: "https://adn.github.io/astro-taxonomia-md",
    //base: "/astro-taxonomia-md/",
  },

  markdown: {
    remarkPlugins: [remarkGfm],
    syntaxHighlight: 'prism',   // para tener resaltado de código
  },
});
