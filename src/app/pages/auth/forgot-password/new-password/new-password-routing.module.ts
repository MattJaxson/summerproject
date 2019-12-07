import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPasswordPage } from './new-password.page';

const routes: Routes = [
  // 2nd of 3 forgot password pages
  {
    path: '',
    component: NewPasswordPage
  },

  // to the last page of forgot password route, "confirm"
  {
    path: 'confirm',
    loadChildren: () => import('../confirm/confirm.module').then(m => m.ConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPasswordPageRoutingModule {}
