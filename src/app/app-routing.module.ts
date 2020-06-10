import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./modals/image-cropper/image-cropper.module').then( m => m.ImageCropperPageModule)
    // loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
    // loadChildren: () => import('./pages/auth/forgot-password/confirm/confirm.module').then( m => m.ConfirmPageModule)
    // loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
    // loadChildren: () => import('./pages/auth/sign-up/upload-resume/upload-resume.module').then( m => m.UploadResumePageModule)
    loadChildren: () => import('./pages/auth/sign-up/profile-picture/profile-picture.module').then( m => m.ProfilePicturePageModule)
    // loadChildren: () => import('./pages/auth/sign-up/personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
    // loadChildren: () => import('./pages/auth/sign-up/login-credentials/login-credentials.module').then( m => m.LoginCredentialsPageModule)
    // loadChildren: () => import('./pages/auth/sign-up/enter-code/enter-code.module').then( m => m.EnterCodePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuardService]
  },
 // Change to sign up path name later
 {
  path: 'personal-info',
  loadChildren: () => import('./pages/auth/sign-up/personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
},
//  change to forgot password path name later
{
  path: 'enter-email',
  loadChildren: () => import('./pages/auth/forgot-password/enter-email/enter-email.module').then(m => m.EnterEmailPageModule)
},
  {
    path: 'enter-code',
    loadChildren: () => import('./pages/auth/forgot-password/enter-code/enter-code.module').then( m => m.EnterCodePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'mentors',
    loadChildren: () => import('./pages/mentors/mentors.module').then( m => m.MentorsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'replies-page',
    loadChildren: () => import('./modals/replies-page/replies-page.module').then( m => m.RepliesPagePageModule)
  },
  {
    path: 'edit-post',
    loadChildren: () => import('./modals/edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'image-cropper',
    loadChildren: () => import('./modals/image-cropper/image-cropper.module').then( m => m.ImageCropperPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
