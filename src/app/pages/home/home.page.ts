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

  constructor(
    private router: Router,
    private jobServices: JobsService,
    private favoritesServices: FavoritesService
  ) {}

  ngOnInit() {
    this.jobServices.getJobs().subscribe( jobs => {
      this.allJobs = Object.values(jobs);
    });
  }

  ngOnDestroy() {

  }

  jobPage(job) {
    console.log('Going to specific Job Page');
    // state object after url has to be an object for navigate()
    this.router.navigate(['/home/home/job-page', job.id, job.name, job.posted, job.companyName, job.description]);
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
