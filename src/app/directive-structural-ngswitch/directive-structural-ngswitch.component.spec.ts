import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveStructuralNgswitchComponent } from './directive-structural-ngswitch.component';

describe('DirectiveStructuralNgswitchComponent', () => {
  let component: DirectiveStructuralNgswitchComponent;
  let fixture: ComponentFixture<DirectiveStructuralNgswitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveStructuralNgswitchComponent]
    });
    fixture = TestBed.createComponent(DirectiveStructuralNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
