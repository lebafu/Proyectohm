import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreatesisComponent } from './areatesis.component';

describe('AreatesisComponent', () => {
  let component: AreatesisComponent;
  let fixture: ComponentFixture<AreatesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreatesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreatesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
