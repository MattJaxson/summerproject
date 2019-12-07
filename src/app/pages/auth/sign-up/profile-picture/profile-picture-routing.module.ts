import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePicturePage } from './profile-picture.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePicturePage
  },
  {
    path: 'upload-resume',
    loadChildren: () => import('../upload-resume/upload-resume.module').then(m => m.UploadResumePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePicturePageRoutingModule {}
