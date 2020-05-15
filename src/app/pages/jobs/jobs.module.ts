import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsPage } from './jobs.page';
import { JobsPageRoutingModule } from './jobs-routing.module';
import { CustomComponentsModule } from '../../components/custom-component.module';


@NgModule({
  imports: [
    IonicModule,
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JobsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: JobsPage }])
  ],
  declarations: [
    JobsPage]
})
export class JobsPageModule {}
