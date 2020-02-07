import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairPagePage } from './fair-page.page';

const routes: Routes = [
  {
    path: '',
    component: FairPagePage
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'chaperones',
    loadChildren: () => import('./chaperones/chaperones.module').then( m => m.ChaperonesPageModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./partners/partners.module').then( m => m.PartnersPageModule)
  },
  {
    path: 'volunteer',
    loadChildren: () => import('./volunteer/volunteer.module').then( m => m.VolunteerPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./volunteers/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./volunteers/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'volunteers',
    loadChildren: () => import('./volunteers/volunteers.module').then( m => m.VolunteersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairPagePageRoutingModule {}
