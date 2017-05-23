import { Component, OnInit } from '@angular/core';
import { AngularfireAuthService } from "app/angularfire-auth.service";

@Component({
  selector: 'add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss'],
  providers:[AngularfireAuthService]
})
export class AddBeerComponent implements OnInit {

  constructor(public authService:AngularfireAuthService) { }

  showForm:boolean = false;


  ngOnInit() {
  }

  

  manually(){
    this.showForm = !this.showForm;
  }

  onAdded(){
    this.showForm = false;
  }
}
