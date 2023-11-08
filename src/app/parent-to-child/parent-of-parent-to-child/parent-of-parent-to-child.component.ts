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
}
