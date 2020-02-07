import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoothPartnersPage } from './booth-partners.page';

describe('BoothPartnersPage', () => {
  let component: BoothPartnersPage;
  let fixture: ComponentFixture<BoothPartnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoothPartnersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoothPartnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
