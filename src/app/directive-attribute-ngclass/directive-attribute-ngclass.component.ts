import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-attribute-ngclass',
  templateUrl: './directive-attribute-ngclass.component.html',
  styleUrls: ['./directive-attribute-ngclass.component.css']
})
export class DirectiveAttributeNgclassComponent {
  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "marco", cognome: "verdi", isOnline: false},
    {nome: "anna", cognome: "neri", isOnline: true},
    {nome: "gianni", cognome: "blu", isOnline: true},
    {nome: "giulia", cognome: "verdi", isOnline: false},
    {nome: "roberta", cognome: "neri", isOnline: true}
  ]
}
