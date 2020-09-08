import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentorChatPage } from './mentor-chat.page';

describe('MentorChatPage', () => {
  let component: MentorChatPage;
  let fixture: ComponentFixture<MentorChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentorChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
