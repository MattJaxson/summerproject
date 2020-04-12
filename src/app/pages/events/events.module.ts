import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { GoingIconComponent } from '../../components/going-icon/going-icon.component';
import { NotGoingIconComponent } from '../../components/not-going-icon/not-going-icon.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: EventsPage }])  ],
  declarations: [
    EventsPage,
    GoingIconComponent,
    NotGoingIconComponent
    ]
})
export class EventsPageModule {}
