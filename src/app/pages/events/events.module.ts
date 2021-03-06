import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomComponentsModule } from '../../components/custom-component.module';
import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';

@NgModule({
  imports: [
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: EventsPage }])  ],
  declarations: [
    EventsPage
    ]
})
export class EventsPageModule {}
