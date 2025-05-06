import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  //genera un sitio estático
  output: "static",

// Para GH Pages, base = nombre del repo. Para Netlify (u otro), base = '/'
base: isGitHubPages ? '/astro-taxonomia-md/' : '/',
vite: {
  build: {
    outDir: 'docs',   // si usas docs/ para GH Pages
  },
},
// Site no es estrictamente necesario, pero puedes definirlo:
site: isGitHubPages
  ? 'https://adn67.github.io/astro-taxonomia-md/'
  : undefined,


  markdown: {
    remarkPlugins: [remarkGfm],
    syntaxHighlight: 'prism',   // para tener resaltado de código
  },
});
