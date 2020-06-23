import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoconcursableshowComponent } from './fondoconcursableshow.component';

describe('FondoconcursableshowComponent', () => {
  let component: FondoconcursableshowComponent;
  let fixture: ComponentFixture<FondoconcursableshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoconcursableshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoconcursableshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
