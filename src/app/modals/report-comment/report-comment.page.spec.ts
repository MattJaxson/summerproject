import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportCommentPage } from './report-comment.page';

describe('ReportCommentPage', () => {
  let component: ReportCommentPage;
  let fixture: ComponentFixture<ReportCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
