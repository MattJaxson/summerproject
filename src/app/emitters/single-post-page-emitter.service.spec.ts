import { TestBed } from '@angular/core/testing';

import { SinglePostPageEmitterService } from './single-post-page-emitter.service';

describe('SinglePostPageEmitterService', () => {
  let service: SinglePostPageEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePostPageEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
