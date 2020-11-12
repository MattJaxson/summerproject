import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportConvoPage } from './report-convo.page';

const routes: Routes = [
  {
    path: '',
    component: ReportConvoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportConvoPageRoutingModule {}
