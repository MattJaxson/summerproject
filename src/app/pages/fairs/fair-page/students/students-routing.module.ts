import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsPage } from './students.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsPage
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'booth-partners/:id',
    loadChildren: () => import('./booth-partners/booth-partners.module').then( m => m.BoothPartnersPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then( m => m.SurveyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsPageRoutingModule {}
