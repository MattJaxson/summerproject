import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterEmailPageRoutingModule } from './enter-email-routing.module';

import { EnterEmailPage } from './enter-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EnterEmailPageRoutingModule
  ],
  declarations: [EnterEmailPage]
})
export class EnterEmailPageModule {}
