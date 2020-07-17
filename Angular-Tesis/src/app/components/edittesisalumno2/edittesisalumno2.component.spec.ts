import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edittesisalumno2Component } from './edittesisalumno2.component';

describe('Edittesisalumno2Component', () => {
  let component: Edittesisalumno2Component;
  let fixture: ComponentFixture<Edittesisalumno2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edittesisalumno2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edittesisalumno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
