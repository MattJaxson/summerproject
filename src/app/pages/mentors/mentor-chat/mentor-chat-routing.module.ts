import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorChatPage } from './mentor-chat.page';

const routes: Routes = [
  {
    path: '',
    component: MentorChatPage
  },
  {
    path: 'chat-page',
    loadChildren: () => import('./chat-page/chat-page.module').then( m => m.ChatPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorChatPageRoutingModule {}
