import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar40Component } from './navbar40.component';

describe('Navbar40Component', () => {
  let component: Navbar40Component;
  let fixture: ComponentFixture<Navbar40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
