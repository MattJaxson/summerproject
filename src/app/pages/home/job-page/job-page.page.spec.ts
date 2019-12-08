import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobPagePage } from './job-page.page';

describe('JobPagePage', () => {
  let component: JobPagePage;
  let fixture: ComponentFixture<JobPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
