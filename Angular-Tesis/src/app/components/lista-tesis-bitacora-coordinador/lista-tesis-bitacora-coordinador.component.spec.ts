import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTesisBitacoraCoordinadorComponent } from './lista-tesis-bitacora-coordinador.component';

describe('ListaTesisBitacoraCoordinadorComponent', () => {
  let component: ListaTesisBitacoraCoordinadorComponent;
  let fixture: ComponentFixture<ListaTesisBitacoraCoordinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTesisBitacoraCoordinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTesisBitacoraCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
