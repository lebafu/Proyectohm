import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesisInscritasProfesorComponent } from './tesis-inscritas-profesor.component';

describe('TesisInscritasProfesorComponent', () => {
  let component: TesisInscritasProfesorComponent;
  let fixture: ComponentFixture<TesisInscritasProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesisInscritasProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesisInscritasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
