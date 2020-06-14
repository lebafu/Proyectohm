import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPdfActaComponent } from './ver-pdf-acta.component';

describe('VerPdfActaComponent', () => {
  let component: VerPdfActaComponent;
  let fixture: ComponentFixture<VerPdfActaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPdfActaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPdfActaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
