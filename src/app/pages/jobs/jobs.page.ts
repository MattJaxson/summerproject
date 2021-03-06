import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonSearchbar, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import { JobsService } from '../../services/jobs.service';
import { FavoritesService } from '../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.page.html',
  styleUrls: ['jobs.page.scss']
})
export class JobsPage implements OnInit, OnDestroy {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;

  jobsSub: Subscription;
  profileSub: Subscription;
  favoriteJobsSub: Subscription;

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
    private eventEmitterService: FavoritesEventEmitterService,
    public loading: LoadingController
  ) {}

  ngOnDestroy() {
    this.eventEmitterService.subsVar.unsubscribe();
    this.jobsSub.unsubscribe();
    this.profileSub.unsubscribe();
    this.favoriteJobsSub.unsubscribe();
  }

  ngOnInit() {

    // Hide Tab Bar
    const tabBar = document.getElementById('tabBar');
    tabBar.style.display = 'static';

    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeJobsPageRefresh.subscribe(() => {
        this.getJobs();
      });
    }

    this.getFavoriteJobs();

    this.jobsSub = this.jobs.getJobs().subscribe( jobs => {

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

  filter($job) {

    this.initializeItems();
    let searchTerm = $job.detail.value;

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

    if (!searchTerm) {
      console.log('Search term is empty; showing all jobs instead');
      this.noSearchInput = false;
      this.searching = false;
      this.getJobs();
    }

  }

  initializeItems(): void {
    this.allJobs = this.loadedAllJobs;
  }

  

  getFavoriteJobs() {
    // Get all the user's favorite jobs
    this.profileSub = this.profile.getUserDetails().subscribe(
      data => {
        this.favoriteJobs = data['favoriteJobs']
        console.log('Favorite Jobs:');
        console.log(this.favoriteJobs);

        this.favorites.favoriteJobs$.next(this.favoriteJobs);
        this.favoriteJobsSub = this.favorites.favoriteJobs$.subscribe(
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

    this.jobsSub = this.jobs.getJobs().subscribe( jobs => {

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

  async getJobs() {
    this.jobsSub = this.jobs.getJobs().subscribe( jobs => {

      this.allJobs = Object.values(jobs);
      this.allJobsLength = this.allJobs.length;
      this.allJobs.reverse();
      this.searching = false;

      // Format Times
      for (const job of this.allJobs) {
        job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
      }
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loading.create({
      duration: 1000,
      message: 'Searching for jobs...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      keyboardClose: false
    });
    return await loading.present();
  }

}
