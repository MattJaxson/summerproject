import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaperonesPage } from './chaperones.page';

const routes: Routes = [
  {
    path: '',
    component: ChaperonesPage
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'booth-partners',
    loadChildren: () => import('./booth-partners/booth-partners.module').then( m => m.BoothPartnersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaperonesPageRoutingModule {}
