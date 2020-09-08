import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentChatPageRoutingModule } from './student-chat-routing.module';

import { StudentChatPage } from './student-chat.page';
import { NewMessageStudentPageModule } from 'src/app/modals/new-message-student/new-message-student.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentChatPageRoutingModule,
    NewMessageStudentPageModule
  ],
  declarations: [StudentChatPage]
})
export class StudentChatPageModule {}
