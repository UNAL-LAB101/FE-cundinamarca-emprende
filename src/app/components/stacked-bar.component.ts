import { Component, signal } from '@angular/core';
import { ApexChart, ApexXAxis, ApexYAxis, ApexPlotOptions, ApexLegend } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stacked-bar',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  template: `
    <div class="chart">
      <h3>Comparativo por Pregunta (Ciclos)</h3>
      <apx-chart
        [series]="series()" 
        [chart]="chart"
        [xaxis]="xaxis"
        [yaxis]="yaxis"
        [plotOptions]="plotOptions"
        [legend]="legend"
        type="bar"
        height="450">
      </apx-chart>
    </div>
  `
})
export class StackedBarComponent {
  series = signal([
    { name: 'Ciclo 1', data: [1, 1, 1, 4, 3] },
    { name: 'Ciclo 2', data: [5, 5, 5, 4, 3] },
    { name: 'Ciclo 3', data: [3, 3, 0, 0, 0] }
  ]);

  chart: ApexChart = { type: 'bar', height: 450, stacked: true };

  xaxis: ApexXAxis = {
    categories: ['Necesidad', 'Misión/Visión', 'Producto', 'CANVA', 'DOFA']
  };

  yaxis: ApexYAxis = { title: { text: 'Puntaje (1-5)' } };

  plotOptions: ApexPlotOptions = {
    bar: { horizontal: true }
  };

  legend: ApexLegend = { position: 'top' };
}
