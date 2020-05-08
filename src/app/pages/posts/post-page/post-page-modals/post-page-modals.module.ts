import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReportModalPage } from './report-modal/report-modal.page';

@NgModule({
  imports: [
      CommonModule,
      IonicModule.forRoot()
   ],
  declarations: [
    ReportModalPage
  ],
  exports: [
    ReportModalPage
  ]
})
export class PostPageModalsModule {}
