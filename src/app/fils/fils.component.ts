import { Component, Input, OnInit, Output,EventEmitter,OnDestroy } from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit ,OnDestroy{
@Input() message:string = '';
@Output() tick :EventEmitter<string> = new EventEmitter()
public inputValue = '0';
id:any

  constructor() {
   
   }

  ngOnInit(): void {
  
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  buttonClicked(){
    this.id = setInterval(()=>{
      this.tick.emit(this.message)
     
    },parseInt(this.inputValue))
  
  }

}
