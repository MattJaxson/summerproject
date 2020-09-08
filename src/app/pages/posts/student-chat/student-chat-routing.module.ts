import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentChatPage } from './student-chat.page';

const routes: Routes = [
  {
    path: '',
    component: StudentChatPage
  },
  {
    path: 'chat-page',
    loadChildren: () => import('./chat-page/chat-page.module').then( m => m.ChatPagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentChatPageRoutingModule {}
