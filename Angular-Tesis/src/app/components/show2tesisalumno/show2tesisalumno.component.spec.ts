import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show2tesisalumnoComponent } from './show2tesisalumno.component';

describe('Show2tesisalumnoComponent', () => {
  let component: Show2tesisalumnoComponent;
  let fixture: ComponentFixture<Show2tesisalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show2tesisalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show2tesisalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
