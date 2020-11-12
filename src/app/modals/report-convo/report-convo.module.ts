import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportConvoPageRoutingModule } from './report-convo-routing.module';

import { ReportConvoPage } from './report-convo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportConvoPageRoutingModule
  ],
  declarations: [ReportConvoPage]
})
export class ReportConvoPageModule {}
