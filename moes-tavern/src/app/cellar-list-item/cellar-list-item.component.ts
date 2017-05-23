import { Component, OnInit, Input } from '@angular/core';
import { ICellarItem } from "app/icellar-item";
import { CellarListService } from "app/cellar-list/cellar-list.service";
import { AngularfireAuthService } from "app/angularfire-auth.service";

@Component({
  selector: 'cellar-list-item',
  templateUrl: './cellar-list-item.component.html',
  styleUrls: ['./cellar-list-item.component.scss'],
  providers: [CellarListService, AngularfireAuthService]
})
export class CellarListItemComponent implements OnInit {

  constructor(private cellarService:CellarListService, public authService: AngularfireAuthService) { }

  private currentDate: Date = new Date();
  private currentDateTimestamp: number = this.currentDate.getTime();
  private closeToDateLimit: number = this.currentDate.setDate(this.currentDate.getDate() + 7);
  closeToDate:boolean = false;
  pastDate:boolean = false;
  showInformation:boolean = false;

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
    var doIt = confirm(`Ta bort är dumt ibland. Ta bort ${beer.name}?`);

    if(doIt){
      this.cellarService.remove(beer);
    }
  }

  toggleInformation(){
    this.showInformation = !this.showInformation; 
  }
}
