import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfHighlightComponent } from './parent-of-highlight.component';

describe('ParentOfHighlightComponent', () => {
  let component: ParentOfHighlightComponent;
  let fixture: ComponentFixture<ParentOfHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOfHighlightComponent]
    });
    fixture = TestBed.createComponent(ParentOfHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
