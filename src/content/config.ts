/* 
Este archivo:
· Usa zod para definir el esquema que comparten todos los taxones.
· Crea una colección separada para cada rango taxonómico.
· Le da a Astro/TypeScript la información necesaria para que funciones como getCollection() y getEntry() estén correctamente tipadas.
*/


/* 

versión de config.ts para la estructura:

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


/* versión de config.ts para proyecto con la siguiente estructura: 

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
    name: z.string(),
    rank: z.enum(['orden', 'familia', 'genero', 'especie']),
    parent: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = {
  taxonomia,
};


