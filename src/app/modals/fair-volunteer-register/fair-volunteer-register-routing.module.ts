import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairVolunteerRegisterPage } from './fair-volunteer-register.page';

const routes: Routes = [
  {
    path: '',
    component: FairVolunteerRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairVolunteerRegisterPageRoutingModule {}
