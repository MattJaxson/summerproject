import { TestBed } from '@angular/core/testing';

import { MentorChatService } from './mentor-chat.service';

describe('MentorChatService', () => {
  let service: MentorChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
