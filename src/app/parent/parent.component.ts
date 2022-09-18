import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
   public counter :number ;
   public message: string ;

  constructor() {
    this.message =' Hello world '
    this.counter = 0 ;
   }

  ngOnInit(): void {
  }
counterTick(event:string) {
  this.counter++;
  this.message = event;
}
}
