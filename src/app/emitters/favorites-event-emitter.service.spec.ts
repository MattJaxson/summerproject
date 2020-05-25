import { TestBed } from '@angular/core/testing';

import { FavoritesEventEmitterService } from './favorites-event-emitter.service';

describe('FavoritesEventEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesEventEmitterService = TestBed.get(FavoritesEventEmitterService);
    expect(service).toBeTruthy();
  });
});
