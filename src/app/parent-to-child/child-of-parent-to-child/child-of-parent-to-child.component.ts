import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-of-parent-to-child',
  templateUrl: './child-of-parent-to-child.component.html',
  styleUrls: ['./child-of-parent-to-child.component.css']
})
export class ChildOfParentToChildComponent {
  @Input() data: any;

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
}
