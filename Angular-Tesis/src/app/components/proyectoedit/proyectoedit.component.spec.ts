import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoeditComponent } from './proyectoedit.component';

describe('ProyectoeditComponent', () => {
  let component: ProyectoeditComponent;
  let fixture: ComponentFixture<ProyectoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
