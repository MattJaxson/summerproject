import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from '../../environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  BACKEND_URL = environment.url;
  favoriteJobs$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private profile: ProfileService,
    private toast: ToastController
  ) {}

  getFavorites(email) {
    console.log('Getting Favorites');
    return this.http.post(`${this.BACKEND_URL}/api/jobs/get-favorites`, { email : email });
  }

  favoriteThisJob(job) {

    // get user's email for database query
    const email = this.profile.activeEmail;

    // put this job's id into this user's favoriteJobs property
    job.userEmail = email;
    let id = job._id;

    // this.favoriteJobs$.next([job]);

    return this.http.post(`${this.BACKEND_URL}/api/jobs/favorite`, { email : email, _id : id }).subscribe(
      data => {
        console.log('Posting Favorite Job to Database..');
        let updatedFavorites = [...Object.values(data)];
        this.favoriteJobs$.next(updatedFavorites);
        this.presentToast('You favorited this job!');
      }
    );

  }

  unFavoriteThisJob(job) {
    // get user's email for database query
    const email = this.profile.activeEmail;

    job.userEmail = email;
    let id = job._id;

    // post to database
    this.http.post(`${this.BACKEND_URL}/api/jobs/unfavorite`, { email : email, _id: id}).subscribe(
      async data => {
        console.log("Unfavorite data value: ", data);
        let updatedFavorites = [...Object.values(data)];
        
        for (let i = 0; i < updatedFavorites.length; i++) {
          if (updatedFavorites[i] === job) {
            updatedFavorites.splice(i, 1);
          }
        }

        this.favoriteJobs$.next(updatedFavorites);
        this.presentToast('You removed this job from Favorites.');
      }
    );
    // update favoriteJobsSubject
    console.log('Unfavoriting this Job');
  }

  async presentToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
      cssClass: 'updated-toast',
      position: 'bottom'
    });

    toast.present();
  }
  
}

