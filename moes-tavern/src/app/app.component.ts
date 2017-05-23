import { Component } from '@angular/core';
import { AngularfireAuthService } from "app/angularfire-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AngularfireAuthService]
})
export class AppComponent {}
