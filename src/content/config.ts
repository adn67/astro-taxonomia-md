// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const taxonomia = defineCollection({
  schema: z.object({
    // Nombre principal del taxón (debe coincidir con el título en muchos casos)
    name: z.string(),

    // Nivel jerárquico taxonómico
    rank: z.enum(['division', 'orden', 'familia', 'genero', 'especie']),

    // Nombre del taxón padre (referencia al campo `name`, no al slug)
    parent: z.string().optional(),

    // Slug opcional personalizado (en general Astro lo genera automáticamente)
    slug: z.string().optional(),

    // Notas breves opcionales (comentarios adicionales)
    notes: z.string().optional(),

    // Nombre científico completo (por ejemplo, "Pinus sylvestris")
    nombre_cientifico: z.string().optional(),

    // Autor botánico (por ejemplo, "L." o "Mill.")
    autoridad: z.string().optional(),

    // Fecha de creación (puede omitirse si no se usa)
    author: z.string().optional(),
    date: z.date().optional(),
    updated: z.date().optional(),

    // Ruta relativa de imagen ilustrativa (por ejemplo: "/images/pinus-sylvestris.jpg")
    image: z.string().optional(),

    // Descripción detallada en texto plano o Markdown
    description: z.string().optional(),

    // Áreas geográficas o hábitats
    distribution: z.string().optional(),

    // Lista de nombres comunes en distintos idiomas o regiones
    common_names: z.array(z.string()).optional(),

    // Sinónimos u otros nombres locales
    otros_nombres: z.array(z.string()).optional(),

    // Lista de referencias bibliográficas o enlaces externos
    references: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
      })
    ).optional(),
  }),
});

export const collections = {
  taxonomia,
};
