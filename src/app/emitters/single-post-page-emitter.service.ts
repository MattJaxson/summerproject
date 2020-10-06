import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SinglePostPageEmitterService {

  invokeSinglePostPageRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  singlePostPageRefresh() {
    this.invokeSinglePostPageRefresh.emit();
  }
}
