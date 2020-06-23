import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoconcursableeditComponent } from './fondoconcursableedit.component';

describe('FondoconcursableeditComponent', () => {
  let component: FondoconcursableeditComponent;
  let fixture: ComponentFixture<FondoconcursableeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoconcursableeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoconcursableeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
