import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateResumePageRoutingModule } from './update-resume-routing.module';

import { UpdateResumePage } from './update-resume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateResumePageRoutingModule
  ],
  declarations: [UpdateResumePage]
})
export class UpdateResumePageModule {}
