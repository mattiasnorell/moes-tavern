import { Component, OnInit } from '@angular/core';
import { AngularfireAuthService } from "app/angularfire-auth.service";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginData:any = {username: null, password: null};

  constructor(private authService:AngularfireAuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.loginData.username, this.loginData.password);
  }

}
