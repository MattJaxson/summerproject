import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from '../../../services/jobs.service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})
export class ApplyPage implements OnInit {

  public jobTitle;
  public jobCompanyName;
  public jobCompanyEmail;

  user = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobs: JobsService,
    private profile: ProfileService
  ) { }

  viewResume() {
    console.log('Viewing Resume');
  }

  uploadResume() {
    console.log('Uploading Resume');

  }

  sendConfirmationEmail() {
    console.log('Sending confirmation email to Users email address');

  }

  finishApplication() {
    this.jobs.sendEmailApplication(this.user).subscribe();
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/home/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail ]);
  }

  ngOnInit() {
     // tslint:disable-next-line: radix
     const title  = this.activatedRoute.snapshot.paramMap.get('title');
     const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
     const companyEmail  = this.activatedRoute.snapshot.paramMap.get('companyEmail');

     this.jobTitle = title;
     this.jobCompanyName = companyName;
     this.jobCompanyEmail = companyEmail;

     this.profile.getUserDetails().subscribe(data => {
       this.user = data;
       this.user.jobTitle = this.jobTitle;
       this.user.jobCompanyName = this.jobCompanyName;
       this.user.jobCompanyEmail = this.jobCompanyEmail;
     });

  }

}
