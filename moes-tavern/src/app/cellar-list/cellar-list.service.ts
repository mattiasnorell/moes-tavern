import { Injectable } from '@angular/core';
import { ICellarItem } from "app/icellar-item";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CellarItem } from "app/cellar-item";
import { Observable } from "rxjs/Observable";
import { AngularfireAuthService } from "app/angularfire-auth.service";

@Injectable()
export class CellarListService {

  constructor(private afd:AngularFireDatabase, private authService:AngularfireAuthService) { }

  getAll():Observable<ICellarItem[]>{
      
        return this.afd.list('/storage').map((items:ICellarItem[]) => {
          return items.map((item:any) => {

            var returnItem = new CellarItem();

            returnItem.archived = (item.archived) ? item.archived : false;;
            returnItem.bestBefore = item.bestBefore;
            returnItem.brewery = item.brewery;
            returnItem.count = item.count;
            returnItem.id = item.$key;
            returnItem.name = item.name;
            returnItem.upc = (item.upc) ? item.upc : "";
            returnItem.userId = item.userId;
            
            return returnItem;

          });

      });
  }

  add(beer:ICellarItem){
    if(!this.authService.isAuthenticated()){
      return;
    }

    beer.userId = this.authService.getUser().uid;

    this.afd.list('/storage').push(beer);
  }

  update(beer:ICellarItem){
    if(!this.authService.isAuthenticated()){
      return;
    }

    beer.userId = this.authService.getUser().uid;
    
    this.afd.list('/storage').update(beer.id, beer);
  }

  remove(beer:ICellarItem){
    if(!this.authService.isAuthenticated()){
      return;
    }

    this.afd.list('/storage').remove(beer.id);
  }
}

