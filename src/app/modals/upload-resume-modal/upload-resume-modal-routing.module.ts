import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadResumeModalPage } from './upload-resume-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UploadResumeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadResumeModalPageRoutingModule {}
