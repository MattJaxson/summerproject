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

  constructor(
    private http: HttpClient,
    private profile: ProfileService
  ) {}

  getFavorites(email) {
    console.log('Getting Favorites');
    return this.http.get(`${this.BACKEND_URL}/api/favorites`, email);
  }

  favoriteThisJob(job) {

    // get user's email for database query
    const email = this.profile.activeEmail;

    // put this job's id into this user's favoriteJobs property
    job.userEmail = email;
    let id = job._id;

    this.favoriteJobs$.next(job._id);

    return this.http.post(`${this.BACKEND_URL}/api/job/favorite`, job).subscribe(
      data => {
        console.log('Posting Favorite Job to Database..');
        console.log(data['favoriteJobs']);
      }
    );

  }

  unFavoriteThisJob(job) {
    // get user's email for database query
    const email = this.profile.activeEmail;

    job.userEmail = email;

    // post to database
    this.http.post(`${this.BACKEND_URL}/api/job/unfavorite`, job)
      .subscribe(
      data => {
        console.log(data['favoriteJobs']);
        this.favoriteJobs$.next(data['favoriteJobs']);
      }
    );
    // update favoriteJobsSubject
    console.log('Unfavoriting this Job');
  }
}

