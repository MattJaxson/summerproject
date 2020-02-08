import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaperonesPageRoutingModule } from './chaperones-routing.module';

import { ChaperonesPage } from './chaperones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ChaperonesPageRoutingModule
  ],
  declarations: [ChaperonesPage]
})
export class ChaperonesPageModule {}
