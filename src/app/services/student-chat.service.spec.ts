import { TestBed } from '@angular/core/testing';

import { StudentChatService } from './student-chat.service';

describe('StudentChatService', () => {
  let service: StudentChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
