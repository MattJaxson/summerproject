import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';

import { StudentsPageModule } from '../fairs/fair-page/students/students.module';
import { ChaperonesPageModule } from '../fairs/fair-page/chaperones/chaperones.module';
import { VolunteersPageModule } from '../fairs/fair-page/volunteers/volunteers.module';
import { PartnersPageModule } from '../fairs/fair-page/partners/partners.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsPageModule,
    ChaperonesPageModule,
    VolunteersPageModule,
    PartnersPageModule,
    LandingPageRoutingModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
