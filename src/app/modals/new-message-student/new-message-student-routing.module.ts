import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMessageStudentPage } from './new-message-student.page';

const routes: Routes = [
  {
    path: '',
    component: NewMessageStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMessageStudentPageRoutingModule {}
