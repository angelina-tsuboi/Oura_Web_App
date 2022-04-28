import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isShowingForm : boolean = false;
  public isRegister: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  public toggleForm(){
    this.isShowingForm = !this.isShowingForm
  }


  public toggleRegister(){
    this.isRegister = !this.isRegister
  }
}
