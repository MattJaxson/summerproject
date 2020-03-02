import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairPagePage } from './fair-page.page';

const routes: Routes = [
  {
    path: '',
    component: FairPagePage
  },
  {
    path: 'students/:id',
    loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'chaperones/:id',
    loadChildren: () => import('./chaperones/chaperones.module').then( m => m.ChaperonesPageModule)
  },
  {
    path: 'partners/:id',
    loadChildren: () => import('./partners/partners.module').then( m => m.PartnersPageModule)
  },
  {
    path: 'volunteers/:id',
    loadChildren: () => import('./volunteers/volunteers.module').then( m => m.VolunteersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairPagePageRoutingModule {}
