import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeProfilePicturePage } from './change-profile-picture.page';

describe('ChangeProfilePicturePage', () => {
  let component: ChangeProfilePicturePage;
  let fixture: ComponentFixture<ChangeProfilePicturePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProfilePicturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeProfilePicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
