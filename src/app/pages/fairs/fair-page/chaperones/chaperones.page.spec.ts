import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChaperonesPage } from './chaperones.page';

describe('ChaperonesPage', () => {
  let component: ChaperonesPage;
  let fixture: ComponentFixture<ChaperonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaperonesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChaperonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
