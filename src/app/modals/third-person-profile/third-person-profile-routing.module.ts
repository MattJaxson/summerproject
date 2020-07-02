import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdPersonProfilePage } from './third-person-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdPersonProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdPersonProfilePageRoutingModule {}
