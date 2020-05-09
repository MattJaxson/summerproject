import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../../components/custom-component.module';

import { IonicModule } from '@ionic/angular';

import { FollowingPageRoutingModule } from './following-routing.module';

import { FollowingPage } from './following.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    FollowingPageRoutingModule
  ],
  declarations: [FollowingPage]
})
export class FollowingPageModule {}
