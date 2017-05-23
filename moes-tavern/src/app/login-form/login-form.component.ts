import { Component, OnInit } from '@angular/core';
import { AngularfireAuthService } from "app/angularfire-auth.service";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AngularfireAuthService]
})
export class LoginFormComponent implements OnInit {

  loginData:any = {username: null, password: null};

  constructor(public authService:AngularfireAuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.loginData.username, this.loginData.password);

    this.loginData = {username: null, password: null};
  }

  logout(){
    this.authService.logout();
  }

}
