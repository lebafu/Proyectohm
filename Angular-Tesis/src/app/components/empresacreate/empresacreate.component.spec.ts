import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresacreateComponent } from './empresacreate.component';

describe('EmpresacreateComponent', () => {
  let component: EmpresacreateComponent;
  let fixture: ComponentFixture<EmpresacreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresacreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresacreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
