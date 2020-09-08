import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatPagePage } from './chat-page.page';

describe('ChatPagePage', () => {
  let component: ChatPagePage;
  let fixture: ComponentFixture<ChatPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
