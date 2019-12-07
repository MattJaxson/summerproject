import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterCodePageRoutingModule } from './enter-code-routing.module';

import { EnterCodePage } from './enter-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EnterCodePageRoutingModule
  ],
  declarations: [EnterCodePage]
})
export class EnterCodePageModule {}
