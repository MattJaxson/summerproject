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
    path: 'enter-code/:email',
    loadChildren: () => import('../../forgot-password/enter-code/enter-code.module').then(m => m.EnterCodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterEmailPageRoutingModule {}
