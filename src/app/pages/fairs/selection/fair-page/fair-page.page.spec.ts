import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FairPagePage } from './fair-page.page';

describe('FairPagePage', () => {
  let component: FairPagePage;
  let fixture: ComponentFixture<FairPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FairPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
