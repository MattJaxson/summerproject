import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsPage } from './jobs.page';
import { JobsPageRoutingModule } from './jobs-routing.module';
import { HeartIconComponent } from '../../components/heart-icon/heart-icon.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JobsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: JobsPage }])
  ],
  declarations: [
    JobsPage,
    HeartIconComponent]
})
export class HomePageModule {}
