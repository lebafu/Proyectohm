import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoconcursablecreateComponent } from './fondoconcursablecreate.component';

describe('FondoconcursablecreateComponent', () => {
  let component: FondoconcursablecreateComponent;
  let fixture: ComponentFixture<FondoconcursablecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoconcursablecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoconcursablecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
