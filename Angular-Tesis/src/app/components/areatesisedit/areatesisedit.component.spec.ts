import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreatesiseditComponent } from './areatesisedit.component';

describe('AreatesiseditComponent', () => {
  let component: AreatesiseditComponent;
  let fixture: ComponentFixture<AreatesiseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreatesiseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreatesiseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
