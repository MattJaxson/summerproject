import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoothPartnersPageRoutingModule } from './booth-partners-routing.module';

import { BoothPartnersPage } from './booth-partners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoothPartnersPageRoutingModule
  ],
  declarations: [BoothPartnersPage]
})
export class BoothPartnersPageModule {}
