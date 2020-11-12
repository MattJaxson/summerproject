import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewResumePageRoutingModule } from './view-resume-routing.module';

import { ViewResumePage } from './view-resume.page';
import { UploadResumeModalPageModule } from '../upload-resume-modal/upload-resume-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewResumePageRoutingModule,
    UploadResumeModalPageModule
  ],
  declarations: [ViewResumePage]
})
export class ViewResumePageModule {}
