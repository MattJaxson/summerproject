import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { IonSearchbar, LoadingController } from '@ionic/angular';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { JobsService } from '../../services/jobs.service';
import { FavoritesService } from '../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { BehaviorSubject } from 'rxjs';
import { format, formatDistanceToNow } from 'date-fns';



@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.page.html',
  styleUrls: ['jobs.page.scss']
})
export class JobsPage implements OnInit, OnDestroy {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;

  allJobs;
  allJobsLength;
  jobsGoingLength = 0;
  favoriteJobs;
  favoriteJobsAmount;
  favoriteJobsObj;
  searching = false;
  searchTerm;
  noSearchInput = false;
  loadedAllJobs;
  favorited = 'favorited';
  unfavorited = 'unfavorited';

  constructor(
    private router: Router,
    private jobs: JobsService,
    private favorites: FavoritesService,
    private profile: ProfileService,
    public loading: LoadingController
  ) {}

  ngOnInit() {
    // Get all the jobs t be viewed on the home page
    this.jobs.getJobs().subscribe( jobs => {
      this.allJobs = Object.values(jobs);
      console.log("alljobs: ", this.allJobs);
    });

    this.getFavoriteJobs();

    this.jobs.getJobs().subscribe( jobs => {

        // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list jobs,
        // .

        console.log('jobs that are intially loaded: ');
        console.log(jobs);

        this.allJobs = Object.values(jobs);
        this.allJobsLength  = this.allJobs.length;
        this.allJobs.reverse();

        this.loadedAllJobs = Object.values(jobs);
        this.loadedAllJobs.reverse();

        for (const job of this.allJobs) {
          job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: true });
        }
      });
  }

  ngOnDestroy() {

  }

  getFavoriteJobs() {
    // getting all the favorite jobs that the user has on their profile
    this.profile.getUserDetails().subscribe(
      data => {
        this.favoriteJobs = data['favoriteJobs']
        console.log('Favorite Jobs:');
        console.log(this.favoriteJobs);

        this.favorites.favoriteJobs$.next(this.favoriteJobs);
        this.favorites.favoriteJobs$.subscribe(
          favs => {
            console.log(`Favorite Jobs in Service: ${favs}`);
            this.favoriteJobsAmount = favs.length;
            this.favorites.getFavorites(data['email']).subscribe( favDetails => {
              this.favoriteJobsObj = favDetails;
            })
          }
        );
      }
    );
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
    console.log('Going to specific Job Page:', job.title);
    console.log('The job: ', job);
    // state object after url has to be an object for navigate()
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
  }

  favoritesPage() {
    this.router.navigate(['/home/jobs/favorites']);
  }

  async doRefresh(job) {

    this.allJobs = [];

    this.getFavoriteJobs();

    await this.jobs.getJobs().subscribe( jobs => {

      this.allJobs = Object.values(jobs);
      this.allJobsLength = this.allJobs.length;
      this.allJobs.reverse();
      this.searching = false;

      // Format Times
      for (const job of this.allJobs) {
        job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
      }
    });

    setTimeout(() => {
      job.target.complete();
      console.log('jobs Refreshed');
    }, 2000);

    await this.searchbar.getInputElement().then(  (searchbarInputElement) => {
      searchbarInputElement.value = '';
      this.noSearchInput = false;
    });

    await console.log('Refreshing jobs Page..');
  }

  filter($job) {

    this.initializeItems();
    let searchTerm = $job.detail.value;

    if (!searchTerm) {
      console.log('No results returned from Search');
      this.noSearchInput = true;
    }

    this.presentLoadingWithOptions();

    this.allJobs = this.allJobs.filter( currentJobs => {
      console.log(currentJobs);

      if (!currentJobs || !searchTerm  ) {

        console.log('No results from that search');
        this.noSearchInput = true;

      }

      if ( currentJobs.title && searchTerm) {

        if (currentJobs.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {

          console.log(currentJobs.title);
          console.log((currentJobs));

          this.searchTerm = searchTerm;

          this.searching = true;
          this.noSearchInput = false;

          return true;
      }
        return false;
    }
      this.noSearchInput = true;

  });


    this.allJobsLength = this.allJobs.length;

    // If there are no matches with the searchTerm
    if ( this.allJobsLength === 0 ) {

      console.log('No results from that search');
      this.searching = true;
      this.searchTerm = searchTerm;

      this.searchbar.getInputElement().then(  (searchbarInputElement) => {
        searchbarInputElement.value = '';
      });
      this.noSearchInput = true;
    }
  }

  initializeItems(): void {
    this.allJobs = this.loadedAllJobs;
  }

  async presentLoadingWithOptions() {
    const loading = await this.loading.create({
      duration: 1000,
      message: 'Searching for jobs...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
