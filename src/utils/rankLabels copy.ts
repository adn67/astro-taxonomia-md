/* export const RANK_LABELS: Record<string, string> = {
    reino: "Reino",
    division: "División",
    orden: "Orden",
    familia: "Familia",
    genero: "Género",
    especie: "Especie",
  };
   */

/* export type TaxonRank =
  | "reino"
  | "division"
  | "clase"
  | "orden"
  | "familia"
  | "genero"
  | "especie";

interface RankInfo {
  label: string;
  color?: string;
  icon?: string; // posibilidad: usar nombres de íconos, emojis o rutas SVG
  abbreviation?: string;
}

export const RANK_METADATA: Record<TaxonRank, RankInfo> = {
  reino: {
    label: "Reino",
    color: "#006400", // verde oscuro
    abbreviation: "R.",
  },
  division: {
    label: "División",
    color: "#228B22",
    abbreviation: "Div.",
  },
  clase: {
    label: "Clase",
    color: "#2E8B57",
    abbreviation: "Cl.",
  },
  orden: {
    label: "Orden",
    color: "#4682B4",
    abbreviation: "Ord.",
  },
  familia: {
    label: "Familia",
    color: "#8A2BE2",
    abbreviation: "Fam.",
  },
  genero: {
    label: "Género",
    color: "#DA70D6",
    abbreviation: "G.",
  },
  especie: {
    label: "Especie",
    color: "#A52A2A",
    abbreviation: "E.",
  },
};
 */

/* 


export type TaxonRank =
  | 'division'
  | 'orden'
  | 'familia'
  | 'genero'
  | 'especie';

interface RankMetadata {
  label: string;
  short: string;
  color: string;
}

export const RANK_METADATA: Record<TaxonRank, RankMetadata> = {
  division: { label: 'División', short: 'Div.', color: 'teal' },
  orden:    { label: 'Orden',    short: 'Ord.', color: 'green' },
  familia:  { label: 'Familia',  short: 'Fam.', color: 'blue' },
  genero:   { label: 'Género',   short: 'Gen.', color: 'purple' },
  especie:  { label: 'Especie',  short: 'Esp.', color: 'red' },
};
 */




// src/utils/rankLabels.ts

export type Rank = 'division' | 'orden' | 'familia' | 'genero' | 'especie';

interface RankMetadata {
  label: string;
  short: string;
  color: string;
}

export const RANK_LABELS: Record<Rank, RankMetadata> = {
  division: { label: 'División', short: 'Div.', color: '#38b2ac' }, // teal
  orden:    { label: 'Orden',    short: 'Ord.', color: '#48bb78' }, // green
  familia:  { label: 'Familia',  short: 'Fam.', color: '#4299e1' }, // blue
  genero:   { label: 'Género',   short: 'Gen.', color: '#9f7aea' }, // purple
  especie:  { label: 'Especie',  short: 'Esp.', color: '#f56565' }, // red
};
