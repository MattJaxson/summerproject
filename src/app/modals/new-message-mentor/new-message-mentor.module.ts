import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMessageMentorPageRoutingModule } from './new-message-mentor-routing.module';

import { NewMessageMentorPage } from './new-message-mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMessageMentorPageRoutingModule
  ],
  declarations: [NewMessageMentorPage]
})
export class NewMessageMentorPageModule {}
