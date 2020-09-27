import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FairStudentRegisterPage } from './fair-student-register.page';

describe('FairStudentRegisterPage', () => {
  let component: FairStudentRegisterPage;
  let fixture: ComponentFixture<FairStudentRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairStudentRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FairStudentRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
