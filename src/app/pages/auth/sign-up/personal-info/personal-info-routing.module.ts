import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoPage } from './personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoPage
  },
  {
    path: 'profile-picture',
    loadChildren: () => import('../profile-picture/profile-picture.module').then(m => m.ProfilePicturePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoPageRoutingModule {}
