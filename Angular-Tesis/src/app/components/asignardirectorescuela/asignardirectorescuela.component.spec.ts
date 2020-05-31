import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignardirectorescuelaComponent } from './asignardirectorescuela.component';

describe('AsignardirectorescuelaComponent', () => {
  let component: AsignardirectorescuelaComponent;
  let fixture: ComponentFixture<AsignardirectorescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignardirectorescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignardirectorescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
