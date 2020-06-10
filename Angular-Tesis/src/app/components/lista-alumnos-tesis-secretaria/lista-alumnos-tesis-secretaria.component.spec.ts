import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnosTesisSecretariaComponent } from './lista-alumnos-tesis-secretaria.component';

describe('ListaAlumnosTesisSecretariaComponent', () => {
  let component: ListaAlumnosTesisSecretariaComponent;
  let fixture: ComponentFixture<ListaAlumnosTesisSecretariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlumnosTesisSecretariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlumnosTesisSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
