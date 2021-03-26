import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class FilterPostsService {
  filterPostsEmitter = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  filterPosts(selection) {
    console.log('Emitting from FilterPosts Emitter...');
    this.filterPostsEmitter.emit(selection);
  }
}
