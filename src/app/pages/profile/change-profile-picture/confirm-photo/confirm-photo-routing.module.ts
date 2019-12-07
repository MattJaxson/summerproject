import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPhotoPage } from './confirm-photo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPhotoPageRoutingModule {}
