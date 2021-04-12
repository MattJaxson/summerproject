import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonSearchbar, LoadingController, PopoverController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { JobsService } from '../../services/jobs.service';
import { FavoritesService } from '../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';
import { Subscription } from 'rxjs';
import { JobsFilterPopoverComponent } from 'src/app/components/jobs-filter-popover/jobs-filter-popover.component';
import { FilterJobsService } from 'src/app/emitters/filter-jobs.service';



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
  routerSub: Subscription;
  jobFilter = 'newest';
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
  filtering: boolean;

  constructor(
    private router: Router,
    private jobs: JobsService,
    private favorites: FavoritesService,
    private profile: ProfileService,
    private popoverController: PopoverController,
    private favoritesEventEmitterService: FavoritesEventEmitterService,
    private filterJobsService: FilterJobsService,
    public loading: LoadingController
  ) {}

  ngOnDestroy() {
    this.favoritesEventEmitterService.subsVar.unsubscribe();
    this.jobsSub.unsubscribe();
    this.profileSub.unsubscribe();
    this.favoriteJobsSub.unsubscribe();
  }
  ngOnInit() {
    // Refresh Favorites after one has been deleted from the favoites page.
    if (this.favoritesEventEmitterService.subsVar == undefined) {
      this.favoritesEventEmitterService.subsVar = this.favoritesEventEmitterService.invokeJobsPageRefresh.subscribe(() => {
        this.getJobs();
      });
    }
    // Filter Jobs from Popover
    if (this.filterJobsService.subsVar == undefined) {
      this.filterJobsService.subsVar = this.filterJobsService.filterJobsEmitter.subscribe(data => {
        // Filter jobs
        this.jobFilter = data;
        this.getJobs();
      });
    }

    this.getFavoriteJobs();
    this.getJobs();
    this.trackRoute();
  }
  trackRoute() {
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(
      data => {
        console.log(data['url']);
        let url = data['url'];
        if(url.includes('/home/jobs/job-page/')) {
          console.log('Hide Tab Bar!');
          let tabBar = document.getElementById('tabBar');
          tabBar.style.height = '0px'
          tabBar.style.transition = '1s'
        } else {
          let tabBar = document.getElementById('tabBar');
          console.log(tabBar);
          tabBar.style.height = '50px'
          tabBar.style.transition = '1s'
        }
      });
  }
  async filterMenu() {
    const popover = await this.popoverController.create({
      component: JobsFilterPopoverComponent,
      cssClass: 'my-custom-class',
      // translucent: true,
      showBackdrop: true,
      componentProps: {
        filter: this.jobFilter
      }
    });
     await popover.present();
     await popover.onWillDismiss().then((data) => {
       console.log(data);
     }
     );
  }
  filter(job) {

    this.initializeItems();
    let searchTerm = job.detail.value;

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
    this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyLogo, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
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
      console.log(jobs);
      switch (this.jobFilter) {
        case 'htol':
          console.log('High to Low');
          this.filtering = true;
          this.jobFilter = 'htol';
          this.allJobs = Object.values(jobs);
          this.allJobsLength = this.allJobs.length;

          function sortHighToLow(a, b){
            console.log('Sorting Price')
            return parseFloat(a.rateOfPay) - parseFloat(b.rateOfPay);
          }
          this.allJobs.sort(sortHighToLow);
          this.allJobs.reverse();
          this.searching = false;

          // Format Times
          for (const job of this.allJobs) {
            job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
          }
          break;
        case 'ltoh':
          console.log('Low to High');
          this.filtering = true;
          this.jobFilter = 'ltoh';
          this.allJobs = Object.values(jobs);
          this.allJobsLength = this.allJobs.length;
          function sortLowToHigh(a, b){
            console.log('Sorting Price')
            return parseFloat(b.rateOfPay) - parseFloat(a.rateOfPay);
          }
          this.allJobs.sort(sortLowToHigh);
          this.allJobs.reverse();
          this.searching = false;

          // Format Times
          for (const job of this.allJobs) {
            job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
          }
          break;
        case 'oldest':
          console.log('Oldest');
          this.filtering = true;
          this.jobFilter = 'oldest';
          this.allJobs = Object.values(jobs);
          this.allJobsLength = this.allJobs.length;
          this.searching = false;

          // Format Times
          for (const job of this.allJobs) {
            job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
          }
          break;
        case 'newest':
          console.log('Newest');
          this.filtering = true;
          this.jobFilter = 'newest';
          this.allJobs = Object.values(jobs);
          this.allJobsLength = this.allJobs.length;
          this.allJobs.reverse();
          this.searching = false;

          // Format Times
          for (const job of this.allJobs) {
            job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
          }
          break;

        default:
          break;
      }

      return setTimeout(() => {
        this.filtering = false;
      }, 1000);
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
