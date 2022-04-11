import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import * as Highcharts from "highcharts";
import { chartModal, HighchartService } from 'src/app/shared/services/highchart.service';


// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexTooltip,
//   ApexStroke
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   stroke: ApexStroke;
//   tooltip: ApexTooltip;
//   dataLabels: ApexDataLabels;
// };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = "Firestore-Angular-Highcharts";
  items$: chartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  chartOptions: any;
  constructor(private highchartservice: HighchartService) {}
  ngOnInit() {
    this.highchartservice.rates$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.rate);
        });
        this.getChart();
      }
    });
  }
  getChart() {
    this.chartOptions = {
      series: [{
        data: this.chardata,
      }, ],
      chart: {
        type: "bar",
      },
      title: {
        text: "barchart",
      },
    };
  }

}
