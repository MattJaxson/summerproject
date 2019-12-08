import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyPage } from './apply.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPage
  },
  {
    path: 'apply-confirm/:id/:name/:posted/:companyName/:description',
    loadChildren: () => import('../apply-confirm/apply-confirm.module').then( m => m.ApplyConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyPageRoutingModule {}
