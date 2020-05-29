import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDirectorEscuelaComponent } from './asignar-director-escuela.component';

describe('AsignarDirectorEscuelaComponent', () => {
  let component: AsignarDirectorEscuelaComponent;
  let fixture: ComponentFixture<AsignarDirectorEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarDirectorEscuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarDirectorEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
