import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoothPartnersPage } from './booth-partners.page';

const routes: Routes = [
  {
    path: '',
    component: BoothPartnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoothPartnersPageRoutingModule {}
