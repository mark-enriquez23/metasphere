import { TestBed } from '@angular/core/testing';

import { SubmitGuestInfoService } from './submit-guest-info.service';

describe('SubmitGuestInfoService', () => {
  let service: SubmitGuestInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitGuestInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
