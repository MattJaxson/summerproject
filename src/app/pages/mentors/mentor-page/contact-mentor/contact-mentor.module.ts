import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactMentorPageRoutingModule } from './contact-mentor-routing.module';

import { ContactMentorPage } from './contact-mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactMentorPageRoutingModule
  ],
  declarations: [ContactMentorPage]
})
export class ContactMentorPageModule {}
