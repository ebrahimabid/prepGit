import { Component, Input   } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',

})
export class TestComponent  {

@Input() inputData?:string[];
  constructor() {

   }




}
