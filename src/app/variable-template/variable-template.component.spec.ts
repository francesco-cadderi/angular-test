import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTemplateComponent } from './variable-template.component';

describe('VariableTemplateComponent', () => {
  let component: VariableTemplateComponent;
  let fixture: ComponentFixture<VariableTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariableTemplateComponent]
    });
    fixture = TestBed.createComponent(VariableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
