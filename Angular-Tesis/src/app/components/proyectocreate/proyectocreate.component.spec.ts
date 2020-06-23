import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectocreateComponent } from './proyectocreate.component';

describe('ProyectocreateComponent', () => {
  let component: ProyectocreateComponent;
  let fixture: ComponentFixture<ProyectocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
