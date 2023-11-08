import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-of-parent-to-child',
  templateUrl: './child-of-parent-to-child.component.html',
  styleUrls: ['./child-of-parent-to-child.component.css']
})
export class ChildOfParentToChildComponent {
  @Input() data: any;
}
