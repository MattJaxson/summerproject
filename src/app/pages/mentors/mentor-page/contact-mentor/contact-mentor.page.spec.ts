import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactMentorPage } from './contact-mentor.page';

describe('ContactMentorPage', () => {
  let component: ContactMentorPage;
  let fixture: ComponentFixture<ContactMentorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMentorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactMentorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
