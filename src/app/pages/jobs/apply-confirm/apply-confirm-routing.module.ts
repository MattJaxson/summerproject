import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyConfirmPage } from './apply-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyConfirmPageRoutingModule {}
