import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  onInput(event: Event){
    console.log((<HTMLInputElement>event.target).value);
  }

  title = 'corso angular'
  onClick(event: Event){
    this.title = 'ho cliccato il bottone'
  }
}
