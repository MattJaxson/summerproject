import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewResumePage } from './view-resume.page';

const routes: Routes = [
  {
    path: '',
    component: ViewResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewResumePageRoutingModule {}
