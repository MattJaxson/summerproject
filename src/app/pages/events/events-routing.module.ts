import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: 'events-page/:id/:title/:organizer/:location/:date/:description/:photo',
    loadChildren: () => import('./events-page/events-page.module').then( m => m.EventsPagePageModule)
  },
  {
    path: 'going',
    loadChildren: () => import('./going/going.module').then( m => m.GoingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
