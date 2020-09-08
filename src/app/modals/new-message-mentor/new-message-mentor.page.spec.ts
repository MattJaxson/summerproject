import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMessageMentorPage } from './new-message-mentor.page';

describe('NewMessageMentorPage', () => {
  let component: NewMessageMentorPage;
  let fixture: ComponentFixture<NewMessageMentorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessageMentorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMessageMentorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
