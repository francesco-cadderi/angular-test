import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveStructuralNgifComponent } from './directive-structural-ngif.component';

describe('DirectiveStructuralNgifComponent', () => {
  let component: DirectiveStructuralNgifComponent;
  let fixture: ComponentFixture<DirectiveStructuralNgifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveStructuralNgifComponent]
    });
    fixture = TestBed.createComponent(DirectiveStructuralNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
