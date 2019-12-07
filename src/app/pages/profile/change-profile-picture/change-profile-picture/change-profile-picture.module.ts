import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeProfilePicturePageRoutingModule } from './change-profile-picture-routing.module';

import { ChangeProfilePicturePage } from './change-profile-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeProfilePicturePageRoutingModule
  ],
  declarations: [ChangeProfilePicturePage]
})
export class ChangeProfilePicturePageModule {}
