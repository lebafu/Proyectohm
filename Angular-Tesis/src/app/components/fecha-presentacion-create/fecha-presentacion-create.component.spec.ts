import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaPresentacionCreateComponent } from './fecha-presentacion-create.component';

describe('FechaPresentacionCreateComponent', () => {
  let component: FechaPresentacionCreateComponent;
  let fixture: ComponentFixture<FechaPresentacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaPresentacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaPresentacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
