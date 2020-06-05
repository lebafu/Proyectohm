import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreatesiscreateComponent } from './areatesiscreate.component';

describe('AreatesiscreateComponent', () => {
  let component: AreatesiscreateComponent;
  let fixture: ComponentFixture<AreatesiscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreatesiscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreatesiscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
