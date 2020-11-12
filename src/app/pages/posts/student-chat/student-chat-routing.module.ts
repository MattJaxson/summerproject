import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentChatPage } from './student-chat.page';

const routes: Routes = [
  {
    path: '',
    component: StudentChatPage
  },
  {
    path: 'chat-page/:chatId/:fullName/:profilePicture/:email',
    loadChildren: () => import('./chat-page/chat-page.module').then( m => m.ChatPagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentChatPageRoutingModule {}
