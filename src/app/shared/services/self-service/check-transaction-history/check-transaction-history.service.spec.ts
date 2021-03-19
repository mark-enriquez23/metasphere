import { TestBed } from '@angular/core/testing';

import { CheckTransactionHistoryService } from './check-transaction-history.service';

describe('CheckTransactionHistoryService', () => {
  let service: CheckTransactionHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckTransactionHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
