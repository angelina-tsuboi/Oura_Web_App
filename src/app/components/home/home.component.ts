import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isShowingForm : boolean = false;
  public isRegister: boolean = true
  
  // Login
  public loginEmail: string = "";
  public loginPassword: string = "";

  // Register
  public regsiterEmail: string = "";
  public registerPassword: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public toggleForm(){
    this.isShowingForm = !this.isShowingForm
  }

  public toggleRegister(){
    this.isRegister = !this.isRegister
  }

  private checkLogin() : boolean {
    return false;
  }

  private checkRegister() : boolean {
    return false;
  }

  private clearRegister(){
    this.regsiterEmail = ""
    this.registerPassword = ""
  }

  private clearLogin(){
    this.loginEmail = ""
    this.loginPassword = ""
  }

  public login(){

  }

  public register(){

  }
}
