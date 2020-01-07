import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  allEvents;

  constructor(
    private router: Router,
    private events: EventsService) { }

  ngOnInit() {
    this.events.getEvents().subscribe( events => {
      this.allEvents = events;
      console.log(this.allEvents);
    });
  }

  goingToEvent() {
    console.log('going to event ');
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.organizer,  event.location,  event.date,  event.description, event.photo]);
  }

  going() {
    this.router.navigate(['/home/events/going']);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.events.getEvents().subscribe( events => {
     return this.allEvents = events;
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
