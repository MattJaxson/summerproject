import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteJobs;
  favoriteJobsObj;
  userEmail;

  constructor(
    private router: Router,
    private favorites: FavoritesService,
    private profile: ProfileService
  ) { }

  ngOnInit() {
    // this.favorites.favoriteJobs$.subscribe(favorites => {
    //   this.favoriteJobs = Object.values(favorites);
    // });
    this.getFavoriteJobs();
  }

  back() {
    this.router.navigate(['/home/jobs']);
  }

  getFavoriteJobs() {
    // getting all the favorite jobs that the user has on their profile
    this.profile.getUserDetails().subscribe( data => {
      this.userEmail = data['email'];
      this.favoriteJobs = data['favoriteJobs']
      console.log('Favorite Jobs:');
      console.log(this.favoriteJobs);

      this.favorites.favoriteJobs$.next(this.favoriteJobs);
      this.favorites.favoriteJobs$.subscribe(
        favs => {
          console.log(`Favorite Jobs in Service: ${favs}`);
          this.favorites.getFavorites(this.userEmail).subscribe( favDetails => {
            this.favoriteJobsObj = favDetails;
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
