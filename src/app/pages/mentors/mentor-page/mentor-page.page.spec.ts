import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentorPagePage } from './mentor-page.page';

describe('MentorPagePage', () => {
  let component: MentorPagePage;
  let fixture: ComponentFixture<MentorPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentorPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
