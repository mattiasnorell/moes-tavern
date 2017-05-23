import { Component, OnInit } from '@angular/core';
import { AngularfireAuthService } from "app/angularfire-auth.service";

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss'],
  providers: [AngularfireAuthService]
})
export class NavigationSidebarComponent implements OnInit {

  constructor(public authService:AngularfireAuthService) { }
  
  isOpen: boolean = false;

  ngOnInit() {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }
}
