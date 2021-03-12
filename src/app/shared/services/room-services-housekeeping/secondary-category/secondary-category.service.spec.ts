import { TestBed } from '@angular/core/testing';

import { SecondaryCategoryService } from './secondary-category.service';

describe('SecondaryCategoryService', () => {
  let service: SecondaryCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
