import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorsPage } from './mentors.page';

const routes: Routes = [
  {
    path: '',
    component: MentorsPage
  },
  {
    path: 'mentor-page',
    loadChildren: () => import('./mentor-page/mentor-page.module').then( m => m.MentorPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorsPageRoutingModule {}
