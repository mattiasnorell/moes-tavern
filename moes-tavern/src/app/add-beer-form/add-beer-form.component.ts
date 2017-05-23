import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CellarItem } from "app/cellar-item";
import { CellarListService } from "app/cellar-list/cellar-list.service";
import { AngularFireDatabase } from "angularfire2/database";
import { CellarItemForm } from "./cellar-item-form";

@Component({
  selector: 'add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss'],
  providers: [CellarListService,AngularFireDatabase]
})
export class AddBeerFormComponent implements OnInit {

  newBeer = new CellarItemForm();

  constructor(private cellarListService:CellarListService) { }

  @Output() onAdded = new EventEmitter();
  
  ngOnInit() {
  }

  add(){
    var beer = new CellarItem();
    beer.archived = false;
    beer.brewery = this.newBeer.brewery;
    beer.count = this.newBeer.count;
    beer.name = this.newBeer.name;
    beer.createdAt = new Date().getTime();
    beer.bestBefore = new Date(this.newBeer.bestBefore).getTime();
    
    this.cellarListService.add(beer);

    this.onAdded.emit();

  }
}
