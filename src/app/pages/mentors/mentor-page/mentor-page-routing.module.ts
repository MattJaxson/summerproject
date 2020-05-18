import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorPagePage } from './mentor-page.page';

const routes: Routes = [
  {
    path: '',
    component: MentorPagePage
  },
  {
    path: 'contact-mentor/:name/:email/:photo',
    loadChildren: () => import('./contact-mentor/contact-mentor.module').then( m => m.ContactMentorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorPagePageRoutingModule {}
