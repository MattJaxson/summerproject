import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairStudentRegisterPageRoutingModule } from './fair-student-register-routing.module';

import { FairStudentRegisterPage } from './fair-student-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FairStudentRegisterPageRoutingModule
  ],
  declarations: [FairStudentRegisterPage]
})
export class FairStudentRegisterPageModule {}
