import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPage } from './confirm.page';

const routes: Routes = [
  // Last page of forgot password route
  {
    path: '',
    component: ConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPageRoutingModule {}
