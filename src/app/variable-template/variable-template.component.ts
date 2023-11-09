import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-variable-template',
  templateUrl: './variable-template.component.html',
  styleUrls: ['./variable-template.component.css']
})
export class VariableTemplateComponent {
  @ViewChild('variabileInput') valoreInput!: ElementRef<HTMLInputElement>

  onClick() {
    console.log(this.valoreInput.nativeElement.value);
  }
}

