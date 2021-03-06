import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpDownVoteButtonsComponent } from './up-down-vote-buttons.component';

describe('UpDownVoteButtonsComponent', () => {
  let component: UpDownVoteButtonsComponent;
  let fixture: ComponentFixture<UpDownVoteButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownVoteButtonsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpDownVoteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
