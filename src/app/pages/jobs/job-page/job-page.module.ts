import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../components/shared.module';


import { IonicModule } from '@ionic/angular';

import { JobPagePageRoutingModule } from './job-page-routing.module';

import { JobPagePage } from './job-page.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JobPagePageRoutingModule
  ],
  declarations: [JobPagePage]
})
export class JobPagePageModule {}
