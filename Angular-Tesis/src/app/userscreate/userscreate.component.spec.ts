import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscreateComponent } from './userscreate.component';

describe('UserscreateComponent', () => {
  let component: UserscreateComponent;
  let fixture: ComponentFixture<UserscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
