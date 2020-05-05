import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  eventsGoing$ = new BehaviorSubject([]);
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient,
    private profile: ProfileService
  ) {}

  getEvents() {
    console.log('Getting Events');
    return this.http.get(`${this.BACKEND_URL}/api/events`);
  }

  getEventsGoing(id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/events-going`, {_id: id});
  }

  goingToEvent(eventID, userEmail, id) {

    console.log(this.profile);
    return this.http.post(`${this.BACKEND_URL}/api/events/go-to-event`, { eventID, userEmail, id });
  }

  notGoingToEvent(eventID, userEmail, id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/dont-go-to-event`,  {
      userEmail,
      eventID,
      id});
  }

}

