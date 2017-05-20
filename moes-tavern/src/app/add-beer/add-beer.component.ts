import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss']
})
export class AddBeerComponent implements OnInit {

  constructor() { }

  showForm:boolean = false;

  ngOnInit() {
  }

  manually(){
    this.showForm = !this.showForm;
  }
}
