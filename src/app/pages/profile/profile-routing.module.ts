import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'change-email',
    loadChildren: () => import('./change-email/change-email/change-email.module').then( m => m.ChangeEmailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-phone',
    loadChildren: () => import('./change-phone/change-phone/change-phone.module').then( m => m.ChangePhonePageModule)
  },
  {
    path: 'change-school',
    loadChildren: () => import('./change-school/change-school/change-school.module').then( m => m.ChangeSchoolPageModule)
  },
  {
    path: 'change-profile-picture',
    loadChildren: () => import('./change-profile-picture/change-profile-picture/change-profile-picture.module').then( m => m.ChangeProfilePicturePageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout/logout.module').then( m => m.LogoutPageModule)
  },
  // Keep Resume pages seperate?
  {
    path: 'view-resume',
    loadChildren: () => import('./resume/view-resume/view-resume.module').then( m => m.ViewResumePageModule)
  },
  {
    path: 'update-resume',
    loadChildren: () => import('./resume/update-resume/update-resume.module').then( m => m.UpdateResumePageModule)
  },
  // Combine with profile pictures directory?
  {
    path: 'confirm-photo',
    loadChildren: () => import('./change-profile-picture/confirm-photo/confirm-photo.module').then( m => m.ConfirmPhotoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
