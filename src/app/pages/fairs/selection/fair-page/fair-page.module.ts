import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairPagePageRoutingModule } from './fair-page-routing.module';

import { FairPagePage } from './fair-page.page';
import { FairStudentRegisterPageModule } from 'src/app/modals/fair-student-register/fair-student-register.module';
import { FairChaperoneRegisterPageModule } from 'src/app/modals/fair-chaperone-register/fair-chaperone-register.module';
import { FairVolunteerRegisterPageModule } from 'src/app/modals/fair-volunteer-register/fair-volunteer-register.module';
import { FairPartnerRegisterPageModule } from 'src/app/modals/fair-partner-register/fair-partner-register.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FairPagePageRoutingModule,
    FairStudentRegisterPageModule,
    FairChaperoneRegisterPageModule,
    FairVolunteerRegisterPageModule,
    FairPartnerRegisterPageModule

  ],
  declarations: [FairPagePage]
})
export class FairPagePageModule {}
