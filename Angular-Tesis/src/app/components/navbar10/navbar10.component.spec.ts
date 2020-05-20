import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar10Component } from './navbar10.component';

describe('Navbar10Component', () => {
  let component: Navbar10Component;
  let fixture: ComponentFixture<Navbar10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
