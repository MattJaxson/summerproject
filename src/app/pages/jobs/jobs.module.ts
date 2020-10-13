import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsPage } from './jobs.page';
import { JobsPageRoutingModule } from './jobs-routing.module';
import { CustomComponentsModule } from '../../components/custom-component.module';
import { ViewResumePageModule } from '../profile/resume/view-resume/view-resume.module';


@NgModule({
  imports: [
    IonicModule,
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JobsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: JobsPage }]),
    ViewResumePageModule
  ],
  declarations: [
    JobsPage]
})
export class JobsPageModule {}
