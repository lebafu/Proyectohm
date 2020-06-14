import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPdfConstanciaComponent } from './ver-pdf-constancia.component';

describe('VerPdfConstanciaComponent', () => {
  let component: VerPdfConstanciaComponent;
  let fixture: ComponentFixture<VerPdfConstanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPdfConstanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPdfConstanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
