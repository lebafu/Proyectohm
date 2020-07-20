import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edittesisalumno2sincamposnulosComponent } from './edittesisalumno2sincamposnulos.component';

describe('Edittesisalumno2sincamposnulosComponent', () => {
  let component: Edittesisalumno2sincamposnulosComponent;
  let fixture: ComponentFixture<Edittesisalumno2sincamposnulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edittesisalumno2sincamposnulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edittesisalumno2sincamposnulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
