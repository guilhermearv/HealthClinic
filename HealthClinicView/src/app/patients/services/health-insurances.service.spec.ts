import { TestBed } from '@angular/core/testing';

import { HealthInsurancesService } from './health-insurances.service';

describe('HealthInsurancesService', () => {
  let service: HealthInsurancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthInsurancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
