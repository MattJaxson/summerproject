import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  BACKEND_URL = environment.url;
  favoriteJobs$ = new BehaviorSubject([]);
  favoriteJobs;

  constructor(
    private http: HttpClient,
    private profile: ProfileService
  ) {}

  getFavorites() {
    console.log('Getting Favorites');
  }

  favoriteThisJob(job) {

    // get user's email for database query
    const email = this.profile.activeEmail;

    job.userEmail = email;

    // post to database
    this.http.post(`${this.BACKEND_URL}/api/job/favorite`, job).subscribe(
      data => {
        this.favoriteJobs$.next(job);
      }
    );
    console.log('Favoriting this Job');
  }

  unFavoriteThisJob(job) {
    // get user's email for database query
    const email = this.profile.activeEmail;

    job.userEmail = email;

    // post to database
    this.http.post(`${this.BACKEND_URL}/api/job/unfavorite`, job).subscribe(
      data => {
      }
    );
    // update favoriteJobsSubject
    console.log('Unfavoriting this Job');
  }
}

