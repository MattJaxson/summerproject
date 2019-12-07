import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateResumePage } from './update-resume.page';

describe('UpdateResumePage', () => {
  let component: UpdateResumePage;
  let fixture: ComponentFixture<UpdateResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResumePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
