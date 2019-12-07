import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterEmailPage } from './enter-email.page';

const routes: Routes = [
  // 1st of 3 forgot password pages
  {
    path: '',
    component: EnterEmailPage
  },

  //  to new password page
  {
    path: 'new-password',
    loadChildren: () => import('../../forgot-password/new-password/new-password.module').then(m => m.NewPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterEmailPageRoutingModule {}
