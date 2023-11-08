import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-of-child-to-parent',
  templateUrl: './child-of-child-to-parent.component.html',
  styleUrls: ['./child-of-child-to-parent.component.css']
})
export class ChildOfChildToParentComponent {
  @Output() mandaDatiEvento = new EventEmitter<number>()

  numero = 42
  
  sparaDati(){
    console.log('figlio',  this.numero);
    this.mandaDatiEvento.emit(this.numero)
  }
}
