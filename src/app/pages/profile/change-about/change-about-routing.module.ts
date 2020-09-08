import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeAboutPage } from './change-about.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeAboutPageRoutingModule {}
