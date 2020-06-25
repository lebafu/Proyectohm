import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTesisAlumnoComponent } from './crear-tesis-alumno.component';

describe('CrearTesisAlumnoComponent', () => {
  let component: CrearTesisAlumnoComponent;
  let fixture: ComponentFixture<CrearTesisAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTesisAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTesisAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
