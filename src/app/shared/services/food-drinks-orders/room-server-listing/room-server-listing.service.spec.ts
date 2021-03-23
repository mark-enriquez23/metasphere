import { TestBed } from '@angular/core/testing';

import { RoomServerListingService } from './room-server-listing.service';

describe('RoomServerListingService', () => {
  let service: RoomServerListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomServerListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
