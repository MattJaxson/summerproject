import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairStudentRegisterPage } from './fair-student-register.page';

const routes: Routes = [
  {
    path: '',
    component: FairStudentRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairStudentRegisterPageRoutingModule {}
