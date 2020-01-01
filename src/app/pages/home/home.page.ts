import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { JobsService } from '../../services/jobs.service';
import { FavoritesService } from '../../services/favorites.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  allJobs: any;
  favsAmount;

  constructor(
    private router: Router,
    private jobServices: JobsService,
    private favorites: FavoritesService
  ) {}

  ngOnInit() {
    this.jobServices.getJobs().subscribe( jobs => {
      this.allJobs = Object.values(jobs);
    });

    this.getFavoritesAmount();
  }

  ngOnDestroy() {

  }

  getFavoritesAmount() {
    this.favorites.favoriteJobs$.subscribe(
      favs => {
        console.log(favs.length);
        this.favsAmount = favs.length;
      }
    );
  }

  jobPage(job) {
    console.log(job);
    console.log('Going to specific Job Page');
    // state object after url has to be an object for navigate()
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/home/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
    console.log(job.name);
  }

  favoritesPage() {
    this.router.navigate(['/home/home/favorites']);
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
