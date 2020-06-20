import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2SolTesisComponent } from './index2-sol-tesis.component';

describe('Index2SolTesisComponent', () => {
  let component: Index2SolTesisComponent;
  let fixture: ComponentFixture<Index2SolTesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index2SolTesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index2SolTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
