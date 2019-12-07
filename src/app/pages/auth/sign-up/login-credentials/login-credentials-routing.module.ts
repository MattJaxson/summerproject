import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCredentialsPage } from './login-credentials.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCredentialsPage
  },
  {
    path: 'enter-code',
    loadChildren: () => import('../enter-code/enter-code.module').then(m => m.EnterCodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCredentialsPageRoutingModule {}
