import { Component } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100, 150], backgroundColor: ['#0075ed', '#00baf7', '#00e0db', '#00f7ad'] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
