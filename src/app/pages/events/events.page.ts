import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  goingToEvent() {
    console.log('going to event ');
  }

  eventsPage() {
    this.router.navigate(['/home/events/events-page']);
  }

  going() {
    this.router.navigate(['/home/events/going']);
  }

}
