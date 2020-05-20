import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportCommentPage } from './report-comment.page';

const routes: Routes = [
  {
    path: '',
    component: ReportCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportCommentPageRoutingModule {}
