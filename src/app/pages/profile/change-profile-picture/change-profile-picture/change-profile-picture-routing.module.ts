import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeProfilePicturePage } from './change-profile-picture.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeProfilePicturePage
  },
  {
    path: 'confirm',
    loadChildren: () => import('../confirm/confirm.module').then( m => m.ConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeProfilePicturePageRoutingModule {}
