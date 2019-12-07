import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewResumePageRoutingModule } from './view-resume-routing.module';

import { ViewResumePage } from './view-resume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewResumePageRoutingModule
  ],
  declarations: [ViewResumePage]
})
export class ViewResumePageModule {}
