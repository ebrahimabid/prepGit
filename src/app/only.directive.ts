import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnly]'
})
export class OnlyDirective {

  constructor() { }
  @HostBinding('style.color') _color? :string;
@HostListener('mouseenter') onMouseEnter(){
 // alert('mouse entered')
 this._color = this._color !== "green" ? "green"  :"white"
} 
}
