import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FairChaperoneRegisterPage } from './fair-chaperone-register.page';

describe('FairChaperoneRegisterPage', () => {
  let component: FairChaperoneRegisterPage;
  let fixture: ComponentFixture<FairChaperoneRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairChaperoneRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FairChaperoneRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
