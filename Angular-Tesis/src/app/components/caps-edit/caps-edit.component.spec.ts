import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsEditComponent } from './caps-edit.component';

describe('CapsEditComponent', () => {
  let component: CapsEditComponent;
  let fixture: ComponentFixture<CapsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
