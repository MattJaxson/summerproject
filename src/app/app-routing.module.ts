import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    // loadChildren: () => import('./pages/auth/sign-up/personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
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
  },
  {
    path: 'report-convo',
    loadChildren: () => import('./modals/report-convo/report-convo.module').then( m => m.ReportConvoPageModule)
  },
  {
    path: 'new-message-student',
    loadChildren: () => import('./modals/new-message-student/new-message-student.module').then( m => m.NewMessageStudentPageModule)
  },
  {
    path: 'new-message-mentor',
    loadChildren: () => import('./modals/new-message-mentor/new-message-mentor.module').then( m => m.NewMessageMentorPageModule)
  },
  {
    path: 'report-convo-mentor',
    loadChildren: () => import('./modals/report-convo-mentor/report-convo-mentor.module').then( m => m.ReportConvoMentorPageModule)
  },
  {
    path: 'upload-resume-modal',
    loadChildren: () => import('./modals/upload-resume-modal/upload-resume-modal.module').then( m => m.UploadResumeModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
