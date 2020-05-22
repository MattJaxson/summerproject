import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class PostPageEmitterService {

  // First component = post-page
  // Second component = post-page-page

  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onFirstComponentButtonClick() {
    this.invokeFirstComponentFunction.emit();
  }
}
