import{Component, EventEmitter, Input,Output}from '@angular/core'


@Component({
  selector:'app-voter',
  template:`

    <h3>{{question}}</h3>
    <button [ngStyle]="{'color':'red'}" (click)="voter(true)">{{yesAnswer}}</button>
    <button (click)="voter(false)">{{noAnswer}}</button>

  `
})
export class VoterComponent {
  @Output()
  public output = new EventEmitter<boolean>()
  @Input()
  public question? : string;
  @Input()
  public yesAnswer? : string;
  @Input()
  public noAnswer? : string;

  voter(event:boolean) {
    this.output.emit(event);
  }
}


