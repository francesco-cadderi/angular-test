import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-attribute-ngstyle',
  templateUrl: './directive-attribute-ngstyle.component.html',
  styleUrls: ['./directive-attribute-ngstyle.component.css']
})
export class DirectiveAttributeNgstyleComponent {
  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "marco", cognome: "verdi", isOnline: false},
    {nome: "anna", cognome: "neri", isOnline: true}
  ]
}
