import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventsEventEmitterService {

  invokeEventsPageRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor(
  ) { }

  onBackAction() {
    this.invokeEventsPageRefresh.emit();
  }

  resetEvents() {
    console.log('Reseting Events Page');
    this.invokeEventsPageRefresh.emit();
  }
}
