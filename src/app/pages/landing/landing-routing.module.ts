import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';
import { StudentsPage } from '../fairs/fair-page/students/students.page';
import { ChaperonesPage } from '../fairs/fair-page/chaperones/chaperones.page';
import { VolunteersPage } from '../fairs/fair-page/volunteers/volunteers.page';
import { PartnersPage } from '../fairs/fair-page/partners/partners.page';


const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'fairs/fair-page/students/:id',
    component: StudentsPage
  },
  {
    path: 'fairs/fair-page/chaperones/:id',
    component: ChaperonesPage
  },
  {
    path: 'fairs/fair-page/partners/:id',
    component: PartnersPage
  },
  {
    path: 'fairs/fair-page/volunteers/:id',
    component: VolunteersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
