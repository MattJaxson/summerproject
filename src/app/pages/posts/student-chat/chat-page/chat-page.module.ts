import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonBottomDrawerModule } from 'ion-bottom-drawer';

import { ChatPagePageRoutingModule } from './chat-page-routing.module';

import { ChatPagePage } from './chat-page.page';
import { ReportConvoPageModule } from 'src/app/modals/report-convo/report-convo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBottomDrawerModule,
    ChatPagePageRoutingModule,
    ReportConvoPageModule,
  ],
  declarations: [ChatPagePage]
})
export class ChatPagePageModule {}
