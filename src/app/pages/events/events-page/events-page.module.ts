import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPagePageRoutingModule } from './events-page-routing.module';

import { EventsPagePage } from './events-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPagePageRoutingModule
  ],
  declarations: [EventsPagePage]
})
export class EventsPagePageModule {}
