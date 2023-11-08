import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAttributeNgclassComponent } from './directive-attribute-ngclass.component';

describe('DirectiveAttributeNgclassComponent', () => {
  let component: DirectiveAttributeNgclassComponent;
  let fixture: ComponentFixture<DirectiveAttributeNgclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveAttributeNgclassComponent]
    });
    fixture = TestBed.createComponent(DirectiveAttributeNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
