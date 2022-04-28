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

  public loginErrorEmail : boolean = false
  public loginErrorPassword : boolean = false

  // Register
  public regsiterEmail: string = "";
  public registerPassword: string = "";

  public registerErrorEmail : boolean = false
  public registerErrorPassword : boolean = false

  constructor() { }

  ngOnInit(): void {
    this.clearRegister()
    this.clearLogin()
  }

  public toggleForm(){
    this.isShowingForm = !this.isShowingForm
  }

  public toggleRegister(){
    this.isRegister = !this.isRegister
  }

  private checkLogin() : boolean {
    if (this.registerPassword.length < 8 || this.registerPassword.length > 15) {
      this.registerErrorPassword = true;
      return false;
    }
    return true;
  }

  private checkRegister() : boolean {
    return false;
  }

  private clearRegister(){
    this.regsiterEmail = ""
    this.registerPassword = ""
    this.registerErrorEmail = false
    this.registerErrorPassword = false
  }

  private clearLogin(){
    this.loginEmail = ""
    this.loginPassword = ""
    this.loginErrorEmail = false
    this.loginErrorPassword = false
  }

  public login(){
    this.loginErrorEmail = false;
    this.loginErrorPassword = false;
    if(this.checkLogin()){

    }
  }

  public register(){
    this.registerErrorEmail = false;
    this.registerErrorPassword = false;
    if(this.checkRegister()){

    }
  }
}
