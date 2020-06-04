import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreatesisshowComponent } from './areatesisshow.component';

describe('AreatesisshowComponent', () => {
  let component: AreatesisshowComponent;
  let fixture: ComponentFixture<AreatesisshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreatesisshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreatesisshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
