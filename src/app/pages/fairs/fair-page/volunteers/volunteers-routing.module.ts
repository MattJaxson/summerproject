import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteersPage } from './volunteers.page';
import { LandingPage } from 'src/app/pages/landing/landing.page';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPage
  },
  {
    path: 'fairs/fair-page/volunteers/:id/register/:id',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'fairs/fair-page/volunteers/:id/parking/:id',
    loadChildren: () => import('./parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'fairs/fair-page/volunteers/:id/faq/:id',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteersPageRoutingModule {}
