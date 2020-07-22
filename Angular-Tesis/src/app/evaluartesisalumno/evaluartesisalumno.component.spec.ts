import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluartesisalumnoComponent } from './evaluartesisalumno.component';

describe('EvaluartesisalumnoComponent', () => {
  let component: EvaluartesisalumnoComponent;
  let fixture: ComponentFixture<EvaluartesisalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluartesisalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluartesisalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
