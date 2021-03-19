import { TestBed } from '@angular/core/testing';

import { SaveDocumentsService } from './save-documents.service';

describe('SaveDocumentsService', () => {
  let service: SaveDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
