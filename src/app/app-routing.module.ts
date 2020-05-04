import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
    // loadChildren: () => import('./pages/auth/forgot-password/confirm/confirm.module').then( m => m.ConfirmPageModule)
    // loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
    // loadChildren: () => import('./pages/auth/sign-up/profile-picture/profile-picture.module').then( m => m.ProfilePicturePageModule)
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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
