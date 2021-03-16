import { TestBed } from '@angular/core/testing';

import { PreCheckinService } from './pre-checkin.service';

describe('PreCheckinService', () => {
  let service: PreCheckinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreCheckinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
