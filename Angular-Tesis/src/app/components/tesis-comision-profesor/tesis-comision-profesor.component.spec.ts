import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesisComisionProfesorComponent } from './tesis-comision-profesor.component';

describe('TesisComisionProfesorComponent', () => {
  let component: TesisComisionProfesorComponent;
  let fixture: ComponentFixture<TesisComisionProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesisComisionProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesisComisionProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
