import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairChaperoneRegisterPage } from './fair-chaperone-register.page';

const routes: Routes = [
  {
    path: '',
    component: FairChaperoneRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairChaperoneRegisterPageRoutingModule {}
