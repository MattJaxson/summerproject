import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairVolunteerRegisterPageRoutingModule } from './fair-volunteer-register-routing.module';

import { FairVolunteerRegisterPage } from './fair-volunteer-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FairVolunteerRegisterPageRoutingModule
  ],
  declarations: [FairVolunteerRegisterPage]
})
export class FairVolunteerRegisterPageModule {}
