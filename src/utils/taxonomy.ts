// src/utils/taxonomy.ts

import type { CollectionEntry } from 'astro:content';
import { slugify } from './slugify';
import type { Rank } from './rankLabels';

export type Taxon = CollectionEntry<'taxonomia'>;

// Orden jerárquico de los rangos taxonómicos
export const RANK_ORDER: Rank[] = ['division', 'orden', 'familia', 'genero', 'especie'];

// Dado un rango actual, devuelve el subnivel inmediato inferior (si existe)
export function getNextRank(current: Rank): Rank | undefined {
  const index = RANK_ORDER.indexOf(current);
  return RANK_ORDER[index + 1];
}

// Construye el camino de nodos padres, desde la raíz hasta el nodo actual
export function buildParentChain(entry: Taxon, all: Taxon[]): Taxon[] {
  const chain: Taxon[] = [];
  let parentSlug = entry.data.parent ? slugify(entry.data.parent) : null;

  while (parentSlug) {
    const parent = all.find((t) => slugify(t.data.name) === parentSlug);
    if (!parent) break;
    chain.unshift(parent);
    parentSlug = parent.data.parent ? slugify(parent.data.parent) : null;
  }

  return chain;
}

// Encuentra todos los taxones que tienen como padre al nodo actual
export function findChildrenOf(entry: Taxon, all: Taxon[]): Taxon[] {
  return all.filter(
    (t) => t.data.parent && slugify(t.data.parent) === entry.slug
  );
}
