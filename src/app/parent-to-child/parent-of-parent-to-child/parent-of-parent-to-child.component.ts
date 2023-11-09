import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-of-parent-to-child',
  templateUrl: './parent-of-parent-to-child.component.html',
  styleUrls: ['./parent-of-parent-to-child.component.css']
})
export class ParentOfParentToChildComponent {
  data = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "marco", cognome: "verdi", isOnline: false},
    {nome: "anna", cognome: "neri", isOnline: true}
  ]

  onClick(){
    this.data = [
      {nome: "paolo", cognome: "gatto", isOnline: false},
      {nome: "anna", cognome: "pannocchia", isOnline: false},
      {nome: "maccio", cognome: "capatonda", isOnline: true}
    ]
  }
}
