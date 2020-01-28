import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotGoingIconComponent } from './not-going-icon.component';

describe('NotGoingIconComponent', () => {
  let component: NotGoingIconComponent;
  let fixture: ComponentFixture<NotGoingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotGoingIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotGoingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
