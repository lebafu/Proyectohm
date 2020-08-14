import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsEditAvancesComponent } from './caps-edit-avances.component';

describe('CapsEditAvancesComponent', () => {
  let component: CapsEditAvancesComponent;
  let fixture: ComponentFixture<CapsEditAvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsEditAvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsEditAvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
