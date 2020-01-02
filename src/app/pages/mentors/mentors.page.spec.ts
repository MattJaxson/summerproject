import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentorsPage } from './mentors.page';

describe('MentorsPage', () => {
  let component: MentorsPage;
  let fixture: ComponentFixture<MentorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
