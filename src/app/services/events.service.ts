import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  eventsGoing$ = new BehaviorSubject([]);
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {}

  getEvents() {
    console.log('Getting Events');
    return this.http.get(`${this.BACKEND_URL}/api/events`);
  }

  getEventsGoing(id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/events-going`, {id});
  }

  goingToEvent(eventID, userEmail, id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/go-to-event`, {
      userEmail,
      eventID,
      id});
  }

  notGoingToEvent(eventID, userEmail, id) {
    return this.http.post(`${this.BACKEND_URL}/api/events/dont-go-to-event`,  {
      userEmail,
      eventID,
      id});
  }

}

