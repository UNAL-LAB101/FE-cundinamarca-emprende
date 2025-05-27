import { Component, signal } from '@angular/core';
import { ApexChart, ApexPlotOptions, ApexXAxis, ApexYAxis, ApexLegend, ApexFill } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level-status-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  template: `
    <div class="chart">
      <h3>Actividades por Nivel</h3>
      <apx-chart
        [series]="series()"
        [chart]="chart"
        [plotOptions]="plotOptions"
        [xaxis]="xaxis"
        [yaxis]="yaxis"
        [fill]="fill"
        [legend]="legend"
        type="bar"
        height="400">
      </apx-chart>
    </div>
  `
})
export class LevelStatusChartComponent {
  series = signal([
    { name: 'Bajo', data: [5, 2, 4] },
    { name: 'Medio', data: [0, 3, 2] },
    { name: 'Alto', data: [0, 2, 1] }
  ]);

  chart: ApexChart = { type: 'bar', height: 400, stacked: true };
  plotOptions: ApexPlotOptions = { bar: { horizontal: false } };
  xaxis: ApexXAxis = { categories: ['Ciclo 1', 'Ciclo 2', 'Ciclo 3'] };
  yaxis: ApexYAxis = { title: { text: 'Cantidad de Actividades' } };
  fill: ApexFill = { opacity: 1 };
  legend: ApexLegend = { position: 'top' };
}
