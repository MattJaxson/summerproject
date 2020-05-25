import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';
import { ProfileService } from 'src/app/services/profile.service';
import { formatDistanceToNow } from 'date-fns';
import { FavoritesEventEmitterService } from 'src/app/emitters/favorites-event-emitter.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteJobs;
  userEmail;

  constructor(
    private router: Router,
    private favorites: FavoritesService,
    private profile: ProfileService,
    private eventEmitterService: FavoritesEventEmitterService
  ) { }

  ngOnInit() {
    // this.favorites.favoriteJobs$.subscribe(favorites => {
    //   this.favoriteJobs = Object.values(favorites);
    // });
    this.profile.getUserDetails().subscribe(details => {
      this.userEmail = details["email"];
      console.log(this.userEmail);
      this.favorites.getFavorites(this.userEmail).subscribe(data => {
        console.log(data);
        this.favoriteJobs = data;
        for (const job of this.favoriteJobs) {
          job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: true });
        }
      });
    });
  }

  back() {
    this.eventEmitterService.onBackAction();
    this.router.navigate(['/home/jobs']);
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
