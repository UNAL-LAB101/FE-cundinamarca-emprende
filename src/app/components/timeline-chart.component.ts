import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent, ApexChart, ApexPlotOptions, ApexFill, ApexLegend,
  ApexXAxis, ApexGrid, ApexTooltip
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-chart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  template: `
    <div class="chart">
      <h3>Seguimiento de Actividades</h3>
      <apx-chart
        #chart
        [series]="series"
        [chart]="chartOptions"
        [colors]="colors"
        [plotOptions]="plotOptions"
        [legend]="legend"
        [fill]="fill"
        [grid]="grid"
        [xaxis]="xaxis"
        [tooltip]="tooltip"
        type="rangeBar"
        height="400">
      </apx-chart>
    </div>
  `
})
export class TimelineChartComponent {
  // ViewChild del componente (solo para acceso programático, no para ApexChart)
  @ViewChild('chart') chartView!: ChartComponent;

  // Esta es la propiedad que espera ApexCharts
  chartOptions: ApexChart = {
    height: 400,
    type: 'rangeBar',
    toolbar: { show: false }
  };

  series = [{
    data: [
      {
        x: 'Misión/Visión',
        y: [new Date('2024-01-01').getTime(), new Date('2024-01-10').getTime()]
      },
      {
        x: 'Formalización',
        y: [new Date('2024-02-01').getTime(), new Date('2024-02-15').getTime()]
      }
    ]
  }];

  colors = ['#33b2df'];
  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      isDumbbell: true,
      dumbbellColors: [['#33b2df', '#00E396']]
    }
  };

  legend: ApexLegend = { position: 'top' };
  fill: ApexFill = { type: 'solid' };
  grid: ApexGrid = { xaxis: { lines: { show: true } } };
  xaxis: ApexXAxis = { type: 'datetime' };
  tooltip: ApexTooltip = { enabled: true };
}
