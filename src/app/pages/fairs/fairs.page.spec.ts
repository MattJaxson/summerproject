import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FairsPage } from './fairs.page';

describe('FairsPage', () => {
  let component: FairsPage;
  let fixture: ComponentFixture<FairsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FairsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
