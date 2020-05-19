import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReplyCommentPage } from './reply-comment.page';

describe('ReplyCommentPage', () => {
  let component: ReplyCommentPage;
  let fixture: ComponentFixture<ReplyCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReplyCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
