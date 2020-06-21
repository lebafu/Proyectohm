import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituladosSecComponent } from './titulados-sec.component';

describe('TituladosSecComponent', () => {
  let component: TituladosSecComponent;
  let fixture: ComponentFixture<TituladosSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituladosSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituladosSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
