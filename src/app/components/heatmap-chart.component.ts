import { Component, signal } from '@angular/core';
import { ApexChart, ApexPlotOptions, ApexXAxis, ApexFill, ApexLegend } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heatmap-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  template: `
    <div class="chart">
      <h3>Evaluación por Competencia</h3>
      <apx-chart
        [series]="series()"
        [chart]="chart"
        [plotOptions]="plotOptions"
        [xaxis]="xaxis"
        [fill]="fill"
        [legend]="legend"
        type="heatmap"
        height="450">
      </apx-chart>
    </div>
  `
})
export class HeatmapChartComponent {
  series = signal([
    {
      name: 'Ciclo 1',
      data: [
        { x: 'Estructura', y: 1 },
        { x: 'Producto', y: 1 },
        { x: 'DOFA', y: 3 }
      ]
    },
    {
      name: 'Ciclo 2',
      data: [
        { x: 'Producto', y: 5 },
        { x: 'Formalización', y: 4 },
        { x: 'Mercado', y: 3 }
      ]
    },
    {
      name: 'Ciclo 3',
      data: [
        { x: 'Operación', y: 3 },
        { x: 'Ventas', y: 0 }
      ]
    }
  ]);

  chart: ApexChart = { type: 'heatmap', height: 450 };

  plotOptions: ApexPlotOptions = {
    heatmap: {
      shadeIntensity: 0.5,
      colorScale: {
        ranges: [
          { from: 0, to: 0, color: '#ccc', name: 'No evaluado' },
          { from: 1, to: 2, color: '#f44336', name: 'Bajo' },
          { from: 3, to: 3, color: '#ff9800', name: 'Medio' },
          { from: 4, to: 5, color: '#4caf50', name: 'Alto' }
        ]
      }
    }
  };

  xaxis: ApexXAxis = { type: 'category' };
  fill: ApexFill = { type: 'solid' };
  legend: ApexLegend = { show: true, position: 'top' };
}
