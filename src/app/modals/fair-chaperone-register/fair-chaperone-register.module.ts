import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairChaperoneRegisterPageRoutingModule } from './fair-chaperone-register-routing.module';

import { FairChaperoneRegisterPage } from './fair-chaperone-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FairChaperoneRegisterPageRoutingModule
  ],
  declarations: [FairChaperoneRegisterPage]
})
export class FairChaperoneRegisterPageModule {}
