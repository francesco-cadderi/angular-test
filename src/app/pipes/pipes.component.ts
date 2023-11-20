import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  dataAttuale = Date.now()
  numero = 42.234567
  stringaMaiuscola = 'ciao'
}
