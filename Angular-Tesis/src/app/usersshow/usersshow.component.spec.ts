import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersshowComponent } from './usersshow.component';

describe('UsersshowComponent', () => {
  let component: UsersshowComponent;
  let fixture: ComponentFixture<UsersshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
