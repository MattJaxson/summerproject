import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewResumePage } from './view-resume.page';

describe('ViewResumePage', () => {
  let component: ViewResumePage;
  let fixture: ComponentFixture<ViewResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResumePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
