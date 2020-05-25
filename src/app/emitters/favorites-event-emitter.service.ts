import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class FavoritesEventEmitterService {

  invokeJobsPageRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onBackAction() {
    this.invokeJobsPageRefresh.emit()
  }
}
