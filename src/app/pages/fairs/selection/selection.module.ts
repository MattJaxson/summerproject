import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionPageRoutingModule } from './selection-routing.module';

import { SelectionPage } from './selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SelectionPageRoutingModule
  ],
  declarations: [SelectionPage]
})
export class SelectionPageModule {}
