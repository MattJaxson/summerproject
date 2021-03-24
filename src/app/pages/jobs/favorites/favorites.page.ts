import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';
import { PlatformLocation } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit, OnDestroy {
  favoriteJobsObj;
  userEmail;

  favoriteSubs: Subscription;
  profileSub: Subscription;
  noFavorites: boolean;

  constructor(
    private router: Router,
    private favorites: FavoritesService,
    private profile: ProfileService,
    private eventEmitterService: FavoritesEventEmitterService,
    private location: PlatformLocation
  ) { }

  ngOnDestroy(): void {
    // this.favoriteSubs.unsubscribe();
    // this.favorites.favoriteJobs$.unsubscribe();
    this.profileSub.unsubscribe();
  }

  ngOnInit() {
    this.location.onPopState(() => {
      this.eventEmitterService.onBackAction();
      // this.favorites.getFavorites(this.userEmail);
    })

    // this.favorites.favoriteJobs$.subscribe(favorites => {
    //   this.favoriteJobs = Object.values(favorites);
    // });
    this.getFavoriteJobs();
  }

  back() {
    this.eventEmitterService.onBackAction();
    this.router.navigate(['/home/jobs']);
  }

  getFavoriteJobs() {
    // getting all the favorite jobs that the user has on their profile
    this.profileSub = this.profile.getUserDetails().subscribe( data => {
      this.userEmail = data['email'];
      // this.favoriteJobs = data['favoriteJobs']
      // console.log('Favorite Jobs:');
      // console.log(this.favoriteJobs);

      // this.favorites.favoriteJobs$.next(this.favoriteJobs);
      this.favorites.favoriteJobs$.subscribe(
        favs => {
          console.log(`Favorite Jobs in Service: ${favs}`);
          this.favoriteSubs = this.favorites.getFavorites(this.userEmail).subscribe( favDetails => {
            this.favoriteJobsObj = favDetails;
            console.log('Favorite jobs:')
            console.log(favDetails)
            if(this.favoriteJobsObj.length == 0) {
              console.log('wassup');
              this.noFavorites = true;
            } else {
              this.noFavorites = false;
            }
            for (const job of this.favoriteJobsObj) {
              job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: true });
            }
          });
        }
      )
    });
  }

  jobPage(job) {
    console.log(job);
    console.log('Going to specific Job Page');
    // state object after url has to be an object for navigate()
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
    console.log(job.name);
  }

  favoriteJobPage() {
    console.log('Going to favorite bad');
  }


}
