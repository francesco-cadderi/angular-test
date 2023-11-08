import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAttributeNgstyleComponent } from './directive-attribute-ngstyle.component';

describe('DirectiveAttributeNgstyleComponent', () => {
  let component: DirectiveAttributeNgstyleComponent;
  let fixture: ComponentFixture<DirectiveAttributeNgstyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveAttributeNgstyleComponent]
    });
    fixture = TestBed.createComponent(DirectiveAttributeNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
