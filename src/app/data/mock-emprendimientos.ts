import { Emprendimiento } from '../../models/emprendimiento.model';

export const MOCK_EMPRENDIMIENTOS: Emprendimiento[] = [
  {
    id: 'E001',
    nombreEmpresa: 'Frutas del Campo',
    nombrePersonaNatural: 'Ana Pérez',
    municipio: 'Facatativá',
    fechaEncuentro: '2024-01-10',
    tipoEmprendimiento: 'S.A.S',
    correo: 'ana@email.com',
    direccion: 'Calle 10 #5-20',
    contacto: '3114567890',
    sexo: 'Mujer',
    responsableFortalecimiento: 'Carlos Ríos',
    sectorEconomico: 'Agroindustrial',
    actividadEconomica: 'Transformación',
    numeroAfiliados: 10,
    enfoquePoblacional: ['Afro'],
    infraestructura: {
      tipo: 'Arrendada',
      area: 50
    },
    aliados: {
      publicos: ['SENA'],
      privados: ['Mercados Locales'],
      mixtos: []
    },
    capitalTrabajo: 5000000,
    pasivo: 2000000,
    tieneCreditos: true,
    contexto: 'Desea generar ingresos para su familia',
    perteneceGrupoPoblacional: true,
    tiempoSemanal: 20,
    region: 'Sabana Occidente',
    etapa: 'Ciclo 1',
    puntuacionCiclo1: [1, 1, 1, 1, 4, 3],
    puntuacionCiclo2: [],
    puntuacionCiclo3: [],
    actividades: [
      { nombre: 'Misión y visión', inicio: '2024-01-15', fin: '2024-01-30', estado: 'Completado' },
      { nombre: 'DOFA', inicio: '2024-02-01', fin: '2024-02-15', estado: 'Pendiente' }
    ]
  },
  // Agrega más objetos...
];
