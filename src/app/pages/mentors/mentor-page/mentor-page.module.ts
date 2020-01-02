import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorPagePageRoutingModule } from './mentor-page-routing.module';

import { MentorPagePage } from './mentor-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorPagePageRoutingModule
  ],
  declarations: [MentorPagePage]
})
export class MentorPagePageModule {}
