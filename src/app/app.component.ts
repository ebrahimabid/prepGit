import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'preparation';
  price = 200.23
  name = 'Angular 5';
  data=['Brahim','Abid','555']
//voter
public answer: string = '??';
question : string ='is easy'
yesAnswer:string = 'Yes'
noAnswer:string = 'No'
vote(event:boolean){
  this.answer = event ? this.yesAnswer : this.noAnswer
}



  onFocusIn(): void {
    console.log('focus in');
  }

  onFocusOut(): void {
    console.log('focus out');
  }

  onClick(): void {
    console.log('click');
  }
  aff(v:string){
    console.log(v)
  }
  verifEnf() {
    this.price++;
    console.log("price",this.price)
  }
}
