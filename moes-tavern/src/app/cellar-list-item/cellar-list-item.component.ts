import { Component, OnInit, Input } from '@angular/core';
import { ICellarItem } from "app/icellar-item";
import { CellarListService } from "app/cellar-list/cellar-list.service";

@Component({
  selector: 'cellar-list-item',
  templateUrl: './cellar-list-item.component.html',
  styleUrls: ['./cellar-list-item.component.scss'],
  providers: [CellarListService]
})
export class CellarListItemComponent implements OnInit {

  constructor(private cellarService:CellarListService) { }

  private currentDate: Date = new Date();
  private currentDateTimestamp: number = this.currentDate.getTime();
  private closeToDateLimit: number = this.currentDate.setDate(this.currentDate.getDate() + 7);
  closeToDate:boolean = false;
  pastDate:boolean = false;

  ngOnInit() {
    this.closeToDate = new Date(this.item.bestBefore).getTime() < this.closeToDateLimit;
    this.pastDate = new Date(this.item.bestBefore).getTime() < this.currentDateTimestamp;
  }

  @Input() item:ICellarItem;

  checkOut(beer:ICellarItem){
    
    if(beer.count < 1){
        return;
    }

    beer.count = beer.count - 1;

    if(beer.count < 1){
      beer.archived = true;
    }

    this.cellarService.update(beer);

  }

  remove(beer: ICellarItem){
    this.cellarService.remove(beer);
  }
}
