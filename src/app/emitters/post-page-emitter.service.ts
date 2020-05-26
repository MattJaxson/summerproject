import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class PostPageEmitterService {

  // First component = post-page
  // Second component = post-page-page

  invokeRepliesRefresh = new EventEmitter();
  invokePostPageRefresh = new EventEmitter();
  // invokePostsPagePAGERefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  repliesRefresh() {
    this.invokeRepliesRefresh.emit();
  }

  postPageRefresh() {
    this.invokePostPageRefresh.emit();
  }


}
