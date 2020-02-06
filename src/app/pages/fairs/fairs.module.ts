import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairsPageRoutingModule } from './fairs-routing.module';

import { FairsPage } from './fairs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FairsPageRoutingModule
  ],
  declarations: [FairsPage]
})
export class FairsPageModule {}
