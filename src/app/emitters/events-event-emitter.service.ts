import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventsEventEmitterService {

  invokeEventsPageRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onBackAction() {
    this.invokeEventsPageRefresh.emit();
  }

  resetEvents() {
    this.invokeEventsPageRefresh.emit();
  }
}
