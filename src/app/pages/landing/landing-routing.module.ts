import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';
import { StudentsPage } from '../fairs/fair-page/students/students.page';


const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'fairs/fair-page/students/:id',
    component: StudentsPage
  },
  // {
  //   path: 'chaperones/:id',
  //   loadChildren: () => import('./chaperones/chaperones.module').then( m => m.ChaperonesPageModule)
  // },
  // {
  //   path: 'partners/:id',
  //   loadChildren: () => import('./partners/partners.module').then( m => m.PartnersPageModule)
  // },
  // {
  //   path: 'volunteers/:id',
  //   loadChildren: () => import('./volunteers/volunteers.module').then( m => m.VolunteersPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
