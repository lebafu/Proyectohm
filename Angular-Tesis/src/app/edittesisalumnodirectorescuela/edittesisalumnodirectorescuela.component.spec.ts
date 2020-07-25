import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittesisalumnodirectorescuelaComponent } from './edittesisalumnodirectorescuela.component';

describe('EdittesisalumnodirectorescuelaComponent', () => {
  let component: EdittesisalumnodirectorescuelaComponent;
  let fixture: ComponentFixture<EdittesisalumnodirectorescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittesisalumnodirectorescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittesisalumnodirectorescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
