import { Component, OnInit } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficaService: GraficasService) {}

  ngOnInit(): void {
    this.graficaService.getUsuariosRedesSocialesDonaData().subscribe(({ labels, data }) => {
      const backgroundColor = ['#0075ed', '#00baf7', '#00e0db', '#00f7ad', 'green'];

      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets.push({ data, backgroundColor });
    });
  }
}
