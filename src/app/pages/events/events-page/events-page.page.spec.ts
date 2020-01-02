import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsPagePage } from './events-page.page';

describe('EventsPagePage', () => {
  let component: EventsPagePage;
  let fixture: ComponentFixture<EventsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
