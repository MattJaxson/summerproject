import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadResumeModalPageRoutingModule } from './upload-resume-modal-routing.module';

import { UploadResumeModalPage } from './upload-resume-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadResumeModalPageRoutingModule
  ],
  declarations: [UploadResumeModalPage]
})
export class UploadResumeModalPageModule {}
