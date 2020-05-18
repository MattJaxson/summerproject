import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactMentorPage } from './contact-mentor.page';

const routes: Routes = [
  {
    path: '',
    component: ContactMentorPage
  },
  {
    path: 'confirm/:name/:email/:phone',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactMentorPageRoutingModule {}
