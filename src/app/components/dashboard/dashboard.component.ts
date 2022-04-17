import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';



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
  public data: any[];

  constructor() {
      this.data = [
          { Year: "2009", Pollution: 31 },
          { Year: "2010", Pollution: 43 },
          { Year: "2011", Pollution: 66},
          { Year: "2012", Pollution: 69 },
          { Year: "2013", Pollution: 58 },
          { Year: "2014", Pollution: 40 },
          { Year: "2015", Pollution: 78 },
          { Year: "2016", Pollution: 13 },
          { Year: "2017", Pollution: 78 },
          { Year: "2018", Pollution: 40 },
          { Year: new Date(parseInt("1649646270") * 1000).toLocaleString(), Pollution: 80 },
      ];
  }

  ngOnInit(): void {
  }

}
