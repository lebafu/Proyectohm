import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresashowComponent } from './empresashow.component';

describe('EmpresashowComponent', () => {
  let component: EmpresashowComponent;
  let fixture: ComponentFixture<EmpresashowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresashowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresashowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
