import { TestBed } from '@angular/core/testing';

import { EventsEventEmitterService } from './events-event-emitter.service';

describe('EventsEventEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsEventEmitterService = TestBed.get(EventsEventEmitterService);
    expect(service).toBeTruthy();
  });
});
