import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateResumePage } from './update-resume.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateResumePageRoutingModule {}
