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
          { Year: "2009", Europe: 31 },
          { Year: "2010", Europe: 43 },
          { Year: "2011", Europe: 66},
          { Year: "2012", Europe: 69 },
          { Year: "2013", Europe: 58 },
          { Year: "2014", Europe: 40 },
          { Year: "2015", Europe: 78 },
          { Year: "2016", Europe: 13 },
          { Year: "2017", Europe: 78 },
          { Year: "2018", Europe: 40 },
          { Year: "2019", Europe: 80 },
      ];
  }

  ngOnInit(): void {
  }

}
