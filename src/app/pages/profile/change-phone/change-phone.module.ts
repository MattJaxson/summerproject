import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePhonePageRoutingModule } from './change-phone-routing.module';

import { ChangePhonePage } from './change-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChangePhonePageRoutingModule
  ],
  declarations: [ChangePhonePage]
})
export class ChangePhonePageModule {}
