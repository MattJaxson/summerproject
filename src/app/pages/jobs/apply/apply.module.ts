import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyPageRoutingModule } from './apply-routing.module';

import { ApplyPage } from './apply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ApplyPageRoutingModule
  ],
  declarations: [ApplyPage]
})
export class ApplyPageModule {}
