import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeAboutPageRoutingModule } from './change-about-routing.module';

import { ChangeAboutPage } from './change-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChangeAboutPageRoutingModule
  ],
  declarations: [ChangeAboutPage]
})
export class ChangeAboutPageModule {}
