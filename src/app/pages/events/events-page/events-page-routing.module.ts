import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPagePage } from './events-page.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPagePageRoutingModule {}
