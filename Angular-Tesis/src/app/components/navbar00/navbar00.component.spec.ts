import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar00Component } from './navbar00.component';

describe('Navbar00Component', () => {
  let component: Navbar00Component;
  let fixture: ComponentFixture<Navbar00Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar00Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
