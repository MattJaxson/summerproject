import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairPagePage } from './fair-page.page';

const routes: Routes = [
  {
    path: '',
    component: FairPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairPagePageRoutingModule {}
