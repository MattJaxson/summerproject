import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeSchoolPage } from './change-school.page';

describe('ChangeSchoolPage', () => {
  let component: ChangeSchoolPage;
  let fixture: ComponentFixture<ChangeSchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSchoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
