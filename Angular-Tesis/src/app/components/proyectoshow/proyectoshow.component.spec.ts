import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoshowComponent } from './proyectoshow.component';

describe('ProyectoshowComponent', () => {
  let component: ProyectoshowComponent;
  let fixture: ComponentFixture<ProyectoshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
