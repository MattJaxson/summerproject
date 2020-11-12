import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairPagePage } from './fair-page.page';

const routes: Routes = [
  {
    path: '',
    component: FairPagePage
  },
  {
    path: 'fair-page/:fair/:usertype/:summary/:description/:agenda/:faq',
    loadChildren: () => import('./fair-page.module').then( m => m.FairPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairPagePageRoutingModule {}
