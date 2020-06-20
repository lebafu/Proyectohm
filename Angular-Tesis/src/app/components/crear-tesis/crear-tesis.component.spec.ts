import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTesisComponent } from './crear-tesis.component';

describe('CrearTesisComponent', () => {
  let component: CrearTesisComponent;
  let fixture: ComponentFixture<CrearTesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
