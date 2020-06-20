import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index1TesisComponent } from './index1-tesis.component';

describe('Index1TesisComponent', () => {
  let component: Index1TesisComponent;
  let fixture: ComponentFixture<Index1TesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index1TesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index1TesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
