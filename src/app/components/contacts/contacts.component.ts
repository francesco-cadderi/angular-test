import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTestService } from 'src/app/services/service-test.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  persone: any
  persona: any
  isProfile: boolean

  constructor(private serviceTest: ServiceTestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.isProfile = true
      this.persona = this.serviceTest.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
    }else{
      this.isProfile = false
      this.persone = this.serviceTest.getPersone()
    }
  }
}
