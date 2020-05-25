import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepliesPagePage } from './replies-page.page';

describe('RepliesPagePage', () => {
  let component: RepliesPagePage;
  let fixture: ComponentFixture<RepliesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepliesPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepliesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
