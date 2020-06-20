import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3SolTesisComponent } from './index3-sol-tesis.component';

describe('Index3SolTesisComponent', () => {
  let component: Index3SolTesisComponent;
  let fixture: ComponentFixture<Index3SolTesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index3SolTesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index3SolTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
