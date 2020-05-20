import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar20Component } from './navbar20.component';

describe('Navbar20Component', () => {
  let component: Navbar20Component;
  let fixture: ComponentFixture<Navbar20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
