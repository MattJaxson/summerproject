import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterEmailPage } from './enter-email.page';

describe('EnterEmailPage', () => {
  let component: EnterEmailPage;
  let fixture: ComponentFixture<EnterEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
