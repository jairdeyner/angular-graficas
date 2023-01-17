import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontalBar = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
  };

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  ngOnInit(): void {
    if (this.horizontalBar) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }
}
