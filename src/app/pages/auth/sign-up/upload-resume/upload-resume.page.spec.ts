import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadResumePage } from './upload-resume.page';

describe('UploadResumePage', () => {
  let component: UploadResumePage;
  let fixture: ComponentFixture<UploadResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
