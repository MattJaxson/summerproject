import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoingPage } from './going.page';

const routes: Routes = [
  {
    path: '',
    component: GoingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoingPageRoutingModule {}
