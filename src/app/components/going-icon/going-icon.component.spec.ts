import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoingIconComponent } from './going-icon.component';

describe('GoingIconComponent', () => {
  let component: GoingIconComponent;
  let fixture: ComponentFixture<GoingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
