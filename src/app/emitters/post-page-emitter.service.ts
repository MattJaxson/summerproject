import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class PostPageEmitterService {

  invokePostsPageRefresh = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onBackAction() {
    this.invokePostsPageRefresh.emit();
  }

  postPageRefresh() {
    this.invokePostsPageRefresh.emit();
  }

}
