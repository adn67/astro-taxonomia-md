// src/utils/slugify.ts
export function slugify(text: string): string {
  return text
    .normalize("NFD") // elimina acentos
    .replace(/[\u0300-\u036f]/g, "") // remueve caracteres diacríticos
    .toLowerCase()
    .replace(/\s+/g, "-") // reemplaza espacios por guiones
    .replace(/[^\w\-]+/g, "") // elimina caracteres no válidos
    .replace(/\-\-+/g, "-") // colapsa múltiples guiones
    .replace(/^-+/, "") // elimina guiones al principio
    .replace(/-+$/, ""); // elimina guiones al final
}

  /*
  Esta función slugify.ts convierte un nombre (como Pinus sylvestris) en una versión web-amigable o slug, que se usa en las URL para evitar espacios o mayúsculas. Por ejemplo:
  
  
    slugify("Pinus sylvestris") ->   // Devuelve: "pinus-sylvestris"
  
  
  En el árbol, cada nodo genera un enlace con slugify(nombre).
  
  Cuando se visita una página como /especie/pinus-sylvestris, Astro usa ese slug para buscar el nodo correspondiente en el JSON o en la colección de .md.
  
    */