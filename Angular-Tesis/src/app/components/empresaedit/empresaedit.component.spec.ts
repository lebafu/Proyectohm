import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaeditComponent } from './empresaedit.component';

describe('EmpresaeditComponent', () => {
  let component: EmpresaeditComponent;
  let fixture: ComponentFixture<EmpresaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
