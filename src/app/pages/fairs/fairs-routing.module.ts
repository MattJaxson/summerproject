import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairsPage } from './fairs.page';

const routes: Routes = [
  {
    path: '',
    component: FairsPage
  },
  {
    path: 'fair-page',
    loadChildren: () => import('./fair-page/fair-page.module').then( m => m.FairPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairsPageRoutingModule {}
