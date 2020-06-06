import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadResumePageRoutingModule } from './upload-resume-routing.module';

import { UploadResumePage } from './upload-resume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UploadResumePageRoutingModule
  ],
  declarations: [UploadResumePage]
})
export class UploadResumePageModule {}
