import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportConvoPage } from './report-convo.page';

describe('ReportConvoPage', () => {
  let component: ReportConvoPage;
  let fixture: ComponentFixture<ReportConvoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportConvoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportConvoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
