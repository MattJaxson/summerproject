import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportConvoMentorPageRoutingModule } from './report-convo-mentor-routing.module';

import { ReportConvoMentorPage } from './report-convo-mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportConvoMentorPageRoutingModule
  ],
  declarations: [ReportConvoMentorPage]
})
export class ReportConvoMentorPageModule {}
