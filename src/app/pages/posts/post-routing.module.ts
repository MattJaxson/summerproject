import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsPage } from './posts.page';


const routes: Routes = [
  {
    path: '',
    component: PostsPage
  },
  {
    path: 'add-post',
    loadChildren: () => import('./add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'post-page/:_id',
    loadChildren: () => import('./post-page/post-page.module').then( m => m.PostPagePageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./following/following.module').then( m => m.FollowingPageModule)
  },
  {
    path: 'my-posts/:email',
    loadChildren: () => import('./my-posts/my-posts.module').then( m => m.MyPostsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'student-chat',
    loadChildren: () => import('./student-chat/student-chat.module').then( m => m.StudentChatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
