import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeAddressPage } from './change-address.page';

describe('ChangeAddressPage', () => {
  let component: ChangeAddressPage;
  let fixture: ComponentFixture<ChangeAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
