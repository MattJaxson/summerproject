import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})
export class ApplyPage implements OnInit {
  public jobId;
  public jobName;
  public jobCompanyName;
  public jobPosted;
  public jobDescription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    // make into a asycn function
    // post application to backend THEN
    // sendConfirmationEmail() THEN
    // navigate to confirmation page
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/home/job-page/:id/:name/:posted/:companyName/:description/apply/:id/:name/:posted/:companyName/:description/apply-confirm', this.jobId, this.jobName, this.jobPosted, this.jobCompanyName, this.jobDescription ]);
  }

  ngOnInit() {
     // tslint:disable-next-line: radix
     const id  = this.activatedRoute.snapshot.paramMap.get('id');
     // tslint:disable-next-line: radix
     const name  = this.activatedRoute.snapshot.paramMap.get('name');
     // tslint:disable-next-line: radix
     const posted  = this.activatedRoute.snapshot.paramMap.get('posted');
     // tslint:disable-next-line: radix
     const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
      // tslint:disable-next-line: radix
     const description  = this.activatedRoute.snapshot.paramMap.get('description');

     this.jobId = id;
     this.jobName = name;
     this.jobPosted = posted;
     this.jobCompanyName = companyName;
     this.jobDescription = description;

  }

}
