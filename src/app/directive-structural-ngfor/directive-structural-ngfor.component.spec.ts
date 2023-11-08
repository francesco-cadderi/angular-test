import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveStructuralNgforComponent } from './directive-structural-ngfor.component';

describe('DirectiveStructuralNgforComponent', () => {
  let component: DirectiveStructuralNgforComponent;
  let fixture: ComponentFixture<DirectiveStructuralNgforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveStructuralNgforComponent]
    });
    fixture = TestBed.createComponent(DirectiveStructuralNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
