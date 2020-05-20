import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar21Component } from './navbar21.component';

describe('Navbar21Component', () => {
  let component: Navbar21Component;
  let fixture: ComponentFixture<Navbar21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
