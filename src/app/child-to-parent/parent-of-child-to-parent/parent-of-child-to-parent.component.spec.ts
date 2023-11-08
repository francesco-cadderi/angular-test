import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfChildToParentComponent } from './parent-of-child-to-parent.component';

describe('ParentOfChildToParentComponent', () => {
  let component: ParentOfChildToParentComponent;
  let fixture: ComponentFixture<ParentOfChildToParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOfChildToParentComponent]
    });
    fixture = TestBed.createComponent(ParentOfChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
