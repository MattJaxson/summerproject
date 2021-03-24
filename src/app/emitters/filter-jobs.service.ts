import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class FilterJobsService {
  filterJobsEmitter = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  filterJobs(selection) {
    console.log('Emitting from FilterJobs Emitter...');
    
    this.filterJobsEmitter.emit(selection);
  }
}
