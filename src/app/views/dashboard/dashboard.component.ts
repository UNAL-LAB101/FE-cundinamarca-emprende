import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DashboardDataService } from '../../helpers/services/dashboard-data.service';
import { Emprendimiento } from '../../models/emprendimiento.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  emprendimientos: Emprendimiento[] = [
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
  },
  {
    id: 6,
    nombre: 'Panadería El Trigo de Oro',
    provincia: 'Boyacá',
    municipio: 'Tunja',
    fase: 'Preincubación', 
    evaluacion: 2,
    sector: 'Alimentos',
    nodo: 'Nodo Boyacá',
    tipoNegocio: 'Panadería artesanal',
    actividadEconomica: 'Producción alimenticia'
  },
  {
    id: 7,
    nombre: 'Moda Urbana Barranquilla',
    provincia: 'Atlántico',
    municipio: 'Barranquilla',
    fase: 'Incubación', 
    evaluacion: 4,
    sector: 'Textil',
    nodo: 'Nodo Caribe',
    tipoNegocio: 'Confección de ropa',
    actividadEconomica: 'Fabricación de prendas'
  },
  {
    id: 8,
    nombre: 'Agencia Digital Bucaramanga',
    provincia: 'Santander',
    municipio: 'Bucaramanga',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Tecnología',
    nodo: 'Nodo Santander',
    tipoNegocio: 'Marketing digital',
    actividadEconomica: 'Publicidad y medios'
  },
  {
    id: 9,
    nombre: 'Turismo Verde Amazonas',
    provincia: 'Amazonas',
    municipio: 'Leticia',
    fase: 'Consolidación', 
    evaluacion: 3,
    sector: 'Turismo',
    nodo: 'Nodo Amazonía',
    tipoNegocio: 'Ecoturismo',
    actividadEconomica: 'Servicios turísticos'
  },
  {
    id: 10,
    nombre: 'Diseño Interior Popayán',
    provincia: 'Cauca',
    municipio: 'Popayán',
    fase: 'Preincubación', 
    evaluacion: 2,
    sector: 'Servicios',
    nodo: 'Nodo Pacífico',
    tipoNegocio: 'Diseño de espacios',
    actividadEconomica: 'Diseño de interiores'
  },
  {
    id: 11,
    nombre: 'Huerta Urbana Neiva',
    provincia: 'Huila',
    municipio: 'Neiva',
    fase: 'Incubación', 
    evaluacion: 3,
    sector: 'Agroindustria',
    nodo: 'Nodo Sur',
    tipoNegocio: 'Agricultura urbana',
    actividadEconomica: 'Producción agrícola'
  },
  {
    id: 12,
    nombre: 'Artesanías de Nariño',
    provincia: 'Nariño',
    municipio: 'Pasto',
    fase: 'Consolidación', 
    evaluacion: 4,
    sector: 'Artesanías',
    nodo: 'Nodo Nariño',
    tipoNegocio: 'Arte y decoración',
    actividadEconomica: 'Elaboración artesanal'
  },
  {
    id: 13,
    nombre: 'Soluciones Energéticas Tunja',
    provincia: 'Boyacá',
    municipio: 'Tunja',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Energía',
    nodo: 'Nodo Boyacá',
    tipoNegocio: 'Energías renovables',
    actividadEconomica: 'Instalación de paneles solares'
  },
  {
    id: 14,
    nombre: 'Academia de Idiomas Manizales',
    provincia: 'Caldas',
    municipio: 'Manizales',
    fase: 'Incubación', 
    evaluacion: 3,
    sector: 'Educación',
    nodo: 'Nodo Eje Cafetero',
    tipoNegocio: 'Centro educativo',
    actividadEconomica: 'Enseñanza de idiomas'
  },
  {
    id: 15,
    nombre: 'Floristería Virtual Cartagena',
    provincia: 'Bolívar',
    municipio: 'Cartagena',
    fase: 'Preincubación', 
    evaluacion: 2,
    sector: 'Comercio',
    nodo: 'Nodo Caribe',
    tipoNegocio: 'E-commerce floral',
    actividadEconomica: 'Venta online de flores'
  },
  {
    id: 16,
    nombre: 'Tecnología Médica Armenia',
    provincia: 'Quindío',
    municipio: 'Armenia',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Salud',
    nodo: 'Nodo Eje Cafetero',
    tipoNegocio: 'Dispositivos médicos',
    actividadEconomica: 'Fabricación tecnológica'
  },
  {
    id: 17,
    nombre: 'Ropa Infantil Villavicencio',
    provincia: 'Meta',
    municipio: 'Villavicencio',
    fase: 'Incubación', 
    evaluacion: 3,
    sector: 'Textil',
    nodo: 'Nodo Llanos',
    tipoNegocio: 'Tienda de ropa',
    actividadEconomica: 'Venta de prendas infantiles'
  },
  {
    id: 18,
    nombre: 'Creaciones Digitales Ibagué',
    provincia: 'Tolima',
    municipio: 'Ibagué',
    fase: 'Consolidación', 
    evaluacion: 4,
    sector: 'Diseño',
    nodo: 'Nodo Tolima',
    tipoNegocio: 'Diseño gráfico',
    actividadEconomica: 'Servicios creativos'
  },
  {
    id: 19,
    nombre: 'App de Bienestar Pasto',
    provincia: 'Nariño',
    municipio: 'Pasto',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Tecnología',
    nodo: 'Nodo Nariño',
    tipoNegocio: 'Aplicación móvil',
    actividadEconomica: 'Desarrollo de software'
  },
  {
    id: 20,
    nombre: 'Productora Audiovisual Montería',
    provincia: 'Córdoba',
    municipio: 'Montería',
    fase: 'Incubación', 
    evaluacion: 4,
    sector: 'Cultura y entretenimiento',
    nodo: 'Nodo Caribe',
    tipoNegocio: 'Producción de video',
    actividadEconomica: 'Servicios audiovisuales'
  },
  {
    id: 21,
    nombre: 'Tejidos Andinos Bogotá',
    provincia: 'Cundinamarca',
    municipio: 'Bogotá',
    fase: 'Preincubación', 
    evaluacion: 2,
    sector: 'Textil',
    nodo: 'Nodo Bogotá',
    tipoNegocio: 'Artesanías textiles',
    actividadEconomica: 'Tejido manual'
  },
  {
    id: 22,
    nombre: 'Denim Creativo Medellín',
    provincia: 'Antioquia',
    municipio: 'Medellín',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Textil',
    nodo: 'Nodo Medellín',
    tipoNegocio: 'Moda sostenible',
    actividadEconomica: 'Fabricación de jeans'
  },
  {
    id: 23,
    nombre: 'Bordados del Pacífico',
    provincia: 'Valle del Cauca',
    municipio: 'Buenaventura',
    fase: 'Consolidación', 
    evaluacion: 4,
    sector: 'Textil',
    nodo: 'Nodo Pacífico',
    tipoNegocio: 'Artesanías',
    actividadEconomica: 'Bordados tradicionales'
  },
  {
    id: 24,
    nombre: 'Aventuras Sierra Nevada',
    provincia: 'Magdalena',
    municipio: 'Santa Marta',
    fase: 'Incubación', 
    evaluacion: 4,
    sector: 'Turismo',
    nodo: 'Nodo Caribe',
    tipoNegocio: 'Turismo de aventura',
    actividadEconomica: 'Excursiones guiadas'
  },
  {
    id: 25,
    nombre: 'Sabores y Saberes Bogotá',
    provincia: 'Cundinamarca',
    municipio: 'Bogotá',
    fase: 'Preincubación', 
    evaluacion: 3,
    sector: 'Turismo',
    nodo: 'Nodo Bogotá',
    tipoNegocio: 'Turismo gastronómico',
    actividadEconomica: 'Recorridos culturales'
  },
  {
    id: 26,
    nombre: 'EcoAlojamientos Coffee Tour',
    provincia: 'Quindío',
    municipio: 'Salento',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Turismo',
    nodo: 'Nodo Eje Cafetero',
    tipoNegocio: 'Turismo rural',
    actividadEconomica: 'Hospedaje ecológico'
  },
  {
    id: 27,
    nombre: 'Historia Viva Cartagena',
    provincia: 'Bolívar',
    municipio: 'Cartagena',
    fase: 'Consolidación', 
    evaluacion: 4,
    sector: 'Turismo',
    nodo: 'Nodo Caribe',
    tipoNegocio: 'Turismo cultural',
    actividadEconomica: 'Tours históricos'
  },
  {
    id: 28,
    nombre: 'Realidad Virtual Medellín',
    provincia: 'Antioquia',
    municipio: 'Medellín',
    fase: 'Incubación', 
    evaluacion: 4,
    sector: 'Tecnología',
    nodo: 'Nodo Medellín',
    tipoNegocio: 'Tecnología inmersiva',
    actividadEconomica: 'Desarrollo de VR'
  },
  {
    id: 29,
    nombre: 'Blockchain Solutions Bogotá',
    provincia: 'Cundinamarca',
    municipio: 'Bogotá',
    fase: 'Preincubación', 
    evaluacion: 3,
    sector: 'Tecnología',
    nodo: 'Nodo Bogotá',
    tipoNegocio: 'Fintech',
    actividadEconomica: 'Soluciones blockchain'
  },
  {
    id: 30,
    nombre: 'Limpieza Express Pereira',
    provincia: 'Risaralda',
    municipio: 'Pereira',
    fase: 'Consolidación', 
    evaluacion: 4,
    sector: 'Servicios',
    nodo: 'Nodo Pereira',
    tipoNegocio: 'Servicios del hogar',
    actividadEconomica: 'Limpieza profesional'
  },
  {
    id: 31,
    nombre: 'Seguridad Digital Manizales',
    provincia: 'Caldas',
    municipio: 'Manizales',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Servicios',
    nodo: 'Nodo Eje Cafetero',
    tipoNegocio: 'Ciberseguridad',
    actividadEconomica: 'Protección de datos'
  },
  {
    id: 32,
    nombre: 'Bazar Artesanal Tunja',
    provincia: 'Boyacá',
    municipio: 'Tunja',
    fase: 'Incubación', 
    evaluacion: 3,
    sector: 'Comercio',
    nodo: 'Nodo Boyacá',
    tipoNegocio: 'Tienda física',
    actividadEconomica: 'Venta de artesanías'
  },
  {
    id: 33,
    nombre: 'Outlet Deportivo Cali',
    provincia: 'Valle del Cauca',
    municipio: 'Cali',
    fase: 'Consolidación', 
    evaluacion: 4,
    sector: 'Comercio',
    nodo: 'Nodo Cali',
    tipoNegocio: 'Tienda deportiva',
    actividadEconomica: 'Venta de artículos deportivos'
  },
  {
    id: 34,
    nombre: 'Libros Usados Bogotá',
    provincia: 'Cundinamarca',
    municipio: 'Bogotá',
    fase: 'Preincubación', 
    evaluacion: 2,
    sector: 'Comercio',
    nodo: 'Nodo Bogotá',
    tipoNegocio: 'Librería',
    actividadEconomica: 'Venta de libros'
  },
  {
    id: 35,
    nombre: 'Muebles Rústicos Armenia',
    provincia: 'Quindío',
    municipio: 'Armenia',
    fase: 'Incubación', 
    evaluacion: 3,
    sector: 'Manufactura',
    nodo: 'Nodo Eje Cafetero',
    tipoNegocio: 'Carpintería',
    actividadEconomica: 'Fabricación de muebles'
  },
  {
    id: 36,
    nombre: 'Cerámica Artesanal Ráquira',
    provincia: 'Boyacá',
    municipio: 'Ráquira',
    fase: 'Consolidación', 
    evaluacion: 5,
    sector: 'Manufactura',
    nodo: 'Nodo Boyacá',
    tipoNegocio: 'Alfarería',
    actividadEconomica: 'Producción cerámica'
  },
  {
    id: 37,
    nombre: 'Nutrición Inteligente Medellín',
    provincia: 'Antioquia',
    municipio: 'Medellín',
    fase: 'Incubación', 
    evaluacion: 4,
    sector: 'Salud',
    nodo: 'Nodo Medellín',
    tipoNegocio: 'Consultoría nutricional',
    actividadEconomica: 'Asesoría en alimentación'
  },
  {
    id: 38,
    nombre: 'Fisioterapia a Domicilio Bogotá',
    provincia: 'Cundinamarca',
    municipio: 'Bogotá',
    fase: 'Preincubación', 
    evaluacion: 3,
    sector: 'Salud',
    nodo: 'Nodo Bogotá',
    tipoNegocio: 'Servicios de rehabilitación',
    actividadEconomica: 'Terapia física'
  },
  {
    id: 39,
    nombre: 'Programación para Niños Barranquilla',
    provincia: 'Atlántico',
    municipio: 'Barranquilla',
    fase: 'Aceleración', 
    evaluacion: 5,
    sector: 'Educación',
    nodo: 'Nodo Caribe',
    tipoNegocio: 'Educación tecnológica',
    actividadEconomica: 'Cursos de programación'
  },
  {
    id: 40,
    nombre: 'Talleres Creativos Pereira',
    provincia: 'Risaralda',
    municipio: 'Pereira',
    fase: 'Incubación', 
    evaluacion: 4,
    sector: 'Educación',
    nodo: 'Nodo Pereira',
    tipoNegocio: 'Educación artística',
    actividadEconomica: 'Talleres culturales'
  }
]

  emprendimientosFiltrados: Emprendimiento[] = [];
  filtros = {
    provincia: '',
    fase: '',
    sector: ''
  };

  datosPorFase: any[] = [];
  datosPorProvincia: any[] = [];
  datosPorSector: any[] = [];
  datosPorNodo: any[] = [];

  provincias: string[] = [];
  sectores: string[] = [];
  fases = ['Preincubación', 'Incubación', 'Aceleración', 'Consolidación'];

  provinciasLoaded = false;
  sectoresLoaded = false;

  ngOnInit(): void {
    this.emprendimientosFiltrados = [...this.emprendimientos];
    this.actualizarDatosGraficos();
  }

  loadProvincias(): void {
    if (!this.provinciasLoaded) {
      this.provincias = [...new Set(this.emprendimientos.map(e => e.provincia))];
      this.provinciasLoaded = true;
    }
  }

  loadSectores(): void {
    if (!this.sectoresLoaded) {
      this.sectores = [...new Set(this.emprendimientos.map(e => e.sector))];
      this.sectoresLoaded = true;
    }
  }


  trackByProvincia(index: number, provincia: string): string {
    return provincia;
  }

  trackByFase(index: number, fase: string): string {
    return fase;
  }

  trackBySector(index: number, sector: string): string {
    return sector;
  }

  trackByEmprendimiento(index: number, emp: Emprendimiento): number {
    return emp.id;
  }

  aplicarFiltros(): void {
    this.emprendimientosFiltrados = this.emprendimientos.filter(e => {
      return (!this.filtros.provincia || e.provincia === this.filtros.provincia) &&
        (!this.filtros.fase || e.fase === this.filtros.fase) &&
        (!this.filtros.sector || e.sector === this.filtros.sector);
    });
    this.actualizarDatosGraficos();
  }

  chartFase: any = {};
  chartProvincia: any = {};
  chartSector: any = {};

  actualizarDatosGraficos(): void {
    const datosFase = this.agruparPor('fase');
    const datosProvincia = this.agruparPor('provincia');
    const datosSector = this.agruparPor('sector');

    // Gráfico de barras para Fases
    this.chartFase = {
      series: [{
        name: 'Emprendimientos',
        data: datosFase.map(item => item.value)
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      colors: ['#3498db'],
      labels: datosFase.map(item => item.name),
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    this.chartProvincia = {
      series: [{
        data: datosProvincia.map(item => ({
          x: item.name,
          y: item.value
        }))
      }],
      chart: {
        type: 'treemap',
        height: 350
      },
      colors: [
        '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
        '#EC4899', '#14B8A6', '#84CC16', '#F97316', '#64748B'
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        y: {
          formatter: (val: number) => `${val} emprendimientos`
        }
      }
    };

    this.chartSector = {
      series: [{
        name: 'Emprendimientos',
        data: datosSector.map(item => item.value)
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      colors: ['#2ecc71'],
      xaxis: {
        categories: datosSector.map(item => item.name)
      }
    };
  }

  agruparPor(campo: keyof Emprendimiento): any[] {
    const grupos: { [key: string]: number } = {};

    this.emprendimientosFiltrados.forEach(e => {
      const valor: any = e[campo];
      grupos[valor] = (grupos[valor] || 0) + 1;
    });

    return Object.keys(grupos).map(key => ({
      name: key,
      value: grupos[key]
    }));
  }

  calcularPromedioEvaluacion(): number {
    if (this.emprendimientosFiltrados.length === 0) return 0;
    const total = this.emprendimientosFiltrados.reduce((sum, e) => sum + e.evaluacion, 0);
    return total / this.emprendimientosFiltrados.length;
  }

  limpiarFiltros(): void {
    this.filtros = {
      provincia: '',
      fase: '',
      sector: ''
    };
    this.aplicarFiltros();
  }

  onProvinciaChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.filtros.provincia = selectElement.value;
    this.aplicarFiltros();
  }

  onFaseChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.filtros.fase = selectElement.value;
    this.aplicarFiltros();
  }

  onSectorChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.filtros.sector = selectElement.value;
    this.aplicarFiltros();
  }

  opcionesGraficoBarras(datos: any[]): echarts.EChartsOption {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      xAxis: {
        type: 'category',
        data: datos.map(item => item.name)
      },
      yAxis: { type: 'value' },
      series: [{
        data: datos.map(item => item.value),
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          color: '#3498db'
        }
      }]
    };
  }

  opcionesGraficoPastel(datos: any[]): echarts.EChartsOption {
    return {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Distribución',
          type: 'pie',
          radius: '50%',
          data: datos.map(item => ({ value: item.value, name: item.name })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}