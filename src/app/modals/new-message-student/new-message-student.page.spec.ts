import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMessageStudentPage } from './new-message-student.page';

describe('NewMessageStudentPage', () => {
  let component: NewMessageStudentPage;
  let fixture: ComponentFixture<NewMessageStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessageStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMessageStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
