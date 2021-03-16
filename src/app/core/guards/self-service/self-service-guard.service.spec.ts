import { TestBed } from '@angular/core/testing';

import { SelfServiceGuardService } from './self-service-guard.service';

describe('SelfServiceGuardService', () => {
  let service: SelfServiceGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfServiceGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
