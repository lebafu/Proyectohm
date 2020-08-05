import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesisComisionDirectorescuelaComponent } from './tesis-comision-directorescuela.component';

describe('TesisComisionDirectorescuelaComponent', () => {
  let component: TesisComisionDirectorescuelaComponent;
  let fixture: ComponentFixture<TesisComisionDirectorescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesisComisionDirectorescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesisComisionDirectorescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
