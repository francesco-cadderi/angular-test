import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfChildToParentComponent } from './child-of-child-to-parent.component';

describe('ChildOfChildToParentComponent', () => {
  let component: ChildOfChildToParentComponent;
  let fixture: ComponentFixture<ChildOfChildToParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOfChildToParentComponent]
    });
    fixture = TestBed.createComponent(ChildOfChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
