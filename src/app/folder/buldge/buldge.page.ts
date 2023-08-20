import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-buldge',
  templateUrl: './buldge.page.html',
  styleUrls: ['./buldge.page.scss'],
})
export class BuldgePage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadGoogleCharts();
  }

  loadGoogleCharts() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.onload = () => this.drawChart();
    document.body.appendChild(script);
  }

  drawChart() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChartWithData);
  }

  drawChartWithData() {
    // You can reuse most of the code from your old dashboard
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Material');
    data.addColumn('number', 'Custo');
    data.addColumn('number', 'Somatório');

    var values = [10000, 10000/1.2, 10000/4, 10000/8];
    var cumulativeSum = 0;
    for (var i = 0; i < values.length; i++) {
      cumulativeSum += values[i];
      data.addRow(['Material ' + (i + 1), values[i], cumulativeSum]);
    }

    var options = {
      title: 'Grafico de Pareto',
      legend: { position: 'bottom' },
      hAxis: { title: 'Material' },
      vAxis: { title: 'Valor' },
      seriesType: 'bars',
      series: {
        0: { color: 'blue' },
        1: { color: 'red', type: 'line' }
      }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_buldge'));
    chart.draw(data, options);
  }
}
