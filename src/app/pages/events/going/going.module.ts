import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoingPageRoutingModule } from './going-routing.module';

import { GoingPage } from './going.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoingPageRoutingModule
  ],
  declarations: [GoingPage]
})
export class GoingPageModule {}
