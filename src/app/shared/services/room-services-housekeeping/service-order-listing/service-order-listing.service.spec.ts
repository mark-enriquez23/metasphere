import { TestBed } from '@angular/core/testing';

import { ServiceOrderListingService } from './service-order-listing.service';

describe('ServiceOrderListingService', () => {
  let service: ServiceOrderListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOrderListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
