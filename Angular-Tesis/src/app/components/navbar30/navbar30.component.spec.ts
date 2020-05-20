import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar30Component } from './navbar30.component';

describe('Navbar30Component', () => {
  let component: Navbar30Component;
  let fixture: ComponentFixture<Navbar30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
