import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3InscritaTesisComponent } from './index3-inscrita-tesis.component';

describe('Index3InscritaTesisComponent', () => {
  let component: Index3InscritaTesisComponent;
  let fixture: ComponentFixture<Index3InscritaTesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index3InscritaTesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index3InscritaTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
