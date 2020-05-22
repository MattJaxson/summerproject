import { TestBed } from '@angular/core/testing';

import { PostPageEmitterService } from './post-page-emitter.service';

describe('PostPageEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostPageEmitterService = TestBed.get(PostPageEmitterService);
    expect(service).toBeTruthy();
  });
});
