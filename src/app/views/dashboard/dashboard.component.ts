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
    nombre: 'Sabores Ancestrales Online',
    provincia: 'Sabana Centro',
    municipio: 'Zipaquirá',
    territorio: 'Sabana Centro',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Alimentos',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Venta de alimentos procesados'
  },
  {
    id: 2,
    nombre: 'Moda Viva Digital',
    provincia: 'Sabana Occidente',
    municipio: 'Facatativá',
    territorio: 'Sabana Occidente',
    fase: 'Aceleración',
    evaluacion: 3,
    sector: 'Textil y confección',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Tienda virtual',
    actividadEconomica: 'Venta de ropa y accesorios'
  },
  {
    id: 3,
    nombre: 'TechCampus Virtual',
    provincia: 'Alto Magdalena',
    municipio: 'Girardot',
    territorio: 'Alto Magdalena',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Educación',
    nodo: 'Nodo Alto Magdalena',
    tipoNegocio: 'Plataforma educativa',
    actividadEconomica: 'Servicios de capacitación en línea'
  },
  {
    id: 4,
    nombre: 'Artesanías del Sol',
    provincia: 'Tequendama',
    municipio: 'La Mesa',
    territorio: 'Tequendama',
    fase: 'Incubación',
    evaluacion: 2,
    sector: 'Artesanías',
    nodo: 'Nodo Tequendama',
    tipoNegocio: 'Marketplace',
    actividadEconomica: 'Comercio de productos artesanales'
  },
  {
    id: 5,
    nombre: 'AgroEmprende Web',
    provincia: 'Sumapaz',
    municipio: 'Fusagasugá',
    territorio: 'Sumapaz',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Agroindustria',
    nodo: 'Nodo Sumapaz',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Comercialización de productos agrícolas'
  },
  {
    id: 6,
    nombre: 'TurisApp Anapoima',
    provincia: 'Tequendama',
    municipio: 'Anapoima',
    territorio: 'Tequendama',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Turismo',
    nodo: 'Nodo Tequendama',
    tipoNegocio: 'Aplicación móvil',
    actividadEconomica: 'Promoción de destinos turísticos'
  },
  {
    id: 7,
    nombre: 'LegalTech Ricaurte',
    provincia: 'Alto Magdalena',
    municipio: 'Ricaurte',
    territorio: 'Alto Magdalena',
    fase: 'Aceleración',
    evaluacion: 3,
    sector: 'Servicios',
    nodo: 'Nodo Alto Magdalena',
    tipoNegocio: 'Web App',
    actividadEconomica: 'Asesoría legal digital'
  },
  {
    id: 8,
    nombre: 'EcoFerias Digitales',
    provincia: 'Sabana Centro',
    municipio: 'Sopó',
    territorio: 'Sabana Centro',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Ambiente y sostenibilidad',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Marketplace',
    actividadEconomica: 'Promoción de productos ecológicos'
  },
  {
    id: 9,
    nombre: 'Café Cloud',
    provincia: 'Sumapaz',
    municipio: 'Pasca',
    territorio: 'Sumapaz',
    fase: 'Aceleración',
    evaluacion: 4,
    sector: 'Alimentos',
    nodo: 'Nodo Sumapaz',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Exportación de café artesanal'
  },
  {
    id: 10,
    nombre: 'Aprende Música Ya',
    provincia: 'Sabana Occidente',
    municipio: 'Mosquera',
    territorio: 'Sabana Occidente',
    fase: 'Incubación',
    evaluacion: 5,
    sector: 'Educación y cultura',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Academia online',
    actividadEconomica: 'Clases de música virtuales'
  },
  {
    id: 11,
    nombre: 'Salud en Línea',
    provincia: 'Oriente',
    municipio: 'Choachí',
    territorio: 'Oriente',
    fase: 'Incubación',
    evaluacion: 4,
    sector: 'Salud',
    nodo: 'Nodo Oriente',
    tipoNegocio: 'Plataforma de telemedicina',
    actividadEconomica: 'Consultas médicas virtuales'
  },
  {
    id: 12,
    nombre: 'EcoConstruye',
    provincia: 'Guavio',
    municipio: 'Guatavita',
    territorio: 'Guavio',
    fase: 'Preincubación',
    evaluacion: 3,
    sector: 'Construcción sostenible',
    nodo: 'Nodo Guavio',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Venta de materiales ecológicos'
  },
  {
    id: 13,
    nombre: 'Rutas y Sabores',
    provincia: 'Gualivá',
    municipio: 'Villeta',
    territorio: 'Gualivá',
    fase: 'Incubación',
    evaluacion: 5,
    sector: 'Turismo y gastronomía',
    nodo: 'Nodo Gualivá',
    tipoNegocio: 'Aplicación móvil',
    actividadEconomica: 'Promoción de rutas turísticas y culinarias'
  },
  {
    id: 14,
    nombre: 'AgroTech Solutions',
    provincia: 'Ubaté',
    municipio: 'Ubaté',
    territorio: 'Ubaté',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Agrotecnología',
    nodo: 'Nodo Ubaté',
    tipoNegocio: 'Plataforma web',
    actividadEconomica: 'Servicios tecnológicos para el agro'
  },
  {
    id: 15,
    nombre: 'Artesanía Viva',
    provincia: 'Tequendama',
    municipio: 'Cachipay',
    territorio: 'Tequendama',
    fase: 'Incubación',
    evaluacion: 3,
    sector: 'Artesanías',
    nodo: 'Nodo Tequendama',
    tipoNegocio: 'Marketplace',
    actividadEconomica: 'Comercialización de artesanías locales'
  },
  {
    id: 16,
    nombre: 'EducaRural',
    provincia: 'Sumapaz',
    municipio: 'Silvania',
    territorio: 'Sumapaz',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Educación',
    nodo: 'Nodo Sumapaz',
    tipoNegocio: 'Plataforma educativa',
    actividadEconomica: 'Educación virtual para zonas rurales'
  },
  {
    id: 17,
    nombre: 'Moda Sostenible',
    provincia: 'Sabana Centro',
    municipio: 'Chía',
    territorio: 'Sabana Centro',
    fase: 'Incubación',
    evaluacion: 4,
    sector: 'Textil y confección',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Tienda virtual',
    actividadEconomica: 'Venta de ropa ecológica'
  },
  {
    id: 18,
    nombre: 'TechKids',
    provincia: 'Sabana Occidente',
    municipio: 'Funza',
    territorio: 'Sabana Occidente',
    fase: 'Preincubación',
    evaluacion: 3,
    sector: 'Educación',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Plataforma educativa',
    actividadEconomica: 'Cursos de tecnología para niños'
  },
  {
    id: 19,
    nombre: 'AgroMarket',
    provincia: 'Almeidas',
    municipio: 'Chocontá',
    territorio: 'Almeidas',
    fase: 'Aceleración',
    evaluacion: 4,
    sector: 'Agroindustria',
    nodo: 'Nodo Almeidas',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Venta de productos agrícolas'
  },
  {
    id: 20,
    nombre: 'Salud Natural',
    provincia: 'Oriente',
    municipio: 'Fómeque',
    territorio: 'Oriente',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Salud',
    nodo: 'Nodo Oriente',
    tipoNegocio: 'Tienda virtual',
    actividadEconomica: 'Venta de productos naturales'
  },
  {
    id: 21,
    nombre: 'Turismo Cultural',
    provincia: 'Rionegro',
    municipio: 'Pacho',
    territorio: 'Rionegro',
    fase: 'Incubación',
    evaluacion: 3,
    sector: 'Turismo',
    nodo: 'Nodo Rionegro',
    tipoNegocio: 'Aplicación móvil',
    actividadEconomica: 'Promoción de eventos culturales'
  },
  {
    id: 22,
    nombre: 'EcoModa',
    provincia: 'Guavio',
    municipio: 'La Calera',
    territorio: 'Guavio',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Textil y confección',
    nodo: 'Nodo Guavio',
    tipoNegocio: 'Tienda virtual',
    actividadEconomica: 'Venta de moda sostenible'
  },
  {
    id: 23,
    nombre: 'Cosecha Viva',
    provincia: 'Gualivá',
    municipio: 'Supatá',
    territorio: 'Gualivá',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Agroindustria',
    nodo: 'Nodo Gualivá',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Venta de productos orgánicos'
  },
  {
    id: 24,
    nombre: 'Turismo a un Clic',
    provincia: 'Oriente',
    municipio: 'Fómeque',
    territorio: 'Oriente',
    fase: 'Incubación',
    evaluacion: 3,
    sector: 'Turismo',
    nodo: 'Nodo Oriente',
    tipoNegocio: 'Agencia virtual',
    actividadEconomica: 'Servicios turísticos en línea'
  },
  {
    id: 25,
    nombre: 'Textiles Cundinámarca',
    provincia: 'Sabana Occidente',
    municipio: 'Madrid',
    territorio: 'Sabana Occidente',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Textil y confección',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Tienda virtual',
    actividadEconomica: 'Fabricación y venta de textiles'
  },
  {
    id: 26,
    nombre: 'Aula Verde',
    provincia: 'Guavio',
    municipio: 'Gachetá',
    territorio: 'Guavio',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Educación ambiental',
    nodo: 'Nodo Guavio',
    tipoNegocio: 'Plataforma educativa',
    actividadEconomica: 'Cursos y talleres virtuales'
  },
  {
    id: 27,
    nombre: 'Mercado Campesino Virtual',
    provincia: 'Sumapaz',
    municipio: 'Arbeláez',
    territorio: 'Sumapaz',
    fase: 'Incubación',
    evaluacion: 3,
    sector: 'Agroindustria',
    nodo: 'Nodo Sumapaz',
    tipoNegocio: 'Marketplace',
    actividadEconomica: 'Venta de productos del campo'
  },
  {
    id: 28,
    nombre: 'Mascota Sana',
    provincia: 'Sabana Centro',
    municipio: 'Tocancipá',
    territorio: 'Sabana Centro',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Servicios veterinarios',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Productos y servicios para mascotas'
  },
  {
    id: 29,
    nombre: 'Café de Altura Digital',
    provincia: 'Ubaté',
    municipio: 'Tausa',
    territorio: 'Ubaté',
    fase: 'Incubación',
    evaluacion: 4,
    sector: 'Agroindustria',
    nodo: 'Nodo Ubaté',
    tipoNegocio: 'Tienda online',
    actividadEconomica: 'Venta de café especial'
  },
  {
    id: 30,
    nombre: 'Manos Creativas',
    provincia: 'Almeidas',
    municipio: 'Chocontá',
    territorio: 'Almeidas',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Artesanías',
    nodo: 'Nodo Almeidas',
    tipoNegocio: 'Marketplace',
    actividadEconomica: 'Venta de manualidades personalizadas'
  },
  {
    id: 31,
    nombre: 'EcoBebé',
    provincia: 'Tequendama',
    municipio: 'Tena',
    territorio: 'Tequendama',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Infantil',
    nodo: 'Nodo Tequendama',
    tipoNegocio: 'E-commerce',
    actividadEconomica: 'Venta de productos ecológicos para bebés'
  },
  {
    id: 32,
    nombre: 'Ruta Verde Delivery',
    provincia: 'Sabana Centro',
    municipio: 'Tabio',
    territorio: 'Sabana Centro',
    fase: 'Incubación',
    evaluacion: 3,
    sector: 'Logística',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Servicio a domicilio',
    actividadEconomica: 'Reparto ecológico de productos'
  },
  {
    id: 33,
    nombre: 'Jardín en Casa',
    provincia: 'Guavio',
    municipio: 'Gachetá',
    territorio: 'Guavio',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Viveros y jardinería',
    nodo: 'Nodo Guavio',
    tipoNegocio: 'Tienda virtual',
    actividadEconomica: 'Venta de plantas y servicios de jardinería'
  },
  {
    id: 34,
    nombre: 'NutriVida Digital',
    provincia: 'Sabana Occidente',
    municipio: 'Funza',
    territorio: 'Sabana Occidente',
    fase: 'Incubación',
    evaluacion: 4,
    sector: 'Salud y nutrición',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Asesoría online',
    actividadEconomica: 'Consultorías nutricionales virtuales'
  },
  {
    id: 35,
    nombre: 'Hecho en Cundinamarca',
    provincia: 'Alto Magdalena',
    municipio: 'Nilo',
    territorio: 'Alto Magdalena',
    fase: 'Preincubación',
    evaluacion: 3,
    sector: 'Artesanías y agroindustria',
    nodo: 'Nodo Alto Magdalena',
    tipoNegocio: 'Marketplace',
    actividadEconomica: 'Promoción de productos locales'
  },
  {
    id: 36,
    nombre: 'BioTech Kids',
    provincia: 'Oriente',
    municipio: 'Choachí',
    territorio: 'Oriente',
    fase: 'Preincubación',
    evaluacion: 5,
    sector: 'Educación y ciencia',
    nodo: 'Nodo Oriente',
    tipoNegocio: 'Plataforma educativa',
    actividadEconomica: 'Talleres STEM para niños'
  },
  {
    id: 37,
    nombre: 'Sabores del Tequendama',
    provincia: 'Tequendama',
    municipio: 'San Antonio del Tequendama',
    territorio: 'Tequendama',
    fase: 'Incubación',
    evaluacion: 4,
    sector: 'Gastronomía',
    nodo: 'Nodo Tequendama',
    tipoNegocio: 'Tienda virtual',
    actividadEconomica: 'Gastronomía típica digitalizada'
  },
  {
    id: 38,
    nombre: 'Arte Digital Rural',
    provincia: 'Sumapaz',
    municipio: 'Pandi',
    territorio: 'Sumapaz',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Cultura y arte',
    nodo: 'Nodo Sumapaz',
    tipoNegocio: 'Galería virtual',
    actividadEconomica: 'Venta de arte local'
  },
  {
    id: 39,
    nombre: 'Aprende y Progresa',
    provincia: 'Sabana Centro',
    municipio: 'Tenjo',
    territorio: 'Sabana Centro',
    fase: 'Incubación',
    evaluacion: 5,
    sector: 'Educación',
    nodo: 'Nodo Sabana',
    tipoNegocio: 'Academia online',
    actividadEconomica: 'Educación digital complementaria'
  },
  {
    id: 40,
    nombre: 'Cultura en Línea',
    provincia: 'Gualivá',
    municipio: 'La Vega',
    territorio: 'Gualivá',
    fase: 'Preincubación',
    evaluacion: 4,
    sector: 'Cultura y turismo',
    nodo: 'Nodo Gualivá',
    tipoNegocio: 'Plataforma cultural',
    actividadEconomica: 'Promoción de eventos y tradiciones locales'
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

aplicarFiltros() {
  this.emprendimientosFiltrados = this.emprendimientos.filter(emp => {
    const coincideProvincia = !this.filtros.provincia || emp.provincia === this.filtros.provincia;
    const coincideFase = !this.filtros.fase || emp.fase === this.filtros.fase;
    const coincideSector = !this.filtros.sector || emp.sector === this.filtros.sector;
    return coincideProvincia && coincideFase && coincideSector;
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