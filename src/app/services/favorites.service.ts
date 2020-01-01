import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  favoriteJobs$ = new BehaviorSubject(['']);

  constructor(
    private http: HttpClient
  ) {}

  getFavorites() {
    console.log('Getting Favorites');
  }

  favoriteThisJob(job) {
    console.log('Favoriting this Job');
    this.favoriteJobs$.next(job);
    this.favoriteJobs$.subscribe(jobs => {
      console.log(jobs);
    });
  }

  unFavoriteThisJob(job) {
    let value = this.favoriteJobs$.getValue();
    if (value === job ) {
      console.log('value = job');
      job = Object.values(job);
      console.log(job);
    }
    console.log(value);
    console.log('Unfavoriting this Job');
  }
}

