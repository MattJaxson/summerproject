import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeProfilePicturePageRoutingModule } from './change-profile-picture-routing.module';

import { ChangeProfilePicturePage } from './change-profile-picture.page';
import { ImageCropperPageModule } from 'src/app/modals/image-cropper/image-cropper.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeProfilePicturePageRoutingModule,
    ImageCropperPageModule
  ],
  declarations: [ChangeProfilePicturePage]
})
export class ChangeProfilePicturePageModule {}
