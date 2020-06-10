import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePicturePageRoutingModule } from './profile-picture-routing.module';

import { ProfilePicturePage } from './profile-picture.page';
import { ImageCropperPageModule } from 'src/app/modals/image-cropper/image-cropper.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePicturePageRoutingModule,
    ImageCropperPageModule
  ],
  declarations: [ProfilePicturePage]
})
export class ProfilePicturePageModule {}
