import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportConvoMentorPage } from './report-convo-mentor.page';

describe('ReportConvoMentorPage', () => {
  let component: ReportConvoMentorPage;
  let fixture: ComponentFixture<ReportConvoMentorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportConvoMentorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportConvoMentorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
