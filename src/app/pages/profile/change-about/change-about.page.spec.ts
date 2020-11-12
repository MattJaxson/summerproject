import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeAboutPage } from './change-about.page';

describe('ChangeAboutPage', () => {
  let component: ChangeAboutPage;
  let fixture: ComponentFixture<ChangeAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
