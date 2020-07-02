import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittesisalumnoComponent } from './edittesisalumno.component';

describe('EdittesisalumnoComponent', () => {
  let component: EdittesisalumnoComponent;
  let fixture: ComponentFixture<EdittesisalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittesisalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittesisalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
