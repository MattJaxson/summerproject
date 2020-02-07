import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairPagePageRoutingModule } from './fair-page-routing.module';

import { FairPagePage } from './fair-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FairPagePageRoutingModule
  ],
  declarations: [FairPagePage]
})
export class FairPagePageModule {}
