import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { map } from 'rxjs/operators';


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
  public sensorData: any[];

  constructor(private firebase: FirebaseService, private authService: AuthService) {
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

  async ngOnInit() {
    console.log("user uid: ", JSON.parse(localStorage.getItem('user')!))
    let uid = JSON.parse(localStorage.getItem('user')!).uid;
    
    this.getDashboardReadings(uid);
  }

  getDashboardReadings(uid: string): void {
    this.firebase.getReadings(uid).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.sensorData = data;
      console.log("sensor data", this.sensorData);
    });
  }

}
