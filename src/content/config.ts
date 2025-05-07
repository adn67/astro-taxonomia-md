/* 
Este archivo:
· Usa zod para definir el esquema que comparten todos los taxones.
· Crea una colección separada para cada rango taxonómico.
· Le da a Astro/TypeScript la información necesaria para que funciones como getCollection() y getEntry() estén correctamente tipadas.
*/


/* 

1. versión de config.ts para la estructura:

src/
  content/
    orden/
      pinales.md
    familia/
      pinaceae.md
    genero/
      pinus.md
    especie/
      pinus-sylvestris.md
    config.ts


     - - - - - - - 


import { defineCollection, z } from 'astro:content';

const taxonSchema = z.object({
  name: z.string(),
  rank: z.enum(['orden', 'familia', 'genero', 'especie']),
  parent: z.string().optional(),
  notes: z.string().optional(),
});

export const collections = {
  orden: defineCollection({ schema: taxonSchema }),
  familia: defineCollection({ schema: taxonSchema }),
  genero: defineCollection({ schema: taxonSchema }),
  especie: defineCollection({ schema: taxonSchema }),
};
 */


/* 2. versión de config.ts para proyecto con la siguiente estructura: 

src/
  content/
    taxonomia/
      pinaceae.md
      pinales.md
      pinus-sylvestris.md
      pinus.md
     config.ts 

*/


import { defineCollection, z } from 'astro:content';

const taxonomia = defineCollection({
  schema: z.object({
    name: z.string(),  // Nombre principal del taxón
    rank: z.enum(['division', 'orden', 'familia', 'genero', 'especie']),
    parent: z.string().optional(),  // Slug del taxón superior
    notes: z.string().optional(),   // Notas breves o aclaraciones

    // Campos adicionales opcionales y extensibles
    nombre_cientifico: z.string().optional(),  // Nombre científico completo
    autoridad: z.string().optional(),          // Autoridad botánica (por ejemplo: "L." o "Lindl.")
    descripcion: z.string().optional(),        // Descripción general del taxón
    distribucion: z.string().optional(),       // Distribución geográfica
    habitat: z.string().optional(),            // Tipo de hábitat habitual
    usos: z.string().optional(),               // Usos conocidos
    otros_nombres: z.string().optional(),      // Nombres comunes, locales o sinónimos
  }),
});

export const collections = {
  taxonomia,
};
