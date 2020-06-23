import { TestBed } from '@angular/core/testing';

import { FondosConcursablesService } from './fondos-concursables.service';

describe('FondosConcursablesService', () => {
  let service: FondosConcursablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondosConcursablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
