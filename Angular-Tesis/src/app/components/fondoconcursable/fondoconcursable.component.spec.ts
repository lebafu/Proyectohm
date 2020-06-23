import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoconcursableComponent } from './fondoconcursable.component';

describe('FondoconcursableComponent', () => {
  let component: FondoconcursableComponent;
  let fixture: ComponentFixture<FondoconcursableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoconcursableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoconcursableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
