import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FairVolunteerRegisterPage } from './fair-volunteer-register.page';

describe('FairVolunteerRegisterPage', () => {
  let component: FairVolunteerRegisterPage;
  let fixture: ComponentFixture<FairVolunteerRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairVolunteerRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FairVolunteerRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
