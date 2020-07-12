import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesisEsperaProfesorComponent } from './tesis-espera-profesor.component';

describe('TesisEsperaProfesorComponent', () => {
  let component: TesisEsperaProfesorComponent;
  let fixture: ComponentFixture<TesisEsperaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesisEsperaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesisEsperaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
