import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../components/custom-component.module';
import { IonicModule } from '@ionic/angular';

import { MentorsPageRoutingModule } from './mentors-routing.module';

import { MentorsPage } from './mentors.page';

@NgModule({
  imports: [
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MentorsPageRoutingModule
  ],
  declarations: [MentorsPage]
})
export class MentorsPageModule {}
