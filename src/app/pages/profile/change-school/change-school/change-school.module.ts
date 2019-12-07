import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeSchoolPageRoutingModule } from './change-school-routing.module';

import { ChangeSchoolPage } from './change-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ChangeSchoolPageRoutingModule
  ],
  declarations: [ChangeSchoolPage]
})
export class ChangeSchoolPageModule {}
