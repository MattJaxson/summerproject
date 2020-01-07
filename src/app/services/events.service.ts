import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {}

  getEvents() {
    console.log('Getting Events');
    return this.http.get(`${this.BACKEND_URL}/api/events`);
  }

}

