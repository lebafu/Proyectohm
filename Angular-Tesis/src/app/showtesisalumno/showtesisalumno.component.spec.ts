import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtesisalumnoComponent } from './showtesisalumno.component';

describe('ShowtesisalumnoComponent', () => {
  let component: ShowtesisalumnoComponent;
  let fixture: ComponentFixture<ShowtesisalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtesisalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtesisalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
