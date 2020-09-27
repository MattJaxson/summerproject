import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FairPagePageModule } from './fair-page/fair-page.module';
import { FairPagePage } from './fair-page/fair-page.page';

import { SelectionPage } from './selection.page';

const routes: Routes = [
  {
    path: '',
    // Delete FairPapge and replace with SelectionPage
    component: FairPagePage
  },

  {
    path: 'fair-page/:fair/:usertype',
    loadChildren: () => import('./fair-page/fair-page.module').then( m => m.FairPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FairPagePageModule],
  exports: [RouterModule],
})
export class SelectionPageRoutingModule {}
