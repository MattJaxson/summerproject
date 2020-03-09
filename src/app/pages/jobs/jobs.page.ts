import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { JobsService } from '../../services/jobs.service';
import { FavoritesService } from '../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.page.html',
  styleUrls: ['jobs.page.scss']
})
export class JobsPage implements OnInit, OnDestroy {
  allJobs: any;
  favoriteJobs;
  favoriteJobsAmount;
  favorited = 'favorited';
  unfavorited = 'unfavorited';

  constructor(
    private router: Router,
    private jobServices: JobsService,
    private favorites: FavoritesService,
    private profile: ProfileService
  ) {}

  ngOnInit() {
    // Get all the jobs t be viewed on the home page
    this.jobServices.getJobs().subscribe( jobs => {
      this.allJobs = Object.values(jobs);
    });

    // getting all the favorite jobs that the user has on their profile
    this.profile.getUserDetails().subscribe(
      data => {
        this.favoriteJobs = data['favoriteJobs']
        console.log('Favorite Jobs');
        console.log(this.favoriteJobs);

        this.favorites.favoriteJobs$.next(this.favoriteJobs);
        this.favorites.favoriteJobs$.subscribe(
          favs => {
            console.log('Favorite Jobs in Service');
            this.favoriteJobsAmount = favs.length;
          }
        );
      });
  }

  ngOnDestroy() {

  }

  // getFavoritesAmount() {
  //   this.favorites.favoriteJobs$.subscribe(
  //     favs => {
  //       console.log(favs.length);
  //       this.favsAmount = favs.length;
  //     }
  //   );
  // }

  jobPage(job) {
    console.log(job);
    console.log('Going to specific Job Page');
    // state object after url has to be an object for navigate()
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
    console.log(job.name);
  }

  favoritesPage() {
    this.router.navigate(['/home/jobs/favorites']);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.jobServices.getJobs().subscribe( jobs => {
      this.allJobs = Object.values(jobs);
      console.log(typeof this.allJobs);
      console.log(this.allJobs);
    });

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
