import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMessageMentorPage } from './new-message-mentor.page';

const routes: Routes = [
  {
    path: '',
    component: NewMessageMentorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMessageMentorPageRoutingModule {}
