import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeartIconComponent } from './heart-icon.component';

describe('HeartIconComponent', () => {
  let component: HeartIconComponent;
  let fixture: ComponentFixture<HeartIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
