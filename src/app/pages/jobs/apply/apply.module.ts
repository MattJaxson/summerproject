import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ApplyPageRoutingModule } from './apply-routing.module';

import { ApplyPage } from './apply.page';
import { ViewResumePageModule } from 'src/app/modals/view-resume/view-resume.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ApplyPageRoutingModule,
    ViewResumePageModule
  ],
  declarations: [ApplyPage]
})
export class ApplyPageModule {}
