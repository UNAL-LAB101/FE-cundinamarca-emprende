import { Component, signal } from '@angular/core';
import { ApexChart, ApexPlotOptions, ApexFill, ApexStroke, ApexResponsive } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radial-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  template: `
    <div class="chart">
      <h3>Avance por Ciclo</h3>
      <apx-chart
        [series]="series()" 
        [chart]="chart" 
        [labels]="labels()" 
        [plotOptions]="plotOptions" 
        [fill]="fill" 
        [stroke]="stroke"
        [responsive]="responsive"
        type="radialBar"
        height="350">
      </apx-chart>
    </div>
  `
})
export class RadialChartComponent {
  series = signal([37, 86, 17]);
  labels = signal(['Ciclo 1', 'Ciclo 2', 'Ciclo 3']);

  chart: ApexChart = { type: 'radialBar', height: 350 };

  plotOptions: ApexPlotOptions = {
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: 'Promedio',
          formatter: () => `${Math.round(this.series().reduce((a, b) => a + b) / 3)}%`
        }
      }
    }
  };

  fill: ApexFill = { type: 'gradient' };
  stroke: ApexStroke = { lineCap: 'round' };
  responsive: ApexResponsive[] = [{ breakpoint: 480, options: { chart: { height: 280 } } }];
}
