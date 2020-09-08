import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../components/custom-component.module';

import { IonicModule } from '@ionic/angular';

import { ThirdPersonProfilePageRoutingModule } from './third-person-profile-routing.module';

import { ThirdPersonProfilePage } from './third-person-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomComponentsModule,
    IonicModule,
    ThirdPersonProfilePageRoutingModule
  ],
  declarations: [ThirdPersonProfilePage]
})
export class ThirdPersonProfilePageModule {}
