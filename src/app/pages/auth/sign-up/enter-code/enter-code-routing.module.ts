import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterCodePage } from './enter-code.page';

const routes: Routes = [
  {
    path: '',
    component: EnterCodePage
  },
  {
    path: 'thank-you-page',
    loadChildren: () => import('../thank-you/thank-you.module').then(m => m.ThankYouPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterCodePageRoutingModule {}
