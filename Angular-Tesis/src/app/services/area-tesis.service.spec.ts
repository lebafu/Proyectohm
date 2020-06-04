import { TestBed } from '@angular/core/testing';

import { AreaTesisService } from './area-tesis.service';

describe('AreaTesisService', () => {
  let service: AreaTesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaTesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
