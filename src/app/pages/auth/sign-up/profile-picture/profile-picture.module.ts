import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePicturePageRoutingModule } from './profile-picture-routing.module';

import { ProfilePicturePage } from './profile-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePicturePageRoutingModule
  ],
  declarations: [ProfilePicturePage]
})
export class ProfilePicturePageModule {}
