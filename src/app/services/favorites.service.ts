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
    return this.http.post(`${this.BACKEND_URL}/api/job/get-favorites`, { email : email });
  }

  favoriteThisJob(job) {

    // get user's email for database query
    const email = this.profile.activeEmail;

    // put this job's id into this user's favoriteJobs property
    job.userEmail = email;
    let id = job._id;

    // this.favoriteJobs$.next([job]);

    return this.http.post(`${this.BACKEND_URL}/api/job/get-favorites`, { email : email }).subscribe(
      data => {
        console.log('Posting Favorite Job to Database..');
        console.log(`favorite value: ${data}`);
        let updatedFavorites = [...Object.values(data['favoriteJobs']), job];
        this.favoriteJobs$.next(updatedFavorites);

        console.log(data['favoriteJobs']);
      }
    );

  }

  unFavoriteThisJob(job) {
    // get user's email for database query
    const email = this.profile.activeEmail;

    job.userEmail = email;

    // post to database
    this.http.post(`${this.BACKEND_URL}/api/job/unfavorite`, { email : email })
      .subscribe(
      async data => {
        console.log(`unfavorite data value: ${Object.values(data)}`);
        let updatedFavorites = [...Object.values(data['favoriteJobs'])];
        
        for (let i = 0; i < updatedFavorites.length; i++) {
          if (updatedFavorites[i] === job) {
            updatedFavorites.splice(i, 1);
          }
        }

        console.log(data['favoriteJobs']);
        await this.favoriteJobs$.next(updatedFavorites);
      }
    );
    // update favoriteJobsSubject
    console.log('Unfavoriting this Job');
  }
}

