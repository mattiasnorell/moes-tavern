import { Injectable } from '@angular/core';
import { ICellarItem } from "app/icellar-item";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CellarListService {

  constructor(private afd:AngularFireDatabase) { }

  getAll():FirebaseListObservable<ICellarItem[]>{
      return this.afd.list('/storage');
  }

  add(beer:ICellarItem){
    this.afd.list('/storage').push(beer);
  }

  update(beer:ICellarItem){
    this.afd.list('/storage').update(beer.$key, beer);
  }

  remove(beer:ICellarItem){
    this.afd.list('/storage').remove(beer.$key);
  }
}

