import { Component } from '@angular/core';
import { ServiceTestService } from '../services/service-test.service';

@Component({
  selector: 'app-directive-structural-ngfor',
  templateUrl: './directive-structural-ngfor.component.html',
  styleUrls: ['./directive-structural-ngfor.component.css']
})
export class DirectiveStructuralNgforComponent {
  
  constructor(private servizioTest: ServiceTestService) {}

  persone = this.servizioTest.persone
  
}
