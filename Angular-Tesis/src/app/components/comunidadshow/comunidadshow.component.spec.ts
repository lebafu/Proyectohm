import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadshowComponent } from './comunidadshow.component';

describe('ComunidadshowComponent', () => {
  let component: ComunidadshowComponent;
  let fixture: ComponentFixture<ComunidadshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
