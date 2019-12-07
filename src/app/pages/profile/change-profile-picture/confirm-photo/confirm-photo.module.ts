import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPhotoPageRoutingModule } from './confirm-photo-routing.module';

import { ConfirmPhotoPage } from './confirm-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPhotoPageRoutingModule
  ],
  declarations: [ConfirmPhotoPage]
})
export class ConfirmPhotoPageModule {}
