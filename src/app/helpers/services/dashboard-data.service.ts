import { Injectable } from '@angular/core';
import { Emprendimiento } from '../../models/emprendimiento.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  private emprendimientos: Emprendimiento[] = [
    {
      id: 1,
      nombre: 'Tienda Digital Bogotá',
      provincia: 'Cundinamarca',
      municipio: 'Bogotá',
      territorio: 'Sabana Centro',
      fase: 'Preincubación',
      evaluacion: 3,
      sector: 'Comercio',
      nodo: 'Nodo Bogotá',
      tipoNegocio: 'E-commerce',
      actividadEconomica: 'Venta minorista'
    },
    {
      id: 2,
      nombre: 'Taller Mecánico Medellín',
      provincia: 'Antioquia',
      municipio: 'Medellín',
      fase: 'Incubación',
      evaluacion: 4,
      sector: 'Servicios',
      nodo: 'Nodo Medellín',
      tipoNegocio: 'Taller automotriz',
      actividadEconomica: 'Reparación vehicular'
    },
    {
      id: 3,
      nombre: 'Software Factory Cali',
      provincia: 'Valle del Cauca',
      municipio: 'Cali',
      fase: 'Aceleración',
      evaluacion: 5,
      sector: 'Tecnología',
      nodo: 'Nodo Cali',
      tipoNegocio: 'Desarrollo software',
      actividadEconomica: 'Consultoría TI'
    },
    {
      id: 4,
      nombre: 'Café Artesanal Pereira',
      provincia: 'Risaralda',
      municipio: 'Pereira',
      fase: 'Consolidación',
      evaluacion: 4,
      sector: 'Manufactura',
      nodo: 'Nodo Pereira',
      tipoNegocio: 'Café especial',
      actividadEconomica: 'Producción alimenticia'
    },
    {
      id: 5,
      nombre: 'Consultoría Ambiental',
      provincia: 'Cundinamarca',
      municipio: 'Chía',
      territorio: 'Sabana Centro',
      fase: 'Incubación',
      evaluacion: 3,
      sector: 'Servicios',
      nodo: 'Nodo Bogotá',
      tipoNegocio: 'Consultoría',
      actividadEconomica: 'Asesoría ambiental'
    }
  ];

  constructor() { }

  getEmprendimientos(): Emprendimiento[] {
    return this.emprendimientos;
  }

  getEmprendimientosFiltrados(filtros: any): Emprendimiento[] {
    return this.emprendimientos.filter(e => {
      return (!filtros.provincia || e.provincia === filtros.provincia) &&
             (!filtros.fase || e.fase === filtros.fase) &&
             (!filtros.sector || e.sector === filtros.sector);
    });
  }

  getProvincias(): string[] {
    return [...new Set(this.emprendimientos.map(e => e.provincia))];
  }

  getSectores(): string[] {
    return [...new Set(this.emprendimientos.map(e => e.sector))];
  }
}