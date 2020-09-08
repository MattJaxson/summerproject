import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMessageStudentPageRoutingModule } from './new-message-student-routing.module';

import { NewMessageStudentPage } from './new-message-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMessageStudentPageRoutingModule
  ],
  declarations: [NewMessageStudentPage]
})
export class NewMessageStudentPageModule {}
