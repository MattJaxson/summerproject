import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EnterCodePage } from './enter-code.page';

const routes: Routes = [
  {
    path: '',
    component: EnterCodePage
  },
  //  to new password page
  {
    path: 'new-password/:email',
    loadChildren: () => import('../../forgot-password/new-password/new-password.module').then(m => m.NewPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterCodePageRoutingModule {}
