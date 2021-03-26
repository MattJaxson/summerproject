import { TestBed } from '@angular/core/testing';

import { FilterPostsService } from './filter-posts.service';

describe('FilterPostsService', () => {
  let service: FilterPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
