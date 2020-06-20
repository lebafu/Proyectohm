import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2InscritaTesisComponent } from './index2-inscrita-tesis.component';

describe('Index2InscritaTesisComponent', () => {
  let component: Index2InscritaTesisComponent;
  let fixture: ComponentFixture<Index2InscritaTesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index2InscritaTesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index2InscritaTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
