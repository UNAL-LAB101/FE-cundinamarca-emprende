import { Component, signal } from '@angular/core';
import { ApexChart, ApexStroke, ApexFill, ApexLegend } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  template: `
    <div class="chart">
      <h3>Perfil de Competencias por Ciclo</h3>
      <apx-chart
        type="radar"
        [series]="series()"
        [chart]="chart"
        [labels]="categories()"
        [stroke]="stroke"
        [fill]="fill"
        [legend]="legend"
        height="450">
      </apx-chart>
    </div>
  `
})
export class RadarChartComponent {
  series = signal([
    { name: 'Ciclo 1', data: [1, 1, 1, 3] },
    { name: 'Ciclo 2', data: [5, 5, 3, 3] },
    { name: 'Ciclo 3', data: [3, 3, 0, 0] }
  ]);

  categories = signal(['Producto', 'Formalización', 'DOFA', 'Mercado']);
  chart: ApexChart = { type: 'radar', height: 450 };
  stroke: ApexStroke = { width: 2 };
  fill: ApexFill = { opacity: 0.3 };
  legend: ApexLegend = { position: 'top' };
}
