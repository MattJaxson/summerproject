import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobPagePage } from './job-page.page';

const routes: Routes = [
  {
    path: '',
    component: JobPagePage
  },
  {
    path: 'apply/:title/:companyName/:companyEmail/:companyLogo/:rateOfPay',
    loadChildren: () => import('../apply/apply.module').then( m => m.ApplyPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPagePageRoutingModule {}
