import { TestBed } from '@angular/core/testing';

import { GetCardDetailsServiceService } from './get-card-details-service.service';

describe('GetCardDetailsServiceService', () => {
  let service: GetCardDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
