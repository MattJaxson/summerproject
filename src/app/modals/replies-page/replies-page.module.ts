import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepliesPagePageRoutingModule } from './replies-page-routing.module';

import { RepliesPagePage } from './replies-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RepliesPagePageRoutingModule
  ],
  declarations: [RepliesPagePage]
})
export class RepliesPagePageModule {}
