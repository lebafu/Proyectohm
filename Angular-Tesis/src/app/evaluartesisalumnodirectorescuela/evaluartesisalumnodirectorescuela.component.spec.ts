import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluartesisalumnodirectorescuelaComponent } from './evaluartesisalumnodirectorescuela.component';

describe('EvaluartesisalumnodirectorescuelaComponent', () => {
  let component: EvaluartesisalumnodirectorescuelaComponent;
  let fixture: ComponentFixture<EvaluartesisalumnodirectorescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluartesisalumnodirectorescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluartesisalumnodirectorescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
