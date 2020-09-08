import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorChatPageRoutingModule } from './mentor-chat-routing.module';


import { MentorChatPage } from './mentor-chat.page';
import { NewMessageMentorPageModule } from 'src/app/modals/new-message-mentor/new-message-mentor.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorChatPageRoutingModule,
    NewMessageMentorPageModule
  ],
  declarations: [MentorChatPage]
})
export class MentorChatPageModule {}
