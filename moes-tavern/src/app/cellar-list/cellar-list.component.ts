import { Component, OnInit } from '@angular/core';
import { ICellarItem } from "app/icellar-item";
import { CellarListService } from "app/cellar-list/cellar-list.service";
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'cellar-list',
  templateUrl: './cellar-list.component.html',
  styleUrls: ['./cellar-list.component.scss'],
  providers:[CellarListService, AngularFireDatabase]
})
export class CellarListComponent implements OnInit {

  cellarItems:Observable<ICellarItem[]>
  
  constructor(private cellarListService:CellarListService) { 

  }

  ngOnInit() {
    this.cellarItems = this.cellarListService.getAll();
  }

}
