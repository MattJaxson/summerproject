import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairPartnerRegisterPageRoutingModule } from './fair-partner-register-routing.module';

import { FairPartnerRegisterPage } from './fair-partner-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FairPartnerRegisterPageRoutingModule
  ],
  declarations: [FairPartnerRegisterPage]
})
export class FairPartnerRegisterPageModule {}
