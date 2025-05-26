export interface Emprendimiento {
  id: number;
  nombre: string;
  provincia: string;
  municipio: string;
  territorio?: string;
  fase: 'Preincubación' | 'Incubación' | 'Aceleración' | 'Consolidación';
  evaluacion: number;
  sector: string;
  nodo: string;
  tipoNegocio?: string;
  actividadEconomica?: string;
}