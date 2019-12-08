import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
