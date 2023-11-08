import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-of-child-to-parent',
  templateUrl: './parent-of-child-to-parent.component.html',
  styleUrls: ['./parent-of-child-to-parent.component.css']
})
export class ParentOfChildToParentComponent {
  riceviDati($event: number){
    console.log('test', $event)
  }
}
