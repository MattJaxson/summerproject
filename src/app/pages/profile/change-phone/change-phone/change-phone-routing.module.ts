import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePhonePage } from './change-phone.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePhonePage
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
export class ChangePhonePageRoutingModule {}
