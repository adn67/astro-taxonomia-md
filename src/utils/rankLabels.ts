// src/utils/rankLabels.ts
export type Rank = 'division' | 'orden' | 'familia' | 'genero' | 'especie';

interface RankMetadata {
  label: string;
  short: string;
  plural: string;    // <-- nueva propiedad
  color: string;
}

export const RANK_LABELS: Record<Rank, RankMetadata> = {
  division: {
    label: 'División',
    short: 'Div.',
    plural: 'Divisiones',
    color: '#38b2ac',
  },
  orden: {
    label: 'Orden',
    short: 'Ord.',
    plural: 'Órdenes',
    color: '#48bb78',
  },
  familia: {
    label: 'Familia',
    short: 'Fam.',
    plural: 'Familias',
    color: '#4299e1',
  },
  genero: {
    label: 'Género',
    short: 'Gen.',
    plural: 'Géneros',
    color: '#9f7aea',
  },
  especie: {
    label: 'Especie',
    short: 'Esp.',
    plural: 'Especies',
    color: '#f56565',
  },
};
