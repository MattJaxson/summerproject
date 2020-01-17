import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowIconComponent } from './follow-icon.component';

describe('FollowIconComponent', () => {
  let component: FollowIconComponent;
  let fixture: ComponentFixture<FollowIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
