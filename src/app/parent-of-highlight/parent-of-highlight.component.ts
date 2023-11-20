import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-of-highlight',
  templateUrl: './parent-of-highlight.component.html',
  styleUrls: ['./parent-of-highlight.component.css']
})
export class ParentOfHighlightComponent {
  colore = ""

  cambiaColoreEvidenziatore(colore: string){
    this.colore = colore
  }
}
