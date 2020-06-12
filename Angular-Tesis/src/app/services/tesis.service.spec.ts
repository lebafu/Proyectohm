import { TestBed } from '@angular/core/testing';

import { TesisService } from './tesis.service';

describe('TesisService', () => {
  let service: TesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
