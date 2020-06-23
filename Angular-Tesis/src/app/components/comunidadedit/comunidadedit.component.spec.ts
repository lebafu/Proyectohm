import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeditComponent } from './comunidadedit.component';

describe('ComunidadeditComponent', () => {
  let component: ComunidadeditComponent;
  let fixture: ComponentFixture<ComunidadeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
