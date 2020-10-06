import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairStudentRegisterPageRoutingModule } from './fair-student-register-routing.module';

import { FairStudentRegisterPage } from './fair-student-register.page';

import { ImageCropperPageModule } from 'src/app/modals/image-cropper/image-cropper.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FairStudentRegisterPageRoutingModule,
    ImageCropperPageModule
  ],
  declarations: [FairStudentRegisterPage]
})
export class FairStudentRegisterPageModule {}
