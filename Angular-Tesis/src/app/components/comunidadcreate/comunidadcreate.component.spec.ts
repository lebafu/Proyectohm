import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadcreateComponent } from './comunidadcreate.component';

describe('ComunidadcreateComponent', () => {
  let component: ComunidadcreateComponent;
  let fixture: ComponentFixture<ComunidadcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
