import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaPresentacionEditComponent } from './fecha-presentacion-edit.component';

describe('FechaPresentacionEditComponent', () => {
  let component: FechaPresentacionEditComponent;
  let fixture: ComponentFixture<FechaPresentacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaPresentacionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaPresentacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
