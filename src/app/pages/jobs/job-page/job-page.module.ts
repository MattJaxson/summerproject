import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../../components/custom-component.module';

import { IonicModule } from '@ionic/angular';

import { JobPagePageRoutingModule } from './job-page-routing.module';

import { JobPagePage } from './job-page.page';

@NgModule({
  imports: [
    CommonModule,
    CustomComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JobPagePageRoutingModule
  ],
  declarations: [JobPagePage]
})
export class JobPagePageModule {}
