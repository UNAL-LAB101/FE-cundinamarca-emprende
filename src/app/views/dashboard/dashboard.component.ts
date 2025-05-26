import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../helpers/services/dashboard-data.service';
import { Emprendimiento } from '../../models/emprendimiento.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
    }
  ];

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

  ngOnInit(): void {
    this.emprendimientosFiltrados = [...this.emprendimientos];
    this.provincias = [...new Set(this.emprendimientos.map(e => e.provincia))];
    this.sectores = [...new Set(this.emprendimientos.map(e => e.sector))];
    this.actualizarDatosGraficos();
  }

  aplicarFiltros(): void {
    this.emprendimientosFiltrados = this.emprendimientos.filter(e => {
      return (!this.filtros.provincia || e.provincia === this.filtros.provincia) &&
             (!this.filtros.fase || e.fase === this.filtros.fase) &&
             (!this.filtros.sector || e.sector === this.filtros.sector);
    });
    this.actualizarDatosGraficos();
  }

  actualizarDatosGraficos(): void {
    this.datosPorFase = this.agruparPor('fase');
    this.datosPorProvincia = this.agruparPor('provincia');
    this.datosPorSector = this.agruparPor('sector');
    this.datosPorNodo = this.agruparPor('nodo');
  }

  agruparPor(campo: keyof Emprendimiento): any[] {
    const grupos: {[key: string]: number} = {};
    
    this.emprendimientosFiltrados.forEach(e => {
      const valor:any = e[campo];
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