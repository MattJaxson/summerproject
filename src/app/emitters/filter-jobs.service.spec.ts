import { TestBed } from '@angular/core/testing';

import { FilterJobsService } from './filter-jobs.service';

describe('FilterJobsService', () => {
  let service: FilterJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
