import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentChatPage } from './student-chat.page';

describe('StudentChatPage', () => {
  let component: StudentChatPage;
  let fixture: ComponentFixture<StudentChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
