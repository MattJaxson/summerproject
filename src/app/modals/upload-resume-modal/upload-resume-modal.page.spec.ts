import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadResumeModalPage } from './upload-resume-modal.page';

describe('UploadResumeModalPage', () => {
  let component: UploadResumeModalPage;
  let fixture: ComponentFixture<UploadResumeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadResumeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
