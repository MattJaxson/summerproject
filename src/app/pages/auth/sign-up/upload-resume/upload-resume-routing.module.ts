import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadResumePage } from './upload-resume.page';

const routes: Routes = [
  {
    path: '',
    component: UploadResumePage
  },
  {
    path: 'login-credentials',
    loadChildren: () => import('../login-credentials/login-credentials.module').then(m => m.LoginCredentialsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadResumePageRoutingModule {}
