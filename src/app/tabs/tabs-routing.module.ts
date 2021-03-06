import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/posts',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'jobs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/jobs/jobs.module').then(m => m.JobsPageModule)
          }
        ]
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/posts/posts.module').then(m => m.PostPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/events/events.module').then(m => m.EventsPageModule)
          }
        ]
      },
      {
        path: 'mentors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/mentors/mentors.module').then(m => m.MentorsPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
