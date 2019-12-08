import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyConfirmPageRoutingModule } from './apply-confirm-routing.module';

import { ApplyConfirmPage } from './apply-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyConfirmPageRoutingModule
  ],
  declarations: [ApplyConfirmPage]
})
export class ApplyConfirmPageModule {}
