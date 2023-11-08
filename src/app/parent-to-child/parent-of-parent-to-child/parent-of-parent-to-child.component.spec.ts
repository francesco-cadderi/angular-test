import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfParentToChildComponent } from './parent-of-parent-to-child.component';

describe('ParentOfParentToChildComponent', () => {
  let component: ParentOfParentToChildComponent;
  let fixture: ComponentFixture<ParentOfParentToChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOfParentToChildComponent]
    });
    fixture = TestBed.createComponent(ParentOfParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
