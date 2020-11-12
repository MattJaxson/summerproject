import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdPersonProfilePage } from './third-person-profile.page';

describe('ThirdPersonProfilePage', () => {
  let component: ThirdPersonProfilePage;
  let fixture: ComponentFixture<ThirdPersonProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPersonProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdPersonProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
