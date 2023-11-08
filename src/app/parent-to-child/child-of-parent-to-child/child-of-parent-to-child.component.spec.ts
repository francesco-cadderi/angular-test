import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfParentToChildComponent } from './child-of-parent-to-child.component';

describe('ChildOfParentToChildComponent', () => {
  let component: ChildOfParentToChildComponent;
  let fixture: ComponentFixture<ChildOfParentToChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOfParentToChildComponent]
    });
    fixture = TestBed.createComponent(ChildOfParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
