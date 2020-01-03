import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.page.html',
  styleUrls: ['./job-page.page.scss'],
})
export class JobPagePage implements OnInit {
  // The state of the job page with details from selecting a specific job from the home page.
  public jobId;
  public jobTitle;
  public jobCompanyName;
  public jobCompanyEmail;
  // public jobPosted;
  public jobSummary;
  public jobFullJobDescription;
  public jobRateOfPay;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) { }

  applyForJob() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail ]);
  }

  favoriteThisJob() {
    console.log('Favoriting this Job');
    // Check for error before we present the toast
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'This job has been favorited.',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    const title  = this.activatedRoute.snapshot.paramMap.get('title');
    // tslint:disable-next-line: radix
    const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
    // tslint:disable-next-line: radix
    const companyEmail  = this.activatedRoute.snapshot.paramMap.get('companyEmail');
     // tslint:disable-next-line: radix
    const summary  = this.activatedRoute.snapshot.paramMap.get('summary');
     // tslint:disable-next-line: radix
    const fullJobDescription  = this.activatedRoute.snapshot.paramMap.get('fullJobDescription');
      // tslint:disable-next-line: radix
    const rateOfPay  = this.activatedRoute.snapshot.paramMap.get('rateOfPay');

    this.jobId = id;
    this.jobTitle = title;
    // this.jobPosted = posted;
    this.jobCompanyName = companyName;
    this.jobCompanyEmail = companyEmail;
    this.jobSummary = summary;
    this.jobFullJobDescription = fullJobDescription;
    this.jobRateOfPay = rateOfPay;
  }



}
