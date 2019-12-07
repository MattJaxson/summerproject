import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeSchoolPage } from './change-school.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeSchoolPage
  },
  {
    path: 'confirm',
    loadChildren: () => import('../confirm/confirm.module').then( m => m.ConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeSchoolPageRoutingModule {}
