import { TestBed } from '@angular/core/testing';

import { TesisComisionCapitulosService } from './tesis-comision-capitulos.service';

describe('TesisComisionCapitulosService', () => {
  let service: TesisComisionCapitulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesisComisionCapitulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
