import { Component, OnInit } from '@angular/core';
import { CellarItem } from "app/cellar-item";
import { CellarListService } from "app/cellar-list/cellar-list.service";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss'],
  providers: [CellarListService,AngularFireDatabase]
})
export class AddBeerFormComponent implements OnInit {

  newBeer = new CellarItem();

  constructor(private cellarListService:CellarListService) { }

  ngOnInit() {
  }

  add(){
    this.newBeer.createdAt = new Date().getTime();
    this.cellarListService.add(this.newBeer);
  }
}
