import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-structural-ngfor',
  templateUrl: './directive-structural-ngfor.component.html',
  styleUrls: ['./directive-structural-ngfor.component.css']
})
export class DirectiveStructuralNgforComponent {
  persone = [
    {nome: "luca", cognome: "rossi"},
    {nome: "marco", cognome: "verdi"},
    {nome: "anna", cognome: "neri"},
  ]
}
